<?php
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "proyecto";

// Conectar a la base de datos
$conexion = new mysqli("localhost","root","","proyecto");

// Verificar la conexión
if ($conexion->connect_error) {
    echo"error";
}
else {
    echo "Hey";
}
?>