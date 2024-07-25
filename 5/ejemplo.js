//Con el Number, si se detecta un caracter distinto a un número, resulta en un NaN (Not a Number)
let telefono = "1234567890";
let tel = Number(telefono);
console.log(typeof telefono);
console.log(typeof tel);

//Mientras tanto, con parseInt, se parsean todos los números que se encuentren antes de un símbolo distinto a un número
let telefono2 = "12345!67890";
let tel2 = parseInt(telefono2);
console.log(tel2);

console.log(telefono2.replace("-", ""));
console.log(telefono2.split("-"));


let cadena = "12!15#sdf";
let nuevaCadena = cadena.replace(/[#!&]/g, '');
console.log(nuevaCadena)

let altura = "1.53";
let alturaParseada = parseFloat(altura);
console.log(alturaParseada);

let cantidadBolsas = "55.2 bolsas";
let cantidadParseada = parseFloat(cantidadBolsas);
console.log(cantidadParseada);

let miJson = "{\"nombre\":\"Juan\", \"edad\":30}";
console.log(JSON.parse(miJson));

let nombrePersona = '"Lanky"';
let edadPersona = 3;
let jsonPersona = `{"nombre":${nombrePersona}, "edad":${edadPersona}}`;
console.log(JSON.parse(jsonPersona));

//Genera una tupla en donde cada posición contiene una letra del String.
console.log(eval(new String("Juan"))); //J - u - a - n

//Deliimitar la cantidad de decimales
let valorPi = 3.1416969;
console.log(valorPi.toFixed(2)); //3.14
console.log(valorPi.toFixed(3)); //3.142
console.log(valorPi.toFixed()); //3