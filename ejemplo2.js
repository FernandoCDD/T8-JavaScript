let boton = document.getElementById('boton');
boton.addEventListener('click', crearAlumno);
let indice = 1;

function crearAlumno(){
    let ultimaFila = document.querySelector('tr:last-child');
    let nuevaFila = ultimaFila.cloneNode(true);
    nuevaFila.firstElementChild.innerHTML = prompt('Indique el nombre del alumno.');
    nuevaFila.lastElementChild.innerHTML = ++indice;

    document.querySelector('table').append(nuevaFila);
}

function buscarEnlaces(){
    let enlace = document.getElementById('enlaceColegio');
    alert(enlace.href);
}

// Si sabemos que devuelve más de uno, se usa querySelectorAll.
function buscarEnlaces2(){
    let enlace = document.querySelector('#enlaceColegio');
    alert(enlace.innerHTML);
    let enlaces = document.querySelectorAll('a');
    for(let enlace of enlaces){
        enlace.nextElementSibling.innerHTML = "parrafo modificado";
        
        let siguienteParrafo = enlace.nextElementSibling;
        let primerHjioParrafo = siguienteParrafo.children[0];
    }
}
// buscarEnlaces2();

function crearParrafo(contenido){

    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML = contenido;

    /*let elBody = document.querySelector('body');
    elBody.append(parrafoNuevo);*/

    document.body.append(parrafoNuevo);
}

//crearParrafo();

function crearParrafo2(){

    let parrafoNuevo = document.createElement('p');
    let contenido = prompt('¿Qué quieres escribir?');
    parrafoNuevo.innerHTML = contenido;

    // let elBody = document.querySelector('body');
    //elBody.append(parrafoNuevo);
    document.body.append(parrafoNuevo);
}

// crearParrafo2();