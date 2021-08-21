<?php

header("Content-Type: application/json");
include_once("Controller/userController.php");

$_POST = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        # code...
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $location = $_POST['location'];
        $token = $_POST['password'];
        $email = $_POST['email'];

        $password = password_hash($token, PASSWORD_DEFAULT, [10]);

        $guardarusuario = User::crearUsuario($name, $phone, $location, $password, $email);

        if ($guardarusuario === 'Okregister') {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Correcto Registro de Usuario",

            );
            echo json_encode($resultado);
        } else {

            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => $guardarusuario
            );
            echo json_encode($resultado);
        }


        break;
}