// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parolaUtente = parseInt ( prompt('Inserisci una parola'));

var capovolta = parolaInvertita(parolaUtente);
console.log(capovolta);

//INVERSIONE PAROLA
function parolaInvertita (word){
    var prova = "";
    console.log(prova);
    for( var i = word.length - 1; i >= 0; i--){
        prova += word[i];
    }
    return prova;
}

if( parolaUtente === capovolta){
    console.log("la parola è palindroma ", + capovolta);
}


//L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
