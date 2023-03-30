
/*
function comprobarPalindromo (mensaje) {
    let mensajeInvertido = mensaje.split("").reverse().join("");
  
    return mensajeInvertido == mensaje ? "es palindromo" : "no es palindromo";
}

let mensaje = prompt("Diga una frase que sea igual de derecha a izquierda (sin espacios)");
comprobarPalindromo(mensajeInvertido);

*/

function comprobarPalindromo (mensaje){
    let mensajeEnArray = mensaje.split('');
    let arrayDelReves = mensajeEnArray.reverse();
    let delReves = arrayDelReves.join('');

    if(mensaje === delReves){
        alert('Es palíndromo.');

    }else{
        alert('Eso no es palíndromo.')
    }

    //(mensaje === mensaje.split('').reverse().join(''))?alert('Es palíndromo'):alert('No es palíndromo')
}

let mensaje = prompt('Dime algo');
comprobarPalindromo(mensaje);