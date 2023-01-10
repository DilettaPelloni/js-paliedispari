// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo la stringa all'utente e verifico che non abbia inserito un numero o una stringa troppo corta. 
let errorMessage = ''
let inputString;
do {
    inputString = prompt(errorMessage + 'Scrivi una parola con più di due lettere:')

    if ((isNaN(inputString) == false) || (inputString.length < 2)) {
        errorMessage = 'Il dato inserito non è valido. '
    }

} while ((isNaN(inputString) == false) || (inputString.length < 2));

//elaboro la stringa inserita in modo che non dia errori
//in particolare la trasformo in lowercase e tolgo gli spazi
const finalString = inputString.toLowerCase().replace(/\s+/g, '');

//creo la funzione che verifica se la parola è palindroma
function isPalindrom (givenString) {
    //creo una variabile che conterrà la stringa all'incontrario
    let invertedString ='';

    //inserisco le lettere di givenString ad una ad una all'incontrario all'interno di invertedString
    for (let i = givenString.length - 1; i >= 0; i--) {
        invertedString = invertedString.concat(givenString.charAt(i));
    }

    if (givenString == invertedString) {
        return true;
    }
    else {
        return false;
    }
}

if (isPalindrom(finalString)) {
    console.log(inputString + ' è palindroma')
}
else {
    console.log(inputString + ' non è palindroma')
}
