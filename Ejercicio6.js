let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
                 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

let numero = prompt("Escriba su DNI sin la letra");
let letra = prompt("Escriba su letra").toUpperCase;

do{
    let salir = false;

    if (numero > 0 && numero < 99999999){
        let letraCalculada = letras[numero%23]

        if (letra == letraCalculada)
            alert("La letra es correcta");
        else
            alert("La letra no es correcta");
    }else{
        alert("El número proporcionado no es válido.")
        salir = true;
    }
}while (!salir)