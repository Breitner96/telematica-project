<?php

// include('../conect.php');

class User
{

    public static function crearUsuario($name, $phone, $location, $password, $email)
    {

        $con = self::conexionMysql();

        $query = "insert into users (name,phone,location,password,email) values ('$name','$phone', '$location','$password','$email')";

        if (mysqli_query($con, $query)) {
            $con->close();
            return "Okregister";
        } else {

            $con->close();
            return "SU EMAIL O TELEFONO YA HA SIDO REGISTRADO";
        }
    }

    public static function verificarUsuario($emailuser, $token)
    {

        $con = self::conexionMysql();

        //Ejemplo traer datos desde base de datos
        $query = "select * from users";



        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $passwords[] = $data['password'];
            $emails[] = $data['email'];
        }


        // print_r($passwords);
        // print_r($emails);


        foreach ($passwords as $password) {
            # code...
            foreach ($emails as $email) {
                # code...

                if (password_verify($token, $password) && $emailuser == $email) {
                    # code...
                    $stmt->close();
                    $con->next_result();
                    return "Okinicio";
                }
            }
        }

        $stmt->close();
        $con->next_result();
        return "CREDENCIALES INVALIDAS";
    }


    public static function conexionMysql()
    {

        $host = "localhost";
        $port = 3306;
        $socket = "";
        $user = "root";
        $pass = "";
        $dbname = "mapale";

        $con = new mysqli($host, $user, $pass, $dbname, $port, $socket)
            or die('Could not connect to the database server' . mysqli_connect_error());

        return $con;
    }
}
