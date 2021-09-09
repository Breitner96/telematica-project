<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");
$_POST = json_decode(file_get_contents("php://input"), true);
$_DELETE = json_decode(file_get_contents("php://input"), true);
$_UPDATE = json_decode(file_get_contents("php://input"), true);

$_SHOW = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        # code...

        $con=User::conexionMysql();


        $query = "select * from categorias";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $categorias[]=$data;
        }

        $categorias=json_encode($categorias);

        echo $categorias;


        break;

    case 'POST':

        $con=User::conexionMysql();

        $name = $_POST['name'];


        $query = "insert into categorias (name) values ('$name')";

        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Categoria Creada Correctamente",

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


        // $resultado=array(

        //     "Nombre"=>$name
        // );

        // echo json_encode($resultado);


        break;
    
    case 'DELETE':


        $con=User::conexionMysql();

        $id_categoria = $_DELETE['id_categoria'];
            
        $query = "delete from categorias where id_categoria='$id_categoria'";
        
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
        $id_categoria = $_UPDATE['id_categoria'];
        
        // $resultado=array(
        //     "valorid"=>$id_categoria,
        //     "name"=>$name

        // );

        $query = "update categorias set name='$name' where id_categoria='$id_categoria'";
            
        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Categoria Editada Correctamente",

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

    case 'SHOW':

        $con = User::conexionMysql();

        $name_category = $_SHOW['name_category'];

        $query = "select * from categorias where name='$name_category'";

        $stmt = mysqli_query($con, $query);



        while($data=$stmt->fetch_assoc()){

            $product=$data;
        
        }
        

        // $response = array(

        //     "name"=>$name_category
        // );

        echo json_encode($product);

        break;
}