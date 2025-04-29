//nome è il mio parametro, placeholder, segnaposto
function saluta(nome, cognome){

    console.log("Ciao, " + nome + " " + cognome);

}

//Nel richiamare la funzione saluta sono "obbligato" a passargli il parametro

saluta("Dario", "Mennillo");
saluta("Angel", "Rossi");
saluta("Agustina", "Azzurri");
saluta("Valeria", "Bianchi");

// let nomeUser = prompt("Come ti chiami ?");
// saluta(nomeUser);

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

function salutaStudente(nomeStudente){
    console.log("Ciao, " + nomeStudente + " benvenuto nel corso !");
}

for(let i = 0; i < studenti.length; i++){
    salutaStudente(studenti[i]);
}

