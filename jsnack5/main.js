// console.log('connesso');

/*

Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.

*/

const userNumber = Number(prompt('inserisci un numero'));

// console.log(userNumber);

// let cube = userNumber ** 3;

const cube = Math.pow(userNumber, 3);

console.log(cube);

