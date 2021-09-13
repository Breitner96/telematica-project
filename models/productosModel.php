<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");

// $_POST = json_decode(file_get_contents("php://input"), true);
$_DELETE = json_decode(file_get_contents("php://input"), true);
$_PUT = json_decode(file_get_contents("php://input"),true);
$_VIEW  = json_decode(file_get_contents("php://input"), true);
$_SHOW = json_decode(file_get_contents("php://input"), true);
$_PRODUCT = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {

    case 'GET':
        # code...

        $con = User::conexionMysql();


        $query = "select id_producto,productos.name,precio,talla,cantidad,imagen,categorias.name as categoria,categorias.id_categoria from productos
        inner JOIN categorias ON productos.categoria_id_categoria=categorias.id_categoria";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $productos[] = $data;
        }

        $productos = json_encode($productos);

        echo $productos;


        break;

    case 'POST':

        $con = User::conexionMysql();

        $_method = $_POST['_method'];
        $name = $_POST['name'];
        $precio = $_POST['precio'];
        $talla = $_POST['talla'];
        $cantidad = $_POST['cantidad'];
        $id_categoria = $_POST['id_categoria'];




        if ($_method == 'PUT') {
            # code...

            $imagenanterior = $_POST['imagenanterior'];
            $id_producto = $_POST['id_producto'];

            $imagename = $_FILES['imagen']['name'];

            $validatextension = array("jpg", "jpeg", "png");

            $extension = pathinfo($imagename, PATHINFO_EXTENSION);

            if (in_array($extension, $validatextension)) {

                $nameuploadimg = time() . '.' . $extension;

                $upload_path = '../assets/imgproduct/' . $nameuploadimg;

                if (move_uploaded_file($_FILES['imagen']['tmp_name'], $upload_path)) {
                    # code...


                    $query = "update productos set name='$name', precio='$precio',talla='$talla', cantidad='$cantidad',imagen='$nameuploadimg',categoria_id_categoria='$id_categoria' where id_producto=' $id_producto'";

                    if (mysqli_query($con, $query)) {

                        unlink('../assets/imgproduct/' . $imagenanterior);

                        $resultado = array(

                            "codigoResultado" => 1,
                            "mensaje" => "Producto Actualizado Correctamente"

                        );
                        $con->close();
                    } else {
                        $resultado = array(

                            "codigoResultado" => 0,
                            "mensaje" => "No se logro Actualizar"
                        );
                        $con->close();
                    }
                } else {

                    $resultado = array(

                        "codigoResultado" => 0,
                        "mensaje" => "No guardado en carpeta"
                        // "name"=>$name
                    );
                }
            } else {


                $resultado = array(

                    "codigoResultado" => 0,
                    "mensaje" => "Extension imagen no valida, permitido solo jpg,jpeg y png"
                );
            }
        } else {

            $imagename = $_FILES['imagen']['name'];

            $validatextension = array("jpg", "jpeg", "png");

            $extension = pathinfo($imagename, PATHINFO_EXTENSION);

            if (in_array($extension, $validatextension)) {

                $nameuploadimg = time() . '.' . $extension;

                $upload_path = '../assets/imgproduct/' . $nameuploadimg;

                if (move_uploaded_file($_FILES['imagen']['tmp_name'], $upload_path)) {
                    # code...


                    $query = "insert into productos (name,precio,talla,cantidad,imagen,categoria_id_categoria) values ('$name','$precio','$talla','$cantidad','$nameuploadimg','$id_categoria')";

                    if (mysqli_query($con, $query)) {
                        $resultado = array(

                            "codigoResultado" => 1,
                            "mensaje" => "Producto Creado Correctamente"

                        );
                        $con->close();
                    } else {
                        $resultado = array(

                            "codigoResultado" => 0,
                            "mensaje" => "No se logro crear"
                        );
                        $con->close();
                    }
                } else {

                    $resultado = array(

                        "codigoResultado" => 0,
                        "mensaje" => "No guardado en carpeta"
                        // "name"=>$name
                    );
                }
            } else {


                $resultado = array(

                    "codigoResultado" => 0,
                    "mensaje" => "Extension imagen no valida, permitido solo jpg,jpeg y png"
                );
            }
        }

        echo json_encode($resultado);



        break;

    case 'DELETE':


        $con = User::conexionMysql();

        $id_producto = $_DELETE['id_producto'];

        $imagen = getImage($id_producto);



        unlink('../assets/imgproduct/' . $imagen);

        // $response=array(
        //     "codigoResultado"=>0,
        //     "imagen"=>$imagen

        // );

        // echo json_encode($response);

        $query = "delete from productos where id_producto='$id_producto'";



        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Borrado Correctamente",

            );
            $con->close();
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No se logro borrar"
            );
            $con->close();
        }
        echo json_encode($resultado);


        break;

    case 'PUT':

        $con = User::conexionMysql();

        $name=$_PUT['name'];
        $precio=$_PUT['precio'];
        $talla=$_PUT['talla'];
        $cantidad=$_PUT['cantidad'];
        $id_categoria=$_PUT['id_categoria'];
        $id_producto=$_PUT['id_producto'];

        $query = "update productos set name='$name',precio='$precio',talla='$talla',cantidad='$cantidad', categoria_id_categoria='$id_categoria' where id_producto=' $id_producto'";

        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Producto Editado Correctamente",

            );
            $con->close();
            
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No Se logro Editar el Producto"
            );
            $con->close();

            
        }

        echo json_encode($resultado);
        break;

    case 'VIEW':

        $con = User::conexionMysql();

        $id_producto = $_VIEW['id_producto'];

        $query = "select imagen from productos where id_producto ='$id_producto'";

        $stmt = mysqli_query($con, $query);



        while ($data = $stmt->fetch_assoc()) {

            $users = $data;
        }

        $response = array(

            "name_imagen" => $users['imagen'],
        );

        echo json_encode($response);

        break;

    case 'SHOW':

        $con = User::conexionMysql();

        $id_category = $_SHOW['id_category'];

        $query = "select * from productos where categoria_id_categoria ='$id_category'";

        $stmt = mysqli_query($con, $query);

        $product=array(); 

        while ($data = $stmt->fetch_assoc()) {

            array_push($product,$data);
        }

        // $response = array(

        //     "name"=>$id_prodcuto
        // );

        echo json_encode($product);

        break;

    case 'PRODUCT':

        $con = User::conexionMysql();

        $id_product = $_PRODUCT['id_product'];

        $query = "select productos.name,productos.precio,productos.talla,productos.cantidad,productos.imagen,categorias.name as categoria from productos inner join categorias on productos.categoria_id_categoria = categorias.id_categoria where id_producto='$id_product'";

        $stmt = mysqli_query($con, $query);

        $product=array(); 

        while ($data = $stmt->fetch_assoc()) {

            array_push($product,$data);
        }

        // $response = array(

        //     "name"=>$id_prodcuto
        // );

        echo json_encode($product);

        break;
}

function getImage($id)
{

    $con = User::conexionMysql();

    $query = "select imagen from productos where id_producto='$id'";

    $stmt = mysqli_query($con, $query);

    while ($data = $stmt->fetch_assoc()) {

        $imagen = $data['imagen'];
    }



    // unlink('../assets/imgproduct/'.$imagen['imagen']);
    $con->close();

    return $imagen;
}
