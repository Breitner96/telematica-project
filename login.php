<?php

header("Content-Type: application/json");
include_once("Controller/userController.php");

$_POST=json_decode(file_get_contents("php://input"),true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        # code...

        $email=$_POST['email'];
        $password=$_POST['password'];

        // $password=password_hash($token,PASSWORD_DEFAULT,[10]);

        $resultado=array(
            "codigoResultado"=>0,
            "mensaje"=>"correcto inicio",
            "email"=>$email,
            "password"=>$password

        );

        // echo json_encode($resultado);

        $iniciarsesionusuario=User::verificarUsuario($email,$password);

        if ($iniciarsesionusuario == 'Okinicio'){
            $resultado=array(

                "codigoResultado"=>1,
                "mensaje"=>"Correcto inicio de sesion",
        
                );
                echo json_encode($resultado);
        }

        else{

            $resultado=array(

                "codigoResultado"=>0,
                "mensaje"=>$iniciarsesionusuario
                );
                echo json_encode($resultado);
        }


        break;
    
}


