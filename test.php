<?php

// Ejemplo practico Inicio Sesion

// include_once("verificarSession.php");
// session_start();

header("Content-Type: application/json");
include_once("Controller/userController.php");

$con=User::conexionMysql();

$query = "select categorias.name as category,generos.name as genero 
FROM ((generos_categorias
INNER JOIN categorias ON generos_categorias.genero_id_categoria = categorias.id_categoria)
INNER JOIN generos ON generos_categorias.genero_id_genero = generos.id_genero)";

$stmt=mysqli_query($con,$query);

while($data=$stmt->fetch_assoc()){

    $datos[]=$data;

    $categorias[]=$data['category'];
    $generos[]=$data['genero'];

}

$datos=json_encode($datos);

print_r($datos);
print_r($categorias);

print_r($generos[0]);

// $resultado=array(

//     "categorias"=>$categorias,
//     "genero"=>$generos[0]

// );

// echo json_encode($resultado);


// Free result set
$stmt->close();
$con->next_result();





   