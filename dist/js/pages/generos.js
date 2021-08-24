$(function () {
    "use strict";
  
  
//   let queryString = window.location.search;
//   let urlParams = new URLSearchParams(queryString);
//   let anuncioParam = urlParams.get('id_usuario');
  
  
  // console.log(anuncioParam);
  let formulariogenero = document.getElementById("registerprenda");
  
  
  Listprendas();
  
  // showUser(anuncioParam);
  
  function Listprendas(){
  
      axios({
          url: "../../../models/generosModel.php",
          method: "get",
          responseType: "json",
        })
          .then((res) => {
            if (res.data) {
              // console.log(item.phone);
      
              let resp = document.querySelector("#res");
      
              resp.innerHTML = "";
              for (let item of res.data) {
      
                  resp.innerHTML+=`
                  <tr>
                      <td>${item.id_genero}</td>
                      <td>${item.name}</td> 
                      <td><a type="button" class="btn btn-dark" href="usuarios.php?id_usuario=${item.id_usuario}"><i class="far fa-address-card"></i></a></td>    
      
                  </tr>
                  `
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

  formulariogenero.addEventListener("submit", function (e) {
    e.preventDefault();

    let datosaarray = {};
    let datos = new FormData(formulariogenero);
    datos.forEach((value, key) => {
      datosaarray[key] = value;
    });

    // console.log(datos.get('email'));
    // console.log(datos.get('password'));

    console.log(datos);
    console.log(datosaarray);

    axios({
      url: "../../../models/generosModel.php",
      method: "post",
      responseType: "json",
      data: JSON.stringify(datosaarray),
    })
      .then((res) => {
        if (res.data.codigoResultado == 1) {

          formulariogenero.reset();
        } else {

          formulariogenero.reset();
          
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
      
});
  