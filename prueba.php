<?php

// Ejemplo practico Inicio Sesion

header("Content-Type: application/json");
include_once("Controller/userController.php");

$con=User::conexionMysql();

$query = "select * from users";

$stmt=mysqli_query($con,$query);

while($data=$stmt->fetch_assoc()){

    $datos[]=$data['password'];

}

print_r($datos);

foreach ($datos as $value) {
    # code...
    if (password_verify('2106',$value)) {
        # code...

        echo "ingreso correcto".$value;
    }
}

// Free result set
$stmt->close();
$con->next_result();

   