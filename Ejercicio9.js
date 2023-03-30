

function comprobarMensaje (mensaje){
    if (mensaje === mensaje.toUpperCase()){
        alert("Está formada solo por mayúsculas.");
    }else if (mensaje === mensaje.toLowerCase()){
        alert("Está formada solo por minúsculas.");
    }else{
        alert("Esta formado tanto por mayúsculas como minúsculas.");
    }
}

let mensaje = prompt("Escriba una frase")
comprobarMensaje(mensaje);