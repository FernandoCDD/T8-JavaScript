let numero = 5;
let resultado = 0;
let num = prompt("Indique un número");

let result = num;

if(isFinite(num)){
    for (let i = 0; i < num; i++){
        result *= num - i;
    }       
        alert("El factorial es: "+result);
}else
    alert("mete un número, imbécil")