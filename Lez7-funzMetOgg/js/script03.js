let studenti = [
    "Alice",
    "Nico",
    "Agustina",
    "Gabriele",
    "Leo",
    "Pietro",
    "Alessia",
    "Angel",
    "Davide",
    "Tommaso",
    "Valeria"
];

let demo = document.getElementById("demo");

//questa funzione viene richiamata tramite evento click collegato al pulsante stampa
function stampaListaStudenti(){
    //pulisco il div#demo
    demo.innerHTML = "";
    //traducilo con un for classico
    studenti.forEach(studente => {
        console.log(`Ciao, ${studente}` );
        demo.innerHTML += `<li>${studente}</li>`;
    });

    let numeroStudenti = studenti.length;
    demo.innerHTML+= `<h3> Studenti in aula: ${numeroStudenti} </h3>`;

    //LA VARIBILE numeroDocenti è una VARIABILE GLOBALE, ovvoero dichiarata fuori dalle funzioni e quindi visibile dappertutto
    demo.innerHTML += `<h3> Numero Docenti del corso: ${numeroDocenti} `;
}

//la variabile numeroStudenti è un VARIABILE LOCALE, cioè visibile solo ed ESCLUSIVAMENTE ALL'INTERNO DELLA FUNZIONE
// console.log("Studenti in aula: " + numeroStudenti);


let numeroDocenti = 4;
console.log("Numero docenti corso : " + numeroDocenti);

document.querySelector("#btn").addEventListener("click", function(){
    this.classList.toggle("btnRed");
})
    