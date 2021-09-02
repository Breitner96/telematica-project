document.getElementById('customFile').onchange = function () {
  console.log(this.value);
  document.getElementById('text').innerHTML = document.getElementById('customFile').files[0].name;

  console.log("hola");
}

let formularioproduct = document.getElementById("registrarproducto");
let select = document.getElementById("seleccategoria");
let formularioupdateproduc = document.getElementById("actualizarproducto");
ListCategories();


let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

let id_producto = urlParams.get("id_producto");
let name_product = urlParams.get("name");
let precio_producto = urlParams.get("precio");
let talla_producto = urlParams.get("talla");
let cantidad_producto = urlParams.get("cantidad");
let name_imagen = urlParams.get("imagen");
let id_categoria = urlParams.get("id_categoria");
let name_categoria=urlParams.get("categoria")



document.getElementById("nameproducto").value = name_product;
document.getElementById("precio").value = precio_producto;
document.getElementById("talla").value = talla_producto;
document.getElementById("cantidad").value = cantidad_producto;

Listproductos(id_producto);

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


formularioupdateproduc.addEventListener("submit", function (e) {
  e.preventDefault();

  let datos = new FormData();

  datos.append('name',formularioupdateproduc['name'].value);
  datos.append('precio',formularioupdateproduc['precio'].value); 
  datos.append('talla',formularioupdateproduc['talla'].value); 
  datos.append('cantidad',formularioupdateproduc['cantidad'].value);  
  datos.append('id_categoria', select.value);

  

  

  if (document.getElementById('customFile').files[0]) {
    
    console.log("si tiene imagen");
    datos.append('imagen',document.getElementById('customFile').files[0]);
  }

  else{

    console.log("no tiene imagen");
  }


  // console.log(document.getElementById('customFile').files[0]);

  // axios({
  //   url: "../../../models/categoryModel.php",
  //   method: "update",
  //   responseType: "json",
  //   data: JSON.stringify(datosaarray),
  // })
  //   .then((res) => {
  //     if (res.data.codigoResultado == 1) {
  //       Swal.fire({
  //         icon: "success",
  //         title: res.data.mensaje,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       }).then((resp) => {
  //         window.location.href = "categorias.php";
  //       });

  //       formulariocategoria.reset();
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: res.data.mensaje,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       formulariocategoria.reset();
  //     }
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});



formularioproduct.addEventListener("submit", function (e) {
    e.preventDefault();


    // let datosaarray = {};

    console.log(formularioproduct);

    let datos = new FormData();


    datos.append('name',formularioproduct['name'].value);
    datos.append('precio',formularioproduct['precio'].value); 
    datos.append('talla',formularioproduct['talla'].value); 
    datos.append('cantidad',formularioproduct['cantidad'].value);  
    datos.append('id_categoria', select.value);

    

    datos.append('imagen',document.getElementById('customFile').files[0]);

    // datos.forEach((value, key) => {
    //   datosaarray[key] = value;
    // });

    console.log(datos);
    
    console.log(formularioproduct['name'].value);

    // console.log(JSON.stringify(datos));
    
    // fetch("../../../models/productosModel.php", {
    //   method: 'POST',
    //   body: datos,
    // })
    //   .then(respuesta => respuesta.text())
    //   .then(decodificado => {
    //       console.log(decodificado);
    //   });

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


function deleteproducto(id){

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
          "id_producto": id,
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

function Listproductos(id) {
  axios({
    url: "../../../models/productosModel.php",
    method: "view",
    responseType: "json",
    data:{
      "id_producto": id
    }
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

