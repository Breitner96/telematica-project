<?php

    setcookie("Token","",time()-1,"/");
    setcookie("id_usuario","",time()-1,"/");
    setcookie("name","",time()-1,"/");

    header("Location: index.php");