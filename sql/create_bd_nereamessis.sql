CREATE DATABASE BD_NereaMessis;
USE BD_NereaMessis;

CREATE TABLE Usuarios_Registrados(
IdUsuario int primary key auto_increment,
Nombre varchar(40) not null,
Apellido varchar(40) not null,
Telefono varchar(10) not null,
Correo varchar(50) not null,
Contraseña varchar(30) not null
);
SELECT * FROM Usuarios_Registrados;
SELECT * FROM BD_NereaMessis.Usuarios_Registrados;
DELETE FROM Usuarios_Registrados WHERE idusuario=4;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345'