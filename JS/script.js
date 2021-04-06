// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parolaUtente =  prompt ('Inserisci una parola').toLocaleLowerCase().trim();
console.log(parolaUtente);

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
    console.log("La parola è palindroma ", + parolaUtente);
}else if(parolaUtente !== capovolta){
    console.log("La parola non è palindroma");
}
  

//L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
var sceltaGiocatore = parseInt( prompt ("Scegli pari o dispari")).toLocaleLowerCase().trim();
var numeroGiocatore = parseInt( prompt ("Scegli un numero da 1 a 5"));

var numeroOpp = getRandomNumber(1, 5);

//Somma numeri
var somma = numeroGiocatore + numeroOpp;

//Pari dispari
var risultato = verificaPariDispari(somma);

//Vincitore
if(risultato === sceltaGiocatore){
    console.log("Vince giocatore");

}else{
    console.log("Vince computer");
}

//Genera num
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (man - min) ) + min;
}


//Verifica numero pari e dispari
function verificaPariDispari (num) {
    if(num % 2 ===0){
        return "pari"
    }
    return "dispari"
}