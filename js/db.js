// Crear la conexion 
// var mysql=require('mysql');
import mysql from 'mysql'

var conexion=mysql.createConnection({
        host: 'localhost',
        database: 'BD_NereaMessis',
        user: 'root',
        password: '12345'
    });
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexión exitosa')
    }});
// Insertar Registro
function Insertar_Registro(nombre,apellidos,telefono,correo,password){
    conexion.query("INSERT INTO Usuarios_Registrados(Nombre, Apellido, Telefono, Correo, Contraseña) VALUES('"+nombre+"', '"+apellidos+"', '"+telefono+"','"+correo+"','"+password+"')", function(error,resultados){
        if(error){
            throw error;
        }else{
            console.log("Registro exitoso");
        }});
    
}
// Consultar Correo
var Correos
var Passwords
function Consultar_Correo(correo){
    conexion.query("SELECT * FROM Usuarios_Registrados WHERE correo='"+correo+"'", function(error,resultados){
    if(error){
        //return false;
        throw error;
    }else{
        //console.log(correo);
        Correos=resultados
        return Correos;
    }        
});
}
//Consultar contraseña
function Consultar_Contrasena(password){
    conexion.query("SELECT * FROM Usuarios_Registrados WHERE contraseña='"+password+"'", function(error,resultados){
    if(error){
        //return false;
        throw error;
    }else{
        //console.log(password);
        Passwords=resultados
        return Passwords;
    }        
});
}
var DB_Registros;
function Consultar_Datos(){
    conexion.query("SELECT * FROM Usuarios_Registrados", function(error,resultados){
        if(error){
            throw error;
        }else{
            DB_Registros=resultados
        } 
    });
    return DB_Registros;
};
export{Insertar_Registro, Consultar_Correo, Consultar_Contrasena,Consultar_Datos}
// conexion.end();