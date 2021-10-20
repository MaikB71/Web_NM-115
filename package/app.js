var mysql=require('mysql');
var conexion=mysql.createConnection(
    {
        host: 'localhost',
        database: 'BD_NereaMessis',
        user: 'root',
        password: '12345'
    }   
);
conexion.connect(function(error)
{
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa')
    }
}
);

// Insertar Registro
var nombre='Karina'
conexion.query("INSERT INTO Usuarios_Registrados(Nombre, Apellido, Telefono, Correo, Contraseña) VALUES('"+nombre+"', 'Bustos', 3202056004,'m@h.com','mB1234567')", function(error,resultados)
{
    if(error)
    {
        throw error;
    }
    else
    {
        console.log("Registro exitoso");
    }        
}
);
// Consultar registro
conexion.query("SELECT * FROM Usuarios_Registrados WHERE nombre='Maik'", function(error,resultados)
{
    if(error)
    {
        throw error;
    }
    else
    {
        console.log(resultados);
    }        
}
);
conexion.end();