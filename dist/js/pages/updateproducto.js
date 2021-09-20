let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

// console.log("tiene");

var id_producto = urlParams.get("id_producto");
var name_product = urlParams.get("name");
var precio_producto = urlParams.get("precio");
var talla_producto = urlParams.get("talla");
var cantidad_producto = urlParams.get("cantidad");
var name_imagen = urlParams.get("imagen");
var id_categoria = urlParams.get("id_categoria");
var name_categoria = urlParams.get("categoria");

document.getElementById("nameproducto").value = name_product;
document.getElementById("precio").value = precio_producto;
document.getElementById("talla").value = talla_producto;
document.getElementById("cantidad").value = cantidad_producto;

ListCategories();
Listproductos(id_producto);

let select = document.getElementById("seleccategoria");
let formularioupdateproduc = document.getElementById("actualizarproducto");

function ListCategories() {
  axios({
    url: "../../../models/categoryModel.php",
    method: "get",
    responseType: "json",
  })
    .then((res) => {
      if (res.data) {
        // console.log(item.phone);
        let resp = document.querySelector("#seleccategoria");

        resp.innerHTML = `<option value="${id_categoria}" disabled selected>Actual "${name_categoria}"</option>`;
        for (let item of res.data) {
          resp.innerHTML += `
                    <option value="${item.id_categoria}" name="${item.id_categoria}">${item.name}</option>
                `;
        }
      } else {
        console.log("Tabla Vacia");
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function Listproductos(id) {
  axios({
    url: "../../../models/productosModel.php",
    method: "view",
    responseType: "json",
    data: {
      id_producto: id,
    },
  })
    .then((res) => {
      if (res.data) {
        // console.log(item.phone);

        let resp = document.querySelector("#imagenupdate");

        resp.innerHTML = `<img style="width:100%" src="../../../assets/imgproduct/${res.data.name_imagen}" alt="">`;
      } else {
        console.log("Tabla Vacia");
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

formularioupdateproduc.addEventListener("submit", function (e) {
  e.preventDefault();

  let datos = new FormData();

  datos.append("name", formularioupdateproduc["name"].value);
  datos.append("precio", formularioupdateproduc["precio"].value);
  datos.append("talla", formularioupdateproduc["talla"].value);
  datos.append("cantidad", formularioupdateproduc["cantidad"].value);
  datos.append("id_categoria", select.value);
  datos.append("id_producto", id_producto);
  datos.append("imagenanterior", name_imagen);

  if (document.getElementById("customFile").files[0]) {
    console.log("si tiene imagen");
    datos.append("imagen", document.getElementById("customFile").files[0]);
    datos.append("_method", "PUT");

    console.log(document.getElementById("customFile").files[0]);

    // console.log(datos.get("name"));

    axios({
      url: "../../../models/productosModel.php",
      method: "post",
      header: {
        "Content-Type": "multipart/form-data",
      },
      data: datos,
    })
      .then((res) => {
        if (res.data.codigoResultado == 1) {
          Swal.fire({
            icon: "success",
            title: res.data.mensaje,
            showConfirmButton: false,
            timer: 1500,
          }).then((resp) => {
            window.location.href = "productos.php";
          });

        //   formularioupdateproduc.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: res.data.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
        //   formularioupdateproduc.reset();
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios({

        url: "../../../models/productosModel.php",
        method: "PUT",
        data: {

            "name": formularioupdateproduc["name"].value,
            "precio": formularioupdateproduc["precio"].value,
            "talla": formularioupdateproduc["talla"].value,
            "cantidad": formularioupdateproduc["cantidad"].value,
            "id_categoria": select.value,
            "id_producto": id_producto

        }
      })
        .then((res) => {
          if (res.data.codigoResultado == 1) {
            Swal.fire({
              icon: "success",
              title: res.data.mensaje,
              showConfirmButton: false,
              timer: 1500,
            }).then((resp) => {
              window.location.href = "productos.php";
            });
  
            // formularioupdateproduc.reset();
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.mensaje,
              showConfirmButton: false,
              timer: 1500,
            });
            // formularioupdateproduc.reset();
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

  }
});

document.getElementById("customFile").onchange = function () {
  console.log(this.value);
  document.getElementById("text").innerHTML =
    document.getElementById("customFile").files[0].name;

  // console.log("hola");
};
