/* 
Primo snack
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// user prompt 1

const firstPrompt = Number(prompt('Insert first number'));

// console.log(firstPrompt);

// user prompt 2

const secondPrompt = Number(prompt('Insert second number'));

// console.log(secondPrompt);

// print the highest number

if (firstPrompt > secondPrompt) {
    
    alert('Highest number is ' + firstPrompt)
    console.log(firstPrompt);
    

} else if (firstPrompt < secondPrompt) {
    
    alert('Highest number is ' + secondPrompt)
    console.log(secondPrompt);

}