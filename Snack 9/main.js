'use strict'
let somma = 0;
let arrayNumbers = [];
for (let i = 0; i < 10; i++) {
   let numbers = parseFloat(prompt("inserisci un numero"));
    arrayNumbers.push(numbers);
}

for (let i = 0; i < arrayNumbers.length; i++){
    somma += arrayNumbers[i];
}
let media = somma / arrayNumbers.length;

console.log( "la somma dei numeri è: ",somma);
console.log("la media dei numeri è: ",media);