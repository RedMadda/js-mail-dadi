
// play
function play(){
    // Genero numero random giocatore
    var numUmano = Math.floor(Math.random() * 6) + 1;
    // console.log("Numero giocatore", numUmano);
    document.getElementById("stampaUmano").innerHTML = "Numero giocatore: " + numUmano;

    // Genero numero pc
    var numPc = Math.floor(Math.random() * 6) + 1;
    // console.log("Numero avversario", numPc);
    document.getElementById("stampaPc").innerHTML = "Numero avversario: " + numPc;


    // stabilire vincitore
    var esito = "Nessuno, pareggio!";
    if (numUmano > numPc){
        esito = "Tu! Hai vinto!";
    } else if (numUmano < numPc){
        esito = "L'avversario...Hai perso!";
    }

    document.getElementById("esito").innerHTML = esito;

    
}



var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}


function updateDisplay(val) {
    var singPlur;
    if(val == 1){
        singPlur = "volta!"
    } else {
        singPlur = "volte!"
    }
    document.getElementById("times").innerHTML = "Hai giocato " + val + " " + singPlur;
}
