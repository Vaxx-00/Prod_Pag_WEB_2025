//1. Creare un oggetto sulla base del form
class Utente{
    constructor(nome, cognome, email, abbonamento){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.abbonamento = abbonamento;
    }
}

//2. prendere i campi del form per creare l'oggetto
let mioForm = document.getElementById("mioForm");

//Questa funzione si occuperà di creare l'oggetto utente e "registrarlo"
function registraAcquisto(){

    //recupero i value dei campi
    console.log(mioForm);

    //Prendo le info dei campi input attraverso id e value
    let nomeDalForm = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let abbonamento=document.getElementById("abbonamento").value;

    if(nome == "" || cognome == "" || email == "" || abbonamento == ""){
        alert("Amico, hai dimenticato qualcosa !!");
        //con preventDefault() blocco l'invio del form quando l'utente sbaglia
        event.preventDefault();
    }else{   
        let utente = new Utente(nomeDalForm, cognome, email, abbonamento);
        console.log(utente);
    }
    
}

mioForm.addEventListener("submit", registraAcquisto);

