<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");
$_POST = json_decode(file_get_contents("php://input"), true);
$_DELETE = json_decode(file_get_contents("php://input"), true);
// $_UPDATE = json_decode(file_get_contents("php://input"), true);

// $_VIEW = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        # code...

        $con=User::conexionMysql();

        // Cambiar nombre tabla
        $query = "select categorias.name as category,generos.name as genero,categorias.id_categoria,generos.id_genero 
        FROM ((generos_categorias
        INNER JOIN categorias ON generos_categorias.genero_id_categoria = categorias.id_categoria)
        INNER JOIN generos ON generos_categorias.genero_id_genero = generos.id_genero)";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $datos[]=$data;
        }

        echo json_encode($datos);

        break;

    case 'POST':

        $con=User::conexionMysql();

        $id_genero=$_POST["id_genero"];

        $categorias=$_POST["categorias"];

        $categoriasaaray=explode(",",$categorias);

        foreach ($categoriasaaray as $value) {
            # code...

            $query = "insert into generos_categorias (genero_id_categoria,genero_id_genero) values ('$value','$id_genero')";
            
            if (mysqli_query($con, $query)) {
                $resultado = array(
    
                    "codigoResultado" => 1,
                    "mensaje" => "Genero Creado Correctamente",
    
                );
                
            } else {
                $resultado = array(
    
                    "codigoResultado" => 0,
                    "mensaje" => "No guardado"
                );
            }

        }

        $con->close();
        echo json_encode($resultado);

        break;

        case 'DELETE':


            $con=User::conexionMysql();
    
            $genero_id_categoria = $_DELETE['id_category'];
            $genero_id_genero = $_DELETE['id_genero'];
             
            $query = "delete from generos_categorias where genero_id_categoria='$genero_id_categoria' and genero_id_genero='$genero_id_genero'";
    
            if (mysqli_query($con, $query)) {
                $resultado = array(
    
                    "codigoResultado" => 1,
                    "mensaje" => "Borrado Correctamente",
    
                );
                $con->close();
                echo json_encode($resultado);
            } else {
                $resultado = array(
    
                    "codigoResultado" => 0,
                    "mensaje" => "No se logro borrar"
                );
                $con->close();
    
                echo json_encode($resultado);
            }
    
    
            break;
}