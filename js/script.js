
// Genero numero random giocatore
var numUmano = Math.floor(Math.random() * 7) + 1;
// console.log("Numero giocatore", numUmano);
document.getElementById("stampaUmano").innerHTML = "Numero giocatore: " + numUmano;

// Genero numero pc
var numPc = Math.floor(Math.random() * 7) + 1;
// console.log("Numero avversario", numPc);
document.getElementById("stampaPc").innerHTML = "Numero avversario: " + numPc;


// stabilire vincitore
var esito = "Pareggio, nessun vincitore!";

if (numUmano > numPc){
    esito = "Hai vinto!"
} else if (numUmano < numPc){
    esito = "Hai perso!"
}
// console.log(esito);
alert(esito)
