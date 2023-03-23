/*
let mes = "Marzo";

alert(mes);
*/

// let lista = {valor1, valor2, valor3} Array estático 
// let miArray = new Array ();  Array dinámico
//let selecValor = lista [2]

/*
let pwd1 = '1234';
let pwd2 = '12234';
alert (pwd1 == pwd2?"Contraseñas correctas":"Las contraseñas no coinciden");

let mensaje = 'Hola vecinito';

for (let letra of mensaje){
    alert(letra);
}

let nombre = prompt("Escriba su nombre");
let apellidos = prompt ("Escriba su apellido");

alert(combinarNombreYApellidos(nombre, apellidos));

function combinarNombreYApellidos (nombre, apellidos){
    return nombre + apellidos;
}

let combinarNombreYApellidos = (nombre, apellidos) => nombre+apellidos;
*/

/*
let palabras = new Array ();

do{
    let palabra = prompt ("Diga una palabra");
    salir = false;
    if (palabra !=='0'){
    let palabraFuera = palabras.pop();
        palabras.push(palabra);
        alert(palabras.join(' '));
    }else
    salir = true
}while(!salir);

// alert(palabras.join(' '));

*/

let semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

do{
    alert(semana.shift());
}while (palabras>0);