<?php

// Ejemplo practico Inicio Sesion

header("Content-Type: application/json");
include_once("Controller/userController.php");

$con=User::conexionMysql();

$query = "select * from users";

$stmt=mysqli_query($con,$query);

while($data=$stmt->fetch_assoc()){

    $passwords[]=$data['password'];
    $emails[]=$data['email'];

}


print_r($passwords);
print_r($emails);


foreach ($passwords as $password) {
    # code...
    foreach ($emails as $email) {
        # code...

        if (password_verify('2106',$password) && "jeanbreitnermora@gmail.com"==$email) {
            # code...
    
            echo "ingreso correcto".$value;
        }
    }

}

// Free result set
$stmt->close();
$con->next_result();
   