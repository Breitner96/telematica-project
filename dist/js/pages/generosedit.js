let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id_genero = urlParams.get("id_genero");
let name_genero = urlParams.get("name");

document.getElementById("nameprenda").value = name_genero;

let formulariogenero = document.getElementById("registerprenda");

formulariogenero.addEventListener("submit", function (e) {
  e.preventDefault();

  let datosaarray = {};
  let datos = new FormData(formulariogenero);

  datos.append("id_genero",id_genero);
  datos.forEach((value, key) => {
    datosaarray[key] = value;
  });

  // console.log(datos.get('email'));
  // console.log(datos.get('password'));

//   datosaarray=Array(datosaarray);
//   datosaarray.push({
//     key:   "id_genero",
//     value: id_genero
// });
  console.log(datos);
//   console.log(JSON.stringify(datosaarray));
  console.log(id_genero);


  axios({
    url: "../../../models/generosModel.php",
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
          window.location.href = "generos.php";
        });

        formulariogenero.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: res.data.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
        formulariogenero.reset();
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

function deletegenero(id) {
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
        url: "../../../models/generosModel.php",
        method: "delete",
        responseType: "json",
        data: {
          id_genero: id,
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
              window.location.href = "generos.php";
            });
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.mensaje,
              showConfirmButton: false,
              timer: 1500,
            }).then((resp) => {
              window.location.href = "generos.php";
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
