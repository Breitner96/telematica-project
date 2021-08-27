let formulariogenerotoCategory = document.getElementById("registrarproducto");
let select = document.getElementById("seleccategoria");

formulariogenerotoCategory.addEventListener("submit", function (e) {
    e.preventDefault();


    let datosaarray = {};

    let datos = new FormData(formulariogenerotoCategory);
    datos.append("id_categoria", select.value);

    datos.forEach((value, key) => {
      datosaarray[key] = value;
    });

    // console.log(datos.get('email'));
    // console.log(datos.get('password'));

    console.log(datos);
    console.log(datosaarray);

    // axios({
    //   url: "../../../models/generotocategoryModel.php",
    //   method: "post",
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
    //         window.location.href = "generotoCategories.php";
    //       });

    //       // formulariogenero.reset();
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: res.data.mensaje,
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       formulariogenerotoCategory.reset();
    //     }
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });

  document.getElementById('customFile').onchange = function () {
    console.log(this.value);
    document.getElementById('text').innerHTML = document.getElementById('customFile').files[0].name;
  }