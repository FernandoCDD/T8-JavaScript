

function comprobarPalindromo (mensaje) {
    let mensajeInvertido = mensaje.split("").reverse().join("");
  
    return mensajeInvertido == mensaje ? "es palindromo" : "no es palindromo";
}

let mensaje = prompt("Diga una frase que sea igual de derecha a izquierda (sin espacios)");
comprobarPalindromo(mensajeInvertido);