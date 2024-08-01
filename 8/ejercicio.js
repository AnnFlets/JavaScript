let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
let num = numbers.shift();
numbers.forEach((numero) => {
    console.log(numero);
});