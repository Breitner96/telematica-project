<?php

// include('../conect.php');

class User{

    public static function crearUsuario($name,$phone,$location,$password,$email){

        $con=self::conexionMysql();

        $query = "insert into users (name,phone,location,password,email) values ('$name','$phone', '$location','$password','$email')";

        if (mysqli_query($con, $query)) {
            $con->close();
            return "Okregister";
      } else {

        $con->close();
        return "SU EMAIL O TELEFONO YA HA SIDO REGISTRADO";
      }



        

    }

    public static function verificarUsuario($email,$password){

        $con=self::conexionMysql();

        //Ejemplo traer datos desde base de datos
        $query="select * from users";

        return $password;

        // $resultados=mysqli_query($con,$query);
        // while($consulta=mysqli_fetch_array($resultados)){
        
        //     echo $consulta['email'];
        //     echo $consulta['password'];

        //     if(password_verify($consulta['password'],$password)){

        //         $con->close();
        //         return "Okinicio";
        //     }
        //     else{
        //         $con->close();
        //         return "CREDENCIALES INVALIDAS";
        //     }
        // }

    }


    public static function conexionMysql(){

        $host="localhost";
        $port=3306;
        $socket="";
        $user="root";
        $pass="";
        $dbname="mapale";
        
        $con = new mysqli($host, $user, $pass, $dbname, $port, $socket)
            or die ('Could not connect to the database server' . mysqli_connect_error());

        return $con;

    }

}