// Clase Usuario
class Usuario{
    constructor(nombre,apellidos,telefono,correo,password){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.telefono=telefono;
        this.correo=correo;
        this.password=password;
    }
}
// Función para Capitalizar
function capitalizarPrimeraLetra(value){
    let str=value;
    return str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase();
}
// Función Agregar Registro
let registros=new Array();
function agregarRegistro(){
    //Datos del Input
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    //Usuario
    let usuario= new Usuario(nombre,apellidos,telefono,correo,password);
    // Capitalizar Nombre y Apellido
    usuario.nombre=capitalizarPrimeraLetra(usuario.nombre);
    usuario.apellidos=capitalizarPrimeraLetra(usuario.apellidos);
    //Agregar Usuario
    registros.push(usuario);
    //Mostrar el ultimo usuario ingresado
    console.log(registros);
    return registros;
}
// Función Ordenar Registro
let RegistrosOrden=new Array();
function ordenarArreglo(arreglo){
    RegistrosOrden=arreglo.sort(function(a,b){
        if(a.apellidos > b.apellidos){
            return 1;
        }
        if(a.apellidos < b.apellidos){
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(RegistrosOrden);
    return RegistrosOrden;
}
// Función Filtar Correo
let RegistrosFiltro=new Array();
function filtrarCorreo(arreglo){
    let filtro="gmail.com";
    let filtroReg=RegExp(filtro);
    RegistrosFiltro=arreglo.filter(arreglo => filtroReg.test(arreglo.correo)==true)
    return RegistrosFiltro;
}
//Exportar Funciones

/*module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;
module.exports.ordenarArreglo=ordenarArreglo;
module.exports.filtrarCorreo= filtrarCorreo;


module.exports={
    agregarRegistro,ordenarArreglo,filtrarCorreo
}*/
export{agregarRegistro,ordenarArreglo,filtrarCorreo,registros};