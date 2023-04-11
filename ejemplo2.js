function buscarEnlaces(){
    let enlace = document.getElementById('enlaceColegio');
    alert(enlace.href);
}

// Si sabemos que devuelve más de uno, se usa querySelectorAll.
function buscarEnlaces2(){
    let enlace = document.querySelector('#enlaceColegio');
    alert(enlace.innerHTML);
    let parrafos = document.querySelectorAll('a+p');
    for(let parr of parrafos)
        alert(parr.innerHTML);
}

buscarEnlaces2();