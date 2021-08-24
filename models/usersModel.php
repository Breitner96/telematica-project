<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");

$_VIEW = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        # code...

        $con=User::conexionMysql();


        $query = "select * from users";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $users[]=$data;
        }

        $users=json_encode($users);

        echo $users;


        break;

    case 'VIEW':

        $con=User::conexionMysql();
    
        // $user = $_GET["id_usuario"];
        $user=$_VIEW["id_usuario"];
    
        $query1 = "select * from users where id_usuario=$user";

        $stmt1 = mysqli_query($con, $query1);

        while ($data1 = $stmt1->fetch_assoc()) {

            $users1[]=$data1;
        }

        $users1=json_encode($users1);

        echo $users1;
    
    
        break;
}