<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");
$data = json_decode(file_get_contents("php://input"), true);
$_DELETE = json_decode(file_get_contents("php://input"), true);
$_UPDATE = json_decode(file_get_contents("php://input"), true);
$_VIEW  = json_decode(file_get_contents("php://input"), true);

// $_VIEW = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        # code...

        $con=User::conexionMysql();


        $query = "select * from productos";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $productos[]=$data;
            
        }

        $productos=json_encode($productos);

        echo $productos;


        break;

    case 'POST':

        $con=User::conexionMysql();

        $name=$data->name;

        // $precio=$_POST['precio'];
        // $talla=$_POST['talla'];
        // $cantidad=$_POST['cantidad'];
        // $imagen=$_POST['imagen'];
        // $id_categoria=$_POST['id_categoria'];

        // $filename=time().'.'.$imagen->extension();

        // $imagen->moved(move_uploaded_file('../assets/imgproductos',$filename));


        // $query = "insert into productos (name,precio,talla,cantidad,imagen,categoria_id_categoria) values ('$name','$precio','$talla','$cantidad','$imagen','$id_categoria')";

        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Genero Creado Correctamente",

            );
            $con->close();
            echo json_encode($resultado);
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No guardado",
                "imagen"=>$name
                );
            $con->close();

            echo json_encode($resultado);
        }

        break;
    
    case 'DELETE':


        $con=User::conexionMysql();

        $id_genero = $_DELETE['id_genero'];
         
        $query = "delete from productos where id_genero='$id_genero'";

        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Borrado Correctamente",

            );
            $con->close();
            echo json_encode($resultado);
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No se logro borrar"
            );
            $con->close();

            echo json_encode($resultado);
        }


        break;

    case 'UPDATE':

        $con=User::conexionMysql();

        $name = $_UPDATE['name'];
        $id_genero = $_UPDATE['id_genero'];

        // $resultado=array(
        //     "valorid"=>$id_genero,
        //     "name"=>$name

        // );

        $query = "update productos set name='$name' where id_genero='$id_genero'";

        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Genero Editado Correctamente",

            );
            $con->close();
            echo json_encode($resultado);
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No guardado"
            );
            $con->close();

            echo json_encode($resultado);
        }

        break;

    case 'VIEW':



        break;
}