import {registros} from "./registro.js";
console.log(registros)

document.querySelector("#btn-submit-form-login").addEventListener('click', login);
function login(){
    const correoingresado= document.getElementById("correo").value;
    const contrasenaingresada= document.getElementById("password").value;
    let usuario=false;
    let captcha=false; 
    let contrasena=false;
    for(var x in registros){
        if(registros[x].correo==correoingresado){
            usuario=true;
            if(registros[x].password==contrasenaingresada){
                contrasena=true;
            }
        }
    }
    if (validarCAPTCHA()){
        captcha=true;
    }
    if(usuario==false){
        console.log("Usuario no registrado")
    }
    if(usuario==true && contrasena==false){
        console.log("Contraseña incorrecta")
    }
    if(usuario==true && contrasena==true && captcha==false){
        console.log("Error en el CAPTCHA")
    }
    if(usuario==true && contrasena==true && captcha==true){
        return true;
    }else{return false;}
    
}

function validarCAPTCHA(){
    const valor=document.getElementById("captcha");
    return (valor==1000) ? true:false;
}
    

export{login,validarCAPTCHA,registros};