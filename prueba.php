<?php

// Ejemplo practico Inicio Sesion

// include_once("verificarSession.php");
// session_start();

header("Content-Type: application/json");
include_once("Controller/userController.php");

$con=User::conexionMysql();

$query = "select * from users";

$stmt=mysqli_query($con,$query);



while($data=$stmt->fetch_assoc()){

    $passwords[]=$data['password'];
    $emails[]=$data['email'];
    $ID_users[]=$data['id_usuario'];
    $names[]=$data['name'];

    // print_r($data);

    $users[]=$data;

}


print_r($passwords);
print_r($emails);


// foreach ($passwords as $password) {
//     # code...
//     foreach ($emails as $key => $email) {
//         # code...

//         if (password_verify('2106',$password) && "paula.ospina@gmail.com"==$email) {
//             # code...
//             setcookie("Token",$password,time()+(60*60));
//             setcookie("id_usuario",$ID_users[$key],time()+(60*60));
//             setcookie("name",$names[$key],time()+(60*60));
//             echo "ingreso correcto";

//             $resp = array("Okinicio",$password);
//         }
//     }

// }


$users=json_encode($users);



print_r($users);


// Free result set
$stmt->close();
$con->next_result();





   