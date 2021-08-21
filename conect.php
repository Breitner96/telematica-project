<?php

$host="localhost";
$port=3306;
$socket="";
$user="root";
$pass="";
$dbname="mapale";

$con = new mysqli($host, $user, $pass, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());