let libri = [
    "Shogun",
    "Il piccolo principe",
    "Le cronache di Narnia",
    "Monte di Dio",
    "Il conte di Montecristo",
    "Il rosso e il nero",
    "Il nome della rosa",
    "Maradona la mano de d10s"
];

//consiglio: recupera prima tutti gli elementi non dinamici (button, div)
let btnAdd = document.getElementById("btnAdd");
let btnMostra = document.getElementById("btnMostra");
let libreria = document.getElementById("libreria");
let libreriaAperta = false;

//STEP1: stampare i libri nel div#libreria usando una funzione
//STEP2: recuperare il value del campo input con il nuovo titolo e inserirlo nell'array utilizzando un'altra funzione 
//STEP3: abilitare il mostra e nascondi. ATT: quando inserisco non voglio stampare direttamente la lista di libri
//STEP4: impedire l'inserimento di stringhe vuote. ATT: controlla anche quando vengono inseriti degli spazi (metodo trim())

function stampaLibri(){
    libreria.innerHTML = "";
    for(let i = 0; i < libri.length; i++){
        libreria.innerHTML += `<li> ${libri[i]} </li>`;
    }
}

function addLibro(){
    //recupero il value del campo input
    let titolo = document.getElementById("titolo").value;
    libri.push(titolo);
    if(libreriaAperta){
        libreria.innerHTML += `<li>${titolo}</li>`; //soluzione di Agustina
    }
    // stampaLibri();
}

btnAdd.addEventListener("click", addLibro);

function mostraNascondi(){
    
    if(libreria.innerHTML !== ""){
        libreriaAperta = false;
        libreria.innerHTML = "";
        console.log("La libreria è: " + libreriaAperta);
        
    }else{
        libreriaAperta = true;
        console.log("La libreria è: " + libreriaAperta);
        stampaLibri();
    }
}

btnMostra.addEventListener("click", mostraNascondi);

function sorteggiaStudente(){
    let indiceStudente = Math.floor(Math.random() * 13);
    if( indiceStudente == 9 ){
        console.log("Amir ha lasciato il corso. Sto ripescando...");
        setTimeout(() => {
            sorteggiaStudente();
        }, 2000);
    }else{
        console.log(indiceStudente);
    }
}

btnMostra.addEventListener("click", sorteggiaStudente);


