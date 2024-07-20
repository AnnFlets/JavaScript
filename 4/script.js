//EJERCICIO #1
function primerEjercicio(){
    let numero1 = prompt("Ingrese un número:");
    let numero2 = prompt("Ingrese otro número:");
    alert("Los números ingresados fueron: '" + numero1 + "' y '" + numero2 + "'");
}

//EJERCICIO #2
function segundoEjercicio(){
    let nombre = prompt("Ingrese su nombre:");
    alert("Buenas noches " + nombre);
}

//EJERCICIO #3
function tercerEjercicio(){
    let numero3 = Number(prompt("Ingrese un número:"));
    let numero4 = Number(prompt("Ingrese otro número:"));
    console.log("Suma: " + (numero3+numero4));
    console.log("Resta: " + (numero3-numero4));
    console.log("Multiplicación: " + (numero3*numero4));
    console.log("División: " + (numero3/numero4));
}

//EJERCICIO #4
function cuartoEjercicio(){
    let temperaturaCentigrados = Number(prompt("Ingrese la temperatura en grados centígrados:"));
    let temperaturaFahrenheit = (9/5)*temperaturaCentigrados+32;
    alert("Temperatura en grados Fahrenheit: " + temperaturaFahrenheit + " °F");
}