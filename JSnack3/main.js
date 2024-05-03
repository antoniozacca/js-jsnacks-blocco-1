'use strict'
let somma = 0;
let numeroInput = 10;
for (let i = 0; i < numeroInput; i++) {
    somma+=Number(prompt (`inserire numero ${i}`));

    
}
console.log(somma);