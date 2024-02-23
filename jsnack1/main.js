/* 
Primo snack
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// user prompt 1

const firstPrompt = prompt('Insert first number');

// console.log(firstPrompt);

// user prompt 2

const secondPrompt = prompt('Insert second number');

// console.log(secondPrompt);

// print the highest number

if (firstPrompt > secondPrompt) {
    
    console.log(firstPrompt);

} else if (firstPrompt < secondPrompt) {
    
    console.log(secondPrompt);

}