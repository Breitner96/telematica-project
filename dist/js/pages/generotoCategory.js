ListGeneros();
ListCategories();   

function ListGeneros(){

    axios({
        url: "../../../models/generosModel.php",
        method: "get",
        responseType: "json",
      })
        .then((res) => {
          if (res.data) {
            // console.log(item.phone);
    
            let resp = document.querySelector("#selectgeneros");
    
            resp.innerHTML = `<option value="" disabled selected>Seleccione un Genero...</option>`;
            for (let item of res.data) {
    
                resp.innerHTML+=`
                    <option value="${item.id_genero}">${item.name}</option>
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

function ListCategories(){

    axios({
        url: "../../../models/categoryModel.php",
        method: "get",
        responseType: "json",
      })
        .then((res) => {
          if (res.data) {
            // console.log(item.phone);
    
            let resp = document.querySelector("#selectcategory");
    
            resp.innerHTML = "";
            for (let item of res.data) {
    
                resp.innerHTML+=`
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="${item.name}" value="${item.id_categoria}">
                    <label class="form-check-label" for="${item.name}">${item.name}</label>
                </div>
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