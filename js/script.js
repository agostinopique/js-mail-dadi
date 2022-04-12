/* LOGICA A STEP

    MAIL
    1. Creo un array con le mail che hanno accesso al gioco dei dadi;
    2. Chiedo la mail all'utente tramite un prompt recuperando il valore immesso in una variabile;
    3. Controllo se la mail inserita corrisponde ad una delle mail presenti nell'array.
    4. Stampo a schermo un alert positivo o negativo a seconda dell'esito del controllo;

    DADI
    1. Creo due estrattori random da 1 a 6,uno per l'utente e uno per il computer;
    2. L'estrazione viene avviata alla pressione di un bottone;
    3. Faccio un paragone tra i valori che vengono estratti dal generatore, il maggiore vince;
    4. Creo un avviso che annuncia il vincitore dell'estrazione;

*/


// MAIL

// Creo un array con una lista di mail che sono abilitate al gioco;

const mailList = ['mi', 'pinco.pallo@gmail.com', 'pallo.pinco@gmail.com', 'dimmelo.dammelo@gmail.com', 'franco.svizzero@gmail.com', 'giuseppe.verdi@gmail.com'];

// chiedo la mail all'utente
let userMail = prompt('Inserisci la tua mail per la verifica');

let responseMessage = document.getElementById('alert');

// Verifico la mail inserit con la lista di mail autorizzate
let mailVerification = false;

for(let i = 0; i < mailList.length; i++) {
    
    console.log(mailList[i]);
    if(userMail === mailList[i]) {
        mailVerification = true;
    } 

console.log(mailVerification);

}

const startMessage = document.querySelector('.ap-container');

const playButton = document.getElementById('play_btn');

const playArea = document.querySelector('.play_area');


// Messaggio di risposta della verifica
if(mailVerification === true) {

    responseMessage.innerHTML = 'Benvenuto al Gioco dei Dadi';
    playButton.classList.remove('ap-button');

} else {

    responseMessage.innerHTML = 'Non sei un utente registrato per questo gioco!';

}

playButton.addEventListener('click', function(){

    startMessage.classList.add('disapear');

    playArea.classList.remove('disapear');

})


// RANDOM DICE

const randomBtn = document.querySelector('#random_btn');

const annunciaWin = document.querySelector('.winner_container');

// A click estraggo un numero per il computer e per l'utente
randomBtn.addEventListener('click', function() {

    let randomComputer = Math.floor((Math.random() * 6) + 1);
    console.log('Computer', randomComputer);

    let randomUser = Math.floor((Math.random() * 6) + 1);
    console.log('User', randomUser);
    
    let risultatiEst = document.querySelector('.ap_row');
    
    risultatiEst.innerHTML = `<div class="col-6">${randomUser}</div> <div class="col-6">${randomComputer}</div>`

    // Verifico e annuncio il vincitore 
    if(randomComputer < randomUser) {

        annunciaWin.innerHTML = 'Hai Perso!';

    } else if (randomComputer > randomUser){

        annunciaWin.innerHTML = 'Hai Vinto!';

    }   else{

        annunciaWin.innerHTML = 'Pareggio!';

    }
})
