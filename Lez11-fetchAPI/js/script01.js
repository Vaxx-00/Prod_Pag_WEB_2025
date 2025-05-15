//Voglio prendere i dati dalla seguente API
let mieiDati = "";
//1. UTILIZZO DEL METODO FETCH - BENVENUTI NELLA PROGRAMMAZIONE ASINCRONA (ajax)
//OSS:  il metodo fetch sarà sempre l'ultima cosa che verrà eseguita nel vostro codice indipendentemente da dove lo posizionate
fetch("https://jsonplaceholder.typicode.com/users/")
    .then(data => {
        console.log(data); //data è la risposta del server
        console.log("...");
        return data.json(); //data.json() -> raccoglie il body del mia request e la trasforma da json() ad oggett
    })
    .then(response =>{
        //Response è il mio arrey di oggetti
        //Qui raccolgo i dati
        console.log(response);
        mieiDati = response;
        
        console.log("Persona singola: ", filtraById(5,response));
        
        stampaCard(response);
    })
    
    console.log("I miei dati sono questi: " + mieiDati); //Fare questo qua è inutile, poiché viene eseguito prima della fetch


/**
 * @param {Number} id 
 * @param {Object[]} persone 
 */
function filtraById(id, persone){
    for(let i = 0; i < persone.length; i++){
        if(persone[i].id == id){
            return persone[i];
        }
    }
}

let demo = document.querySelector("#demo");

/**
 * @param {Object[]} persone 
 */
function stampaCard(persone){
    persone.forEach(persona =>{
        // demo.innerHTML += `<li> ${persona.name} </li>`;
        creaSingolaCard(persona)
    })
}

function creaSingolaCard(persona){

}

//ESERCIZIO: crea delle card per ogni singola persona utilizzando i metodi come createElement() ecc. Sotto ogni card inserisci un pulsante "Escludi". Al click sul pulsante "Escludi"  rimuovi la card. 

//OPZIONALE: quando clicchi sul pulsant escludi per 2 secondi, al posto della foto della persona, compare la foto di Dodò dell'albero azzurro.







