let formularioproduct = document.getElementById("registrarproducto");
let select = document.getElementById("seleccategoria");



formularioproduct.addEventListener("submit", function (e) {
    e.preventDefault();


    // let datosaarray = {};

    console.log(formularioproduct);

    let datos = new FormData();
    datos.append('id_categoria', select.value);
    datos.append('name',formularioproduct['name'].value); 

    

    datos.append('imagen',document.getElementById('customFile').files[0]);

    // datos.forEach((value, key) => {
    //   datosaarray[key] = value;
    // });

    console.log(datos);
    // console.log(datosaarray);

    // console.log(JSON.stringify(datos));
    

    axios({
      url: "../../../models/productosModel.php",
      method: "post",
      responseType: "json",
      data: datos,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then((res) => {
        if (res.data.codigoResultado == 1) {
          Swal.fire({
            icon: "success",
            title: res.data.mensaje,
            showConfirmButton: false,
            timer: 1500,
          }).then((resp) => {
            // window.location.href = "productos.php";
          });

          // formulariogenero.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: res.data.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
          formularioproduct.reset();
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  document.getElementById('customFile').onchange = function () {
    console.log(this.value);
    document.getElementById('text').innerHTML = document.getElementById('customFile').files[0].name;
  }