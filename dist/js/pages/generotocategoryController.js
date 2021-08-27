let select = document.getElementById("selectgeneros");
let formulariogenerotoCategory = document.getElementById(
  "registergenerotoCategory"
);

ListCategories();

function deletegenerotoCategoria(idcategoria,idgenero) {

  // console.log(id);
  console.log(idcategoria);
  console.log(idgenero);

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
        url: "../../../models/generotocategoryModel.php",
        method: "delete",
        responseType: "json",
        data: {
          id_category: idcategoria,
          id_genero:idgenero
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
              window.location.href = "generotoCategories.php";
            });
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.mensaje,
              showConfirmButton: false,
              timer: 1500,
            }).then((resp) => {
              window.location.href = "generotoCategories.php";
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
// console.log(list);



select.addEventListener("change", function () {
  let selectedOption = this.options[select.selectedIndex];
  console.log(selectedOption.value + ": " + selectedOption.text);
});

function ListCategories() {
  axios({
    url: "../../../models/categoryModel.php",
    method: "get",
    responseType: "json",
  })
    .then((res) => {
      if (res.data) {
        formulariogenerotoCategory.addEventListener("submit", function (e) {
          e.preventDefault();
          var array = [];
          var arraycat = [];

          for (let item of res.data) {
            array.push(item.name);
          }

          array.forEach((element) => {
            var checkbox = document.getElementById(element);
            if (checkbox.checked) {
              arraycat.push(checkbox.value);
            }
          });

          let datosaarray = {};

          let datos = new FormData(formulariogenerotoCategory);
          datos.append("id_genero", select.value);
          datos.append("categorias", arraycat);

          datos.forEach((value, key) => {
            datosaarray[key] = value;
          });

          // console.log(datos.get('email'));
          // console.log(datos.get('password'));

          console.log(datos);
          console.log(datosaarray);
          console.log(arraycat);

          axios({
            url: "../../../models/generotocategoryModel.php",
            method: "post",
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
                  window.location.href = "generotoCategories.php";
                });

                // formulariogenero.reset();
              } else {
                Swal.fire({
                  icon: "error",
                  title: res.data.mensaje,
                  showConfirmButton: false,
                  timer: 1500,
                });
                formulariogenerotoCategory.reset();
              }
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } else {
        console.log("Tabla Vacia");

        // return arraycategory=[];
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
