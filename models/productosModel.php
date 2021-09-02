<?php

header("Content-Type: application/json");
include_once("../Controller/userController.php");

// $_POST = json_decode(file_get_contents("php://input"), true);
$_DELETE = json_decode(file_get_contents("php://input"), true);
// $_UPDATE = json_decode(file_get_contents("php://input"), true);
$_VIEW  = json_decode(file_get_contents("php://input"), true);
// $_VIEW = json_decode(file_get_contents("php://input"), true);

switch ($_SERVER['REQUEST_METHOD']) {

    case 'GET':
        # code...

        $con=User::conexionMysql();


        $query = "select id_producto,productos.name,precio,talla,cantidad,imagen,categorias.name as categoria,categorias.id_categoria from productos
        inner JOIN categorias ON productos.categoria_id_categoria=categorias.id_categoria";

        $stmt = mysqli_query($con, $query);

        while ($data = $stmt->fetch_assoc()) {

            $productos[]=$data;
            
        }

        $productos=json_encode($productos);

        echo $productos;


        break;

    case 'POST':

        $con=User::conexionMysql();

        $name=$_POST['name'];
        $precio=$_POST['precio'];
        $talla=$_POST['talla'];
        $cantidad=$_POST['cantidad'];
        $id_categoria=$_POST['id_categoria'];


        $imagename=$_FILES['imagen']['name'];

        $validatextension=array("jpg","jpeg","png");

        $extension=pathinfo($imagename,PATHINFO_EXTENSION);

        if(in_array($extension,$validatextension)){

            $nameuploadimg=time().'.'.$extension;

            $upload_path='../assets/imgproduct/'.$nameuploadimg;

            if (move_uploaded_file($_FILES['imagen']['tmp_name'],$upload_path)) {
                # code...


                $query = "insert into productos (name,precio,talla,cantidad,imagen,categoria_id_categoria) values ('$name','$precio','$talla','$cantidad','$nameuploadimg','$id_categoria')";

                if (mysqli_query($con, $query)) {
                    $resultado = array(
        
                        "codigoResultado" => 1,
                        "mensaje" => "Producto Creado Correctamente"
        
                    );
                    $con->close();
                    
                } else {
                    $resultado = array(
        
                        "codigoResultado" => 0,
                        "mensaje" => "No se logro crear"
                    );
                    $con->close();
        
                }

                

            }

            else{

                $resultado = array(

                    "codigoResultado" => 0,
                    "mensaje" => "No guardado en carpeta"
                    // "name"=>$name
                    );

            }

        }

        else{


            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "Extension imagen no valida, permitido solo jpg,jpeg y png"
                );
                
        }

        echo json_encode($resultado);



        break;
    
    case 'DELETE':


        $con=User::conexionMysql();

        $id_producto = $_DELETE['id_producto'];

        $imagen=getImage($id_producto);



        unlink('../assets/imgproduct/'.$imagen);

        // $response=array(
        //     "codigoResultado"=>0,
        //     "imagen"=>$imagen
    
        // );

        // echo json_encode($response);
    
        $query = "delete from productos where id_producto='$id_producto'";



        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Borrado Correctamente",

            );
            $con->close();
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No se logro borrar"
            );
            $con->close();

            
        }
        echo json_encode($resultado);


        break;

    case 'UPDATE':

        $con=User::conexionMysql();

        $name = $_UPDATE['name'];
        $id_genero = $_UPDATE['id_genero'];

        // $resultado=array(
        //     "valorid"=>$id_genero,
        //     "name"=>$name

        // );

        $query = "update productos set name='$name' where id_genero='$id_genero'";

        if (mysqli_query($con, $query)) {
            $resultado = array(

                "codigoResultado" => 1,
                "mensaje" => "Genero Editado Correctamente",

            );
            $con->close();
            echo json_encode($resultado);
        } else {
            $resultado = array(

                "codigoResultado" => 0,
                "mensaje" => "No guardado"
            );
            $con->close();

            echo json_encode($resultado);
        }

        break;

    case 'VIEW':

        $con=User::conexionMysql();

        $id_producto=$_VIEW['id_producto'];

        $query = "select imagen from productos where id_producto ='$id_producto'";

        $stmt=mysqli_query($con,$query);
        
        
        
        while($data=$stmt->fetch_assoc()){
    
            $users=$data;
        
        }

        $response=array(

            "name_imagen"=>$users['imagen'],
        );

        echo json_encode($response);

        break;
   
}

function getImage($id){

    $con=User::conexionMysql();

    $query = "select imagen from productos where id_producto='$id'";

    $stmt=mysqli_query($con, $query);

    while($data=$stmt->fetch_assoc()){

        $imagen=$data['imagen'];
    
    }

  

    // unlink('../assets/imgproduct/'.$imagen['imagen']);
    $con->close();

    return $imagen;

}