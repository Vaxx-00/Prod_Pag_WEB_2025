//Dichiaro una funzione
function saluta(){
    console.log("Ciao, Dario!");
}

//per eseguire una funzione la devo richiamare
saluta();

////////Indipendeza delle funzioni tra dichiarazione e richiamo
salutaStudenti();

function salutaStudenti(){
    console.log("Ciao Alice");
    console.log("Ciao Nico");
    console.log("Ciao Agustina");
    console.log("Ciao Gabriele");
    console.log("Ciao Leo");
    // saluta();
}

////////////
function salutaTutti (){
    saluta();
    salutaStudenti();
}

salutaTutti();


