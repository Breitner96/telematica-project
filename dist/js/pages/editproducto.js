let formularioproduct = document.getElementById("registrarproducto");
let select = document.getElementById("seleccategoria");

ListCategories();

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

        resp.innerHTML = `<option value="" disabled selected>Seleccione una Categoria...</option>`;
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
formularioproduct.addEventListener("submit", function (e) {
  e.preventDefault();

  // let datosaarray = {};

  console.log(formularioproduct);

  let datos = new FormData();

  datos.append("name", formularioproduct["name"].value);
  datos.append("precio", formularioproduct["precio"].value);
  datos.append("talla", formularioproduct["talla"].value);
  datos.append("cantidad", formularioproduct["cantidad"].value);
  datos.append("id_categoria", select.value);

  datos.append("imagen", document.getElementById("customFile").files[0]);

  datos.append("_method", null);

  console.log(datos.get("_method"));

  // console.log(datos);

  console.log(formularioproduct["name"].value);

  axios({
    url: "../../../models/productosModel.php",
    method: "post",
    header:{
      'Content-Type': 'multipart/form-data'
    },
    data: datos
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

        // formulariogenero.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: res.data.mensaje,
          showConfirmButton: false,
          timer: 2000,
        });
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

function deleteproducto(id) {
  console.log(id);

  Swal.fire({
    title: "Estas Seguro?",
    text: "No puedes revertir esto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Borrarlo",
  }).then((result) => {
    if (result.isConfirmed) {
      axios({
        url: "../../../models/productosModel.php",
        method: "delete",
        data: {
          id_producto: id,
        },
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
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.mensaje,
              showConfirmButton: false,
              timer: 1500,
            }).then((resp) => {
              window.location.href = "productos.php";
            });
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

document.getElementById("customFile").onchange = function () {
  console.log(this.value);
  document.getElementById("text").innerHTML =
    document.getElementById("customFile").files[0].name;

  // console.log("hola");
};
