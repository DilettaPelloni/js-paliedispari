// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//chiedo all'utente di inserire la parola pari o dispari, controllando che lo faccia correttamente
let inputAnswer;
do {
    inputAnswer = prompt('Scrivi "pari" o "dispari":').toLowerCase()

    if ((inputAnswer != 'pari') && (inputAnswer != 'dispari')) {
       alert('Il dato inserito non è valido.')
    }
} while ((inputAnswer != 'pari') && (inputAnswer != 'dispari'));

//chiedo all'utente di inserire un numero da 1 a 5, controllando che lo faccia correttamente
let inputNumber;
do {
    inputNumber = parseInt(prompt('Scrivi un numero da 1 a 5:'))

    if ((isNaN(inputNumber)) || (inputNumber < 1) || (inputNumber > 5)) {
        alert('Il dato inserito non è valido.')
    }
} while ((isNaN(inputNumber)) || (inputNumber < 1) || (inputNumber > 5));

//creo una funzione che restituisce un numero casuale compreso in un intervallo
function randomNumber (min, max) {
    const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

//genero un numero casuale
const cpuNum = randomNumber(1, 5);

//sommo i due numeri
const result = cpuNum + inputNumber;

//creo una funzione che restituisce se un numero è pari
function isEven (num) {
    return num % 2 == 0;
}

//restituisco il risultato

console.log('Il giocatore ha scelto: ', inputAnswer);
console.log('Numero giocatore: ', inputNumber);
console.log('Numero casuale: ', cpuNum);
console.log('Risultato somma: ', result);

if ((isEven(result) && inputAnswer == 'pari') || (!(isEven(result)) && inputAnswer == 'dispari')) {
    console.log('Il giocatore vince');
}
else {
    console.log('Il giocatore perde');
}