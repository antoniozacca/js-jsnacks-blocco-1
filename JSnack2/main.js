'use strict'
//inserisci la prima parola
const primaParola = prompt ("Inserisci la prima parola");
//inserisci la seconda parola
const secondaParola = prompt ("Inserisci la seconda parola");

//controllo la lunghezza delle due parole per stampare la più lunga
if (primaParola.length > secondaParola.length) {
    console.log(primaParola);
    console.log(secondaParola);
} else {
    console.log(secondaParola);
    console.log(primaParola);
}