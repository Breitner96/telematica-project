let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

// console.log("tiene");

var name_category= urlParams.get("name_category");

console.log(name_category);

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