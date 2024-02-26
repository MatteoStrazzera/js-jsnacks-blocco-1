// console.log('connesso');

/*

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

*/

const userNumber = prompt('inserisci un numero di 4 cifre');

// console.log(userNumber);

let sum = 0;

for (let i = 0; i < userNumber.length ; i++) {

    let element = userNumber[i];

    element = Number(element);

    sum += element    
}

console.log(sum);

