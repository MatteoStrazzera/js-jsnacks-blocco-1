/*
Snack 3
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

*/

// ask the user name with a prompt

const userName = prompt('Insert your name');

// create the array whith the guests name

const guestsName = ['matteo', 'marco', 'maria', 'sofia']

let noEntry = false;

// scan the guestsname

for (let index = 0; index < guestsName.length; index++) {
    const element = guestsName[index];

    if (userName === element) {
        
        console.log('You can join the party');
        noEntry = true;
        break;

    } else {
        noEntry = false;
        console.log('Go away');
        break;
    }

    
}