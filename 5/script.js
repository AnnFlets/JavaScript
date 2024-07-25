//EJERCICIO #1
function primerEjercicio(){
    let numero1 = parseFloat(prompt("Ingrese un número:"));
    let numero2 = parseFloat(prompt("Ingrese otro número:"));
    let sonIguales = (numero1 === numero2);
    if (sonIguales){
        alert("Los números son iguales");
    }else{
        alert("Los números no son iguales");
    }
}

//EJERCICIO #2
function segundoEjercicio(){
    let numero = parseFloat(prompt("Ingrese un número:"));
    if (numero >= 0){
        alert("El número es positivo");
    }else{
        alert("El número es negativo");
    }
}

//EJERCICIO #3
function tercerEjercicio(){
    let numero1 = parseFloat(prompt("Ingrese un número:"));
    let numero2 = parseFloat(prompt("Ingrese otro número:"));
    if (numero1 > numero2){
        alert("Los números ordenados de mayor a menor son: " + numero1 + ", " + numero2);
    }else{
        alert("Los números ordenados de mayor a menor son: " + numero2 + ", " + numero1);
    }
}

//EJERCICIO #4
function cuartoEjercicio(){
    let numero1 = parseFloat(prompt("Ingrese un número:"));
    let numero2 = parseFloat(prompt("Ingrese otro número:"));
    let numero3 = parseFloat(prompt("Ingrese otro número:"));
    if (numero1 > numero2 && numero1 > numero3){
        if(numero2 > numero3){
            alert("Los números ordenados de mayor a menor son: " + numero1 + ", " + numero2 + ", " + numero3);
        }else{
            alert("Los números ordenados de mayor a menor son: " + numero1 + ", " + numero3 + ", " + numero2);
        }
    }else if (numero2 > numero1 && numero2 > numero3){
        if(numero1 > numero3){
            alert("Los números ordenados de mayor a menor son: " + numero2 + ", " + numero1 + ", " + numero3);
        }else{
            alert("Los números ordenados de mayor a menor son: " + numero2 + ", " + numero3 + ", " + numero1);
        }
    }else{
        if(numero1 > numero2){
            alert("Los números ordenados de mayor a menor son: " + numero3 + ", " + numero1 + ", " + numero2);
        }else{
            alert("Los números ordenados de mayor a menor son: " + numero3 + ", " + numero2 + ", " + numero1);
        }
    }
}