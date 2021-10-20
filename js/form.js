/**Importar Librerias o Funciones */
import {agregarRegistro} from "./registro.js";
//import {ordenarArreglo} from "./registro.js";
//import {filtrarCorreo} from "./registro.js";

/** Funciones */
// Validacion de campos Obligatorios
document.querySelector("#btn-submit-form").addEventListener('click', validateForm);
function validateForm(){
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const password= document.getElementById("password").value;
    if(nombre===""){
        document.getElementById("NM-CO-nombre").style.display="block";
    }else{document.getElementById("NM-CO-nombre").style.display="none";}

    if(apellidos===""){
        document.getElementById("NM-CO-apellidos").style.display="block";
    }else{document.getElementById("NM-CO-apellidos").style.display="none";}
    
    if(correo===""){
        document.getElementById("NM-CO-correo").style.display="block";
    }else{document.getElementById("NM-CO-correo").style.display="none";}

    if(telefono===""){
        document.getElementById("NM-CO-telefono").style.display="block";
    }
    else{document.getElementById("NM-CO-telefono").style.display="none";}

    if(password===""){
        document.getElementById("NM-CO-password").style.display="block";
    }else{document.getElementById("NM-CO-password").style.display="none";} 
    if(checkNombre() && checkApellido() && checkTelefono() && checkCorreo() && checkContrasena()){
        // Guarda los Registros 
        let registros=agregarRegistro();
        // Muestra el Usuario Registrado en pantalla
        const mynombre=document.createElement('p');
        const myapellido=document.createElement('p');
        const mytelefono=document.createElement('p');
        const mycorreo=document.createElement('p');
        mynombre.setAttribute("id","mynombre");
        myapellido.setAttribute("id","myapellido");
        mytelefono.setAttribute("id","mytelefono");
        mycorreo.setAttribute("id","mycorreo");
        // Mensaje a mostrar
        mynombre.textContent='Nombre: ' + registros[registros.length-1].nombre;
        myapellido.textContent='Apellido: ' + registros[registros.length-1].apellidos;
        mytelefono.textContent='Telefono: ' + registros[registros.length-1].telefono;
        mycorreo.textContent='Correo: ' + registros[registros.length-1].correo;
        // Agregando el mensaje en el Div con ID MostrarRegistro
        MostrarRegistro.appendChild(mynombre);
        MostrarRegistro.appendChild(myapellido);
        MostrarRegistro.appendChild(mytelefono);
        MostrarRegistro.appendChild(mycorreo);
        // Limpia los valores ingresados 
        document.getElementById("nombre").value="";
        document.getElementById("apellidos").value="";
        document.getElementById("telefono").value="";
        document.getElementById("correo").value="";
        document.getElementById("password").value="";
        // Muestra el div de Registro Existoso 
        document.getElementById("NM-div-RegistroExitoso").style.display="block";
    }  
}

//*...Registro OK...*/
document.querySelector(".NM-div-button").addEventListener('click', RegistroOk);
function RegistroOk(){
    // Oculta la ventana de registro Exitoso
    document.getElementById("NM-div-RegistroExitoso").style.display="none";
    // Elimina los p ingresados en el fomulario 
    MostrarRegistro.removeChild(document.getElementById("mynombre"));
    MostrarRegistro.removeChild(document.getElementById("myapellido"));
    MostrarRegistro.removeChild(document.getElementById("mytelefono"));
    MostrarRegistro.removeChild(document.getElementById("mycorreo"));
}


/*...Validacion del campo Nombre...*/
document.querySelector("#nombre").addEventListener('change', checkNombre);
function checkNombre(){
    const name=document.getElementById("nombre").value;
    const regex= /[0-9]/;
    // Visualizacion de alertas
    if(name!=""){
        document.getElementById(`NM-CO-nombre`).style.display="none";
    }
    if( name.length>0 && name.length<4){
        document.getElementById(`NM-nombre-4caracteres`).style.display="block";
    }else{document.getElementById(`NM-nombre-4caracteres`).style.display="none"}

    if(name.length>30){
        document.getElementById(`NM-nombre-30caracteres`).style.display="block";
    }else{document.getElementById(`NM-nombre-30caracteres`).style.display="none"}

    if(regex.test(name)){
        document.getElementById(`NM-nombre-Nonumeros`).style.display="block";
    }else{document.getElementById(`NM-nombre-Nonumeros`).style.display="none"}
    // Return
    if(name.length<4 || name.length>30 || regex.test(name) || name==""){
        return false;
    }else{
        return true;
    }
}

/*...Validacion del campo Apellido...*/
document.querySelector("#apellidos").addEventListener('change', checkApellido);
function checkApellido(){
    const apellido=document.getElementById("apellidos").value;
    const regex= /[0-9]/;
    // Visualizacion de alertas
    if(apellido!=""){
        document.getElementById(`NM-CO-apellidos`).style.display="none";
    }
    if( apellido.length>0 && apellido.length<4){
        document.getElementById(`NM-apellidos-4caracteres`).style.display="block";
    }else{document.getElementById(`NM-apellidos-4caracteres`).style.display="none"}

    if(apellido.length>30){
        document.getElementById(`NM-apellidos-30caracteres`).style.display="block";
    }else{document.getElementById(`NM-apellidos-30caracteres`).style.display="none"}

    if(regex.test(apellido)){
        document.getElementById(`NM-apellidos-Nonumeros`).style.display="block";
    }else{document.getElementById(`NM-apellidos-Nonumeros`).style.display="none"}
    // Return
    if(apellido.length<4 || apellido.length>30 || regex.test(apellido) || apellido==""){
        return false;
    }else{
        return true;
    }
}

/*...Validacion del campo Telefono...*/
document.querySelector("#telefono").addEventListener('change', checkTelefono);
function checkTelefono(){
    const tel=document.getElementById("telefono").value;
    const regex= /^[0-9]+$/i;
    // Visualizacion de alertas
    if(tel!=""){
        document.getElementById(`NM-CO-telefono`).style.display="none";
    }
    if( tel.length==10 || tel==""){
        document.getElementById(`NM-telefono-7digitos`).style.display="none";
    }else{document.getElementById(`NM-telefono-7digitos`).style.display="block"}

    if(regex.test(tel) || tel==""){
        document.getElementById(`NM-telefono-Noletras`).style.display="none";
    }else{document.getElementById(`NM-telefono-Noletras`).style.display="block"}
    //Return
    if(tel.length==10 && regex.test(tel)){
        return true;
    }else{
        return false;
    }
}

/*...Validacion del campo Correo...*/
document.querySelector("#correo").addEventListener('change', checkCorreo);
function checkCorreo() {    
    const correo=document.getElementById("correo").value;
    /*....Todo tipo de caracteres...*/
    /*emailRegex =/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i*/ 
    /*....Caracteres normales...*/
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // Visualizacion de alertas y Return
    if(correo!=""){
        document.getElementById(`NM-CO-correo`).style.display="none";
    }
    if (emailRegex.test(correo) || correo==""){
        document.getElementById(`NM-correo-formato`).style.display="none";
        document.getElementById(`NM-correo-ejemplo`).style.display="none";
        return true
    }else {
        document.getElementById(`NM-correo-formato`).style.display="block";
        document.getElementById(`NM-correo-ejemplo`).style.display="block";
        return false;
    }
}

/*...Validacion del campo Contraseña...*/
document.querySelector("#password").addEventListener('change', checkContrasena);
function checkContrasena() {    
    const contrasena=document.getElementById("password").value;
    /*...Con Caracteres Especiales...*/
    /*const ContrasenaRegex = /^(?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/*/
    const ContrasenaRegex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    // Visualizacion de alertas 
    if(contrasena!=""){
        document.getElementById("NM-CO-password").style.display="none";
    }
    if(contrasena==""){
        document.getElementById("NM-CO-password").style.display="block";
        document.getElementById(`NM-password-8caracteres`).style.display="none";
        document.getElementById(`NM-password-minuscula`).style.display="none";
        document.getElementById(`NM-password-mayuscula`).style.display="none";
        document.getElementById(`NM-password-digito`).style.display="none";
    }

    else if (ContrasenaRegex.test(contrasena) && contrasena.length>=8   ) {
        document.getElementById(`NM-password-8caracteres`).style.display="none";
        document.getElementById(`NM-password-minuscula`).style.display="none";
        document.getElementById(`NM-password-mayuscula`).style.display="none";
        document.getElementById(`NM-password-digito`).style.display="none";
        return true;
    }else {
        document.getElementById(`NM-password-8caracteres`).style.display="block";
        document.getElementById(`NM-password-minuscula`).style.display="block";
        document.getElementById(`NM-password-mayuscula`).style.display="block";
        document.getElementById(`NM-password-digito`).style.display="block";

        return false;
    }
}
/*
module.exports={
    checkNombre,checkApellido,checkTelefono,checkCorreo,checkContrasena,validateForm
}*/
