
function esPar(num){
    let resultado = "Eso no es un número";
    if(isFinite(num))
        resultado = num%2 === 0?"El número es par":"El número es impar";
              
    return resultado;
}

let num = prompt("Indique un número");
alert(esPar(num));
