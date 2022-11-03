// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// numero dell'utente
const numUser = parseInt(prompt('scegli un numero pari o dispari da 1 a 5'))
console.log('Il tuo numero è' + numUser)
// numero random pc con funzione
function numPC(){
    const numPC = (Math.round(Math.random() * 5));
    console.log('il numero del pc è', numPC)
    return numPC;
}
// somma dei numeri
let somma = numUser + numPC();
console.log('la somma dei numeri è' + somma);

function verificaNum(){
    let risultato = somma;
    if(risultato % 2){
        risultato = 'ha vinto il dispari';
    } else {
        risultato = 'ha vinto il pari';

    }

    return risultato;
}

console.log( verificaNum());