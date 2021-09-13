let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let anuncioParam = urlParams.get("id_product");

ListCategories();
Listproductos();
showProduct(anuncioParam);

function ListCategories() {
  axios({
    url: "../../../models/categoryModel.php",
    method: "get",
    responseType: "json",
  })
    .then((res) => {
      if (res.data) {
        // console.log(item.phone);
        let resp = document.querySelector("#seleccategoria");

        resp.innerHTML = `<option value="" disabled selected>Seleccione una Categoria...</option>`;
        for (let item of res.data) {
          resp.innerHTML += `
                    <option value="${item.id_categoria}" name="${item.id_categoria}">${item.name}</option>
                `;
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

function Listproductos() {
  axios({
    url: "../../../models/productosModel.php",
    method: "get",
    responseType: "json",
  })
    .then((res) => {
      if (res.data) {
        // console.log(item.phone);

        let resp = document.querySelector("#res");

        resp.innerHTML = "";
        for (let item of res.data) {
          resp.innerHTML += `
            <tr>
                <td>${item.id_producto}</td>
                <td>${item.name}</td>
                <td>${item.precio}</td>
                <td>${item.cantidad}</td>
                <td>${item.categoria}</td>  
                <td class="d-flex justify-content-center"><a type="button" class="btn btn-dark mr-3" href="showProduct.php?id_product=${item.id_producto}"><i class="far fa-address-card"></i></a><a type="button" class="btn btn-dark mr-3" href="productoedit.php?id_producto=${item.id_producto}&name=${item.name}&precio=${item.precio}&talla=${item.talla}&cantidad=${item.cantidad}&imagen=${item.imagen}&id_categoria=${item.id_categoria}&categoria=${item.categoria}"><i class="fas fa-edit"></i></a><a type="button" class="btn btn-danger" onclick="deleteproducto(${item.id_producto})"><i class="fas fa-trash-alt"></i></a></td>    

            </tr>
            `;
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

function showProduct(id) {
  axios({
    url: "../../../models/productosModel.php",
    method: "product",
    responseType: "json",
    data: {
      id_product: id,
    },
  })
    .then((res) => {
      if (res.data) {
        let user = document.querySelector("#product");

        user.innerHTML = "";
        for (let item of res.data) {
          user.innerHTML += `
              <div class="col-md-6">
                <img src="../../../assets/imgproduct/${item.imagen}" alt="${item.name}" style="width: 100%">
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <h5 class="card-title mb-2">${item.name}</h5>
                  <p class="card-text">Cantidad Disponible: ${item.cantidad}</p>
                  <p class="card-text">Precio: ${item.precio}</p>
                  <p class="card-text">Talla: ${item.talla}</p>
                  <p class="card-text">Categoria: ${item.categoria}</p>

                </div>
              </div>

              <a type="submit" class="btn btn-danger align-self-center mt-2 mb-2" style="width: 10rem;" href="productos.php">Regresar</a>

              `;
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
