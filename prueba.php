<?php


header("Content-Type: application/json");
include_once("Controller/userController.php");

$con=User::conexionMysql();

// $variable=1;
$query = "select * from productos where categoria_id_categoria=1";

$stmt=mysqli_query($con,$query);

$product=array(); 

while($data=$stmt->fetch_assoc()){


    // echo "Entro";
    array_push($product,$data);

}



print_r(json_encode($product));


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


// $users=json_encode($users);



// print_r($users['imagen']);


// Free result set
$stmt->close();
$con->next_result();





   