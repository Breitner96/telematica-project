$(function () {
  "use strict";


let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let anuncioParam = urlParams.get('id_usuario');


// console.log(anuncioParam);


ListUsers();

showUser(anuncioParam);

function ListUsers(){

    axios({
        url: "../../../models/usersModel.php",
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
                    <td>${item.id_usuario}</td>
                    <td>${item.name}</td> 
                    <td>${item.phone}</td>
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

function showUser(id){


    axios({
        url: "../../../models/usersModel.php",
        method: "view",
        responseType: "json",
        data: {
            "id_usuario": id
        }
      })
        .then((res) => {
          if (res.data) {

            let user = document.querySelector("#users");
    
            user.innerHTML = "";
            for (let item of res.data) {
    
                user.innerHTML+=`
                <div class="card text-white bg-dark mb-3" style="width: 20rem">
                <div class="card-header text-center">${item.name}</div>
                <div class="card-body">
                  <h5 class="card-title mt-2" style="width: 100%">Email: ${item.email}</h5>
                  <h5 class="card-title mt-2" style="width: 100%">Telefono: ${item.phone}</h5>
                  <h5 class="card-title mt-2" style="width: 100%">Direccion: ${item.location}</h5>


                </div>
                <a type="submit" class="btn btn-danger align-self-center mb-2" style="width: 10rem;" href="maindashboard.php">Regresar</a>
                </div>

                `
            }

          } else {
            console.log("Usuario No Encontrado");
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });



}


});
