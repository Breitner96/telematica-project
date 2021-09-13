let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

// console.log("tiene");

var name_category = urlParams.get("name_category");
var id_product = urlParams.get("id_producto");

console.log(name_category);

console.log(id_product);

showproducts();

showproduct(id_product);

function showproducts() {
  axios({
    url: "../models/categoryModel.php",
    method: "show",
    responseType: "json",
    data: {
      name_category: name_category,
    },
  })
    .then((res) => {
      if (res.data) {
        axios({
          url: "../models/productosModel.php",
          method: "show",
          responseType: "json",
          data: {
            id_category: res.data.id_categoria,
          },
        })
          .then((res) => {
            if (res.data) {
              let product = document.getElementById("productos");

              product.innerHTML = "";

              res.data.forEach((element) => {
                product.innerHTML += `
  
                    <div class="card">
                    <img class="card-img" src="../assets/imgproduct/${element.imagen}" alt="${element.name}" style="width:100%">
                      <div class="container">
                          <h4><b>${element.name}</b></h4>
                          <p>Precio ${element.precio}</p>
                          <p><a href="viewproductindex.php?id_producto=${element.id_producto}" class="vermas">Ver mas detalle</a></p>
                      </div>
    
                    </div>
                    
                    
                    
                    `;
              });
            } else {
              console.log("Tabla Vacia");
            }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("Tabla Vacia");
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function showproduct(id) {
  axios({
    url: "../models/productosModel.php",
    method: "product",
    responseType: "json",
    data: {
      id_product: id,
    },
  })
    .then((res) => {
      if (res.data) {
        // let user = document.querySelector("#product");

        // user.innerHTML = "";
        // for (let item of res.data) {
        //   user.innerHTML += `


        //       `;
        // }
      } else {
        console.log("Usuario No Encontrado");
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
