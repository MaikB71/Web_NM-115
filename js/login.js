import {registros} from "./registro.js";
console.log(registros)

document.querySelector("#btn-submit-form-login").addEventListener('click', login);
function login(){
    const correoingresado= document.getElementById("correo").value;
    const contrasenaingresada= document.getElementById("password").value;
    const captcha=document.getElementById("captcha").value;
    // Alertas 
    if(correoingresado===""){
        document.getElementById("NM-CO-correo").style.display="block";
    }else{document.getElementById("NM-CO-correo").style.display="none";}
    if(contrasenaingresada===""){
        document.getElementById("NM-CO-password").style.display="block";
    }else{document.getElementById("NM-CO-password").style.display="none";} 
    if(captcha===""){
        document.getElementById("NM-CO-Catcha").style.display="block";
    }else{document.getElementById("NM-CO-Catcha").style.display="none";} 
    // Verificando el ingreso de los datos
    function validarCAPTCHA(){
        const valor=document.getElementById("captcha").value;
        return (valor==1000) ? true:false;
    }
    const validar_captcha=validarCAPTCHA();
    if(correoingresado!=="" && contrasenaingresada!=="" && captcha!==""){
        // Enviando datos para consultar 
        window.location.href=`consulta/${correoingresado}/${contrasenaingresada}/${validar_captcha}`;
        window.location.href=`consulta/${correoingresado}/${contrasenaingresada}/${validar_captcha}`;
        window.location.href=`consulta/${correoingresado}/${contrasenaingresada}/${validar_captcha}`;
    }
    
}