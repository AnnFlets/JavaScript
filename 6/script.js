//EJERCICIO #1
function primerEjercicio(){
    let mes = Number(prompt("Ingrese un número del 1 al 12:"));
    switch(mes){
        case 1:
            alert("ENERO");
            break;
        case 2:
            alert("FEBRERO");
            break;
        case 3:
            alert("MARZO");
            break;
        case 4:
            alert("ABRIL");
            break;
        case 5:
            alert("MAYO");
            break;
        case 6:
            alert("JUNIO");
            break;
        case 7:
            alert("JULIO");
            break;
        case 8:
            alert("AGOSTO");
            break;
        case 9:
            alert("SEPTIEMBRE");
            break;
        case 10:
            alert("OCTUBRE");
            break;
        case 11:
            alert("NOVIEMBRE");
            break;
        case 12:
            alert("DICIEMBRE");
            break;
        default:
            alert("No existe un mes con el número ingresado");
    }
}

//EJERCICIO #2
function segundoEjercicio(){
    let usuario = prompt("Ingrese su usuario:");
    let password = prompt("Ingrese su contraseña:")
    if (usuario === "admin" && password === "admin123"){
        alert("Sesión iniciada con éxito");
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}

//EJERCICIO #3
function tercerEjercicio(){
    let numero1 = parseFloat(prompt("Ingrese el primer número"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número"));
    let signo = prompt("Ingrese el símbolo correspondiente a la operación a realizar (+, -, *, /):")
    switch(signo){
        case "+":
            alert("El resultado de la suma es: " + (numero1 + numero2));
            break;
        case "-":
            alert("El resultado de la resta es: " + (numero1 - numero2));
            break;
        case "*":
            alert("El resultado de la multiplicación es: " + (numero1 * numero2));
            break;
        case "/":
            alert("El resultado de la división es: " + (numero1 / numero2));
            break;
        default:
            alert("El símbolo de operación ingresado no es válido");
    }
}

//EJERCICIO #4
function cuartoEjercicio(){
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad >= 18){
        alert("Es mayor de edad");
    }else{
        alert("Es menor de edad");
    }
}

//EJERCICIO #5
function quintoEjercicio(){
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0){
        alert("El número es par");
    }else{
        alert("El número es impar");
    }
}

//EJERCICIO #6
function sextoEjercicio(){
    console.log("--- BIENVENIDO ---")
    console.log("1. Sumar")
    console.log("2. Restar")
    console.log("3. Salir")
    let opcion = parseInt(prompt("Ingrese el número correspondiente a la acción a realizar:"));
    switch(opcion){
        case 1:
            let numeroS1 = parseFloat(prompt("Ingrese el primer número de la suma:"));
            let numeroS2 = parseFloat(prompt("Ingrese el segundo número de la suma:"));
            console.log("El resultado de la suma es: " + (numeroS1 + numeroS2));
            break;
        case 2:
            let numeroR1 = parseFloat(prompt("Ingrese el primer número de la resta:"));
            let numeroR2 = parseFloat(prompt("Ingrese el segundo número de la resta:"));
            console.log("El resultado de la resta es: " + (numeroR1 - numeroR2));
            break;
        case 3:
            console.log("Saliendo...")
            break;
        default:
            console.log("La opción ingresada es inválida");
    }
}