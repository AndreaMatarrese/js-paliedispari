// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// istruzioni
// recepisco la parola,
// la inverto,
//     se la parola invertita è uguale a quella iniziale
//         stampa a video che la parola è palindroma
//      altrimenti se NON è uguale a quella iniziale
//         stampa a video che la parola NON è palindroma


// recepisco la parola
const eleWord = prompt('scrivi una parola')


// creo la funzione per verificare se la parola è palindroma
function verPalindroma(testWord){
    const wordInverted = testWord.split('').reverse().join('');
    if(wordInverted == testWord){
        console.log('la parola è palindroma')
    } else {
        console.log('la parola non è palindroma')
    }
    return wordInverted;
}


// meccanismo di funzionamento della funzione

if( eleWord == verPalindroma(eleWord)){
    console.log('la parola è palindroma')
} else {
    console.log('la parola non è palindroma')
}