$(function () {
    "use strict";
  
  
//   let queryString = window.location.search;
//   let urlParams = new URLSearchParams(queryString);
//   let anuncioParam = urlParams.get('id_usuario');
  
  
  // console.log(anuncioParam);
  
  
  
  Listprendas();
  
  showUser(anuncioParam);
  
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
      
});
  