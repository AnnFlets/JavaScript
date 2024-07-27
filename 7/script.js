//EJERCICIO #1
function primerEjercicio(){
    while(true){
        var numero = Number(prompt("Ingrese un número:"));
        if(numero < 0){
            break;
        }
        console.log("El cuadrado del número es: " + (numero**2));
    }
}

//EJERCICIO #2
function segundoEjercicio(){
    while(true){
        var numero = Number(prompt("Ingrese un número:"));
        if(numero === 0){
            break;
        }
        else if(numero >= 0){
            console.log("El número \"" + numero + "\" es positivo");
        }else{
            console.log("El número \"" + numero + "\" es negativo");
        }
    }
}

//EJERCICIO #3
function tercerEjercicio(){
    while(true){
        var numero = Number(prompt("Ingrese un número:"));
        if(numero === 0){
            break;
        }
        else if(numero % 2 === 0){
            console.log("El número \"" + numero + "\" es par");
        }else{
            console.log("El número \"" + numero + "\" es impar");
        }
    }
}

//EJERCICIO #4
function cuartoEjercicio(){
    var numero = Number(prompt("Ingrese un número a adivinar:"));
    var numeroAdivinar = 0;
    do{
        numeroAdivinar = Number(prompt("Ingrese un número:"))
        if(numeroAdivinar > numero){
            console.log("El número ingresado es MAYOR");
        }else if(numeroAdivinar < numero){
            console.log("El número ingresado es MENOR");
        }
    }while(numeroAdivinar != numero);
    console.log("El número era: " + numero);
}

//EJERCICIO #5
function quintoEjercicio(){
    let suma = 0;
    while(true){
        var numero = Number(prompt("Ingrese un número:"));
        if(numero === 0){
            break;
        }
        suma +=  numero;
    }
    console.log("El resultado de la suma es: " + suma);
}