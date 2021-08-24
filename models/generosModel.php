<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");

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

}