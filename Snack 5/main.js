'use strict'
const array = [];
for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt("inserisci un numero"));
    if (number %  2 !==0) {
           array.push(number);
    } 
}

console.log(array);