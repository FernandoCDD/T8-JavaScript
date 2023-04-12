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
//buscar pornor89// buscarEnlaces2();

function crearParrafo(contenido){

    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML = contenido;

    /*let elBody = document.querySelector('body');
    elBody.append(parrafoNuevo);*/

    document.body.append(parrafoNuevo);
}

crearParrafo(prompt('¿Qué quieres escribir?'));
