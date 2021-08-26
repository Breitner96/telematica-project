let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id_categoria = urlParams.get("id_categoria");
let name_category = urlParams.get("name");

document.getElementById("namecategory").value = name_category;

let formulariocategoria = document.getElementById("registercategory");

formulariocategoria.addEventListener("submit", function (e) {
  e.preventDefault();

  let datosaarray = {};
  let datos = new FormData(formulariocategoria);

  datos.append("id_categoria",id_categoria);
  datos.forEach((value, key) => {
    datosaarray[key] = value;
  });

  // console.log(datos.get('email'));
  // console.log(datos.get('password'));

//   datosaarray=Array(datosaarray);
//   datosaarray.push({
//     key:   "id_categoria",
//     value: id_categoria
// });
  console.log(datos);
//   console.log(JSON.stringify(datosaarray));
  console.log(id_categoria);


  axios({
    url: "../../../models/categoryModel.php",
    method: "update",
    responseType: "json",
    data: JSON.stringify(datosaarray),
  })
    .then((res) => {
      if (res.data.codigoResultado == 1) {
        Swal.fire({
          icon: "success",
          title: res.data.mensaje,
          showConfirmButton: false,
          timer: 1500,
        }).then((resp) => {
          window.location.href = "categorias.php";
        });

        formulariocategoria.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: res.data.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
        formulariocategoria.reset();
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

function deletecategory(id) {
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
        url: "../../../models/categoryModel.php",
        method: "delete",
        responseType: "json",
        data: {
          id_categoria: id,
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
              window.location.href = "categorias.php";
            });
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.mensaje,
              showConfirmButton: false,
              timer: 1500,
            }).then((resp) => {
              window.location.href = "categorias.php";
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
