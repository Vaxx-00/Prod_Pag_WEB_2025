let utenti = [];

function recuperaDatiUtenti(){
    fetch("http://localhost:3000/users")
    .then(data => {
       return data.json(); //
    })
    .then(response =>{
        // console.log(response);
        utenti = response;
        console.log("La response è questa:" ,response);
        stampaUtenti(utenti);
    })
    
}
document.addEventListener("DOMContentLoaded", recuperaDatiUtenti);

let demo = document.querySelector("#demo");
/**
 * 
 * @param {Object[]} utenti 
 */
function stampaUtenti(utenti){
    utenti.forEach(utente =>{
        demo.innerHTML += "<li>" + utente.first_name + " " + utente.last_name + "</li>";
    })
}

class Utente{
    constructor(nome, cognome, email){
        this.first_name = nome;
        this.last_name = cognome;
        this.email = email;
    }
}

let btn = document.querySelector("#btn");
let feed = document.querySelector("#feed");

function registraUtente(event){
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let email = document.querySelector("#email").value;

    if(nome.trim() != "" && cognome.trim() != "" && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        let nuovoUtente = new Utente(nome, cognome, email);

        //Adesso devo prendere il nuovo utente e passarlo attraverso una fetch utilizzando il metodo POST per registrarlo sul db.json
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(nuovoUtente)
        })
        .then(data =>{return data.json()})
        .then(response => {
            console.log("Registrazione avvenuta ", response.statusCode); 
        })
    }else{
        feed.innerHTML = "<h2> Mbare, ti sei scordato qualcosa </h2>";
        event.preventDefault(); //blocca il lancio del form
    }
}

btn.addEventListener("click", function(event){
    registraUtente(event)
});