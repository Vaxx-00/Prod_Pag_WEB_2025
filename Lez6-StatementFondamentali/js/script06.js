//lo switch permette di valutare il valore di una varibile stabilendo dei casi in cui far accadere qualcosa

let msg = "";
let livello = 2;

switch(livello){

    case 1:
        msg = "Ciao giocatore, sei al primo livello";
    break; //break interrompe l'esecuzione del costrutto (if, for, while, do, switch ::: paradigmi fondamentali della programmazione)

    case 2:
        msg = "Ciao giocatore, questo è solo il secondo livello";
    break;

    case 3:
        msg = "Ciao giocatore, sei all'ultimo livello. Vediamo come te la cavi con il boss finale !!";
    break;

    default:
        msg = "Ciao giocatore"
    break;
}

console.log(msg);

let tipoAbbonamento = "annuale"

if(tipoAbbonamento == "mensile"){
    console.log("Paga 12 € al mese");
}else {
    console.log("Paga 100 € l'anno");
}


switch (tipoAbbonamento){
    case "mensile":
        console.log("Paga 12 €");
    break;

    case "annuale":
        console.log("Paga 100€");
    break;

    default:
        console.log("Abbonamento non selezionabile");
    break
}