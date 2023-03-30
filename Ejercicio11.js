
function liarlaConLosArray (){
    let tamano = prompt('Diga el tamaño para el Array');
    let miArray = [];
    let suma = 0;
    // Lectura del ARRAY
    for(let i= 0; i < tamano; i++){
        let numero;
        let salirDelBucle = false;
        do{
            numero = parseInt(prompt('Dime un número positivo'));
            if (isFinite(numero)&&numero>0){
            miArray [i] = numero;
            salirDelBucle = true;
            suma += numero;
            //suma del array
            }else {
                alert('Pon un número inútil.')
            }
        }while (!salirDelBucle);
    }

        let numero;
        let salirDelBucle = false;
        do{
            numero = parseInt(prompt('Dime un número positivo'));
            if (isFinite(numero)&&numero>0){
            let primero = miArray.shift();
            suma -= primero;
            miArray.push(numero);
            suma += numero;
            salirDelBucle = true;
            alert('El array es: '+miArray+' y la suma es: '+suma);
            } else{
                salirDelBucle = false;
            }

        }while (salirDelBucle);

}

liarlaConLosArray();