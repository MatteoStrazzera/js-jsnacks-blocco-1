/*
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.


*/



// console.log('connesso');

// first prompt

const firstWord = prompt('Insert the first word');

console.log(firstWord);

// second prompt

const secondWord = prompt('Insert the second word');

console.log(secondWord);

// print the two words

//  if the first word.lenght > secondword.lenght 

if (firstWord.length > secondWord.length) {
    
    console.log(secondWord + ' ' + firstWord);

    //  if the first word.lenght < secondword.lenght 
} else if (secondWord.length > firstWord.length) {
    
    console.log(firstWord + ' ' + secondWord);
}