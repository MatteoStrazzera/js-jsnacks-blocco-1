// console.log('connesso');

/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

const listNumbers = [];

/*
for (let i = 0; i < 6; i++) {
    

    const userNumb = Number(prompt('inserisci un numero'))
    // console.log(userNumb);

    if (userNumb % 2 !== 0) {
        
        listNumbers.push(userNumb);

    }
    
}

console.log(listNumbers);
*/

let i = 0;

while ( i < 6) {
    
    const userNumb = Number(prompt('inserisci un numero'))
    // console.log(userNumb);

    if (userNumb % 2 !== 0) {
        
        listNumbers.push(userNumb);

    }

    i++
}
console.log(listNumbers);