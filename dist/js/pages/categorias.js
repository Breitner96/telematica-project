$(function () {
    "use strict";
  
  
//   let queryString = window.location.search;
//   let urlParams = new URLSearchParams(queryString);
//   let anuncioParam = urlParams.get('id_usuario');
  
  
  // console.log(anuncioParam);
  let formulariocategoria = document.getElementById("registercategory");
  ListCategories();

  // showUser(anuncioParam);
  
  function ListCategories(){
    axios({
        url: "../../../models/categoryModel.php",
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
                    <td>${item.id_categoria}</td>
                    <td>${item.name}</td> 
                    <td class="d-flex justify-content-center"><a type="button" class="btn btn-dark mr-3" href="categoryedit.php?id_categoria=${item.id_categoria}&name=${item.name}"><i class="fas fa-edit"></i></a><a type="button" class="btn btn-danger" onclick="deletecategory(${item.id_categoria})"><i class="fas fa-trash-alt"></i></a></td>    
    
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

  formulariocategoria.addEventListener("submit", function (e) {
    e.preventDefault();

    let datosaarray = {};
    let datos = new FormData(formulariocategoria);
    datos.forEach((value, key) => {
      datosaarray[key] = value;
    });

    // console.log(datos.get('email'));
    // console.log(datos.get('password'));

    console.log(datos);
    console.log(datosaarray);

    axios({
      url: "../../../models/categoryModel.php",
      method: "post",
      responseType: "json",
      data: JSON.stringify(datosaarray),
    })
      .then((res) => {
        if (res.data.codigoResultado == 1) {
          Swal.fire({
            icon: 'success',
            title: res.data.mensaje,
            showConfirmButton: false,
            timer: 1500
          }).then((resp)=>{

            window.location.href = "categorias.php";

          });

          
          formulariocategoria.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: res.data.mensaje,
            showConfirmButton: false,
            timer: 1500
          })
          formulariocategoria.reset();
          
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

});
  