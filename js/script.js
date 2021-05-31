
// Genero numero random giocatore
var numUmano = Math.floor(Math.random() * 6) + 1;
// console.log("Numero giocatore", numUmano);
document.getElementById("stampaUmano").innerHTML = "Numero giocatore: " + numUmano;

// Genero numero pc
var numPc = Math.floor(Math.random() * 6) + 1;
// console.log("Numero avversario", numPc);
document.getElementById("stampaPc").innerHTML = "Numero avversario: " + numPc;


// stabilire vincitore
var esito = "Pareggio, nessun vincitore!";

if (numUmano > numPc){
    esito = "Hai vinto!";
} else if (numUmano < numPc){
    esito = "Hai perso!";
}

document.getElementById("esito").innerHTML = esito;
// console.log(esito);
// alert(esito);

// XX) Finestra modale tenera si saluto: "È stato 
// bello per te come lo è stato per me?"

// XX) Allora rigiochiamo, basta ricaricare la pagina!")  
// XX) Altra finestra modale con sfondo le sfere
//      del drago e macchinetta per trovarle.
//      messaggio:"Meglio che dover ritrovare le 
//      sfere del drago, no? :)" "Clicca la rotellina
//      in alto a destra, e risfidami, terrestre!"


