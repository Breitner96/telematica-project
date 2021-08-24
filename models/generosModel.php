<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");
$_POST = json_decode(file_get_contents("php://input"), true);

// $_VIEW = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        # code...

        $con=User::conexionMysql();


        $query = "select * from generos";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $generos[]=$data;
        }

        $generos=json_encode($generos);

        echo $generos;


        break;

    case 'POST':

        $name = $_POST['name'];

        $resultado=array(

            "Nombre"=>$name
        );

        echo json_encode($resultado);


        // $con=User::conexionMysql();

        // $query = "insert into modelos (name) values ('$name')";

        // if (mysqli_query($con, $query)) {
        //     $resultado = array(

        //         "codigoResultado" => 1,
        //         "mensaje" => "Correcto Registro de Usuario",

        //     );
        //     $con->close();
        //     echo json_encode($resultado);
        // } else {
        //     $resultado = array(

        //         "codigoResultado" => 0,
        //         "mensaje" => "No guardado"
        //     );
        //     $con->close();

        //     echo json_encode($resultado);
        // }


        break;
}