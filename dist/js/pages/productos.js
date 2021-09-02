ListCategories();
Listproductos();

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
                <td>${item.categoria}</td>  
                <td class="d-flex justify-content-center"><a type="button" class="btn btn-dark mr-3" href="productoedit.php?id_producto=${item.id_producto}&name=${item.name}&precio=${item.precio}&talla=${item.talla}&cantidad=${item.cantidad}&imagen=${item.imagen}&id_categoria=${item.id_categoria}&categoria=${item.categoria}"><i class="fas fa-edit"></i></a><a type="button" class="btn btn-danger" onclick="deleteproducto(${item.id_producto})"><i class="fas fa-trash-alt"></i></a></td>    

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
