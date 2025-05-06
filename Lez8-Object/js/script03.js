//La notazione con costruttore è molto utile nel caso in cui ho tanti oggetti dello stesso tipo
class Studente {
    constructor(nome, cognome, matricola) {
        //this.nomeProp = parametro
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
}

//new è una keyword che permette di invocare il costruttore dell'oggetto
let studente1 = new Studente("Pippo", "Rossi", 1);
let studente2 = new Studente("Paola", "Verdi", 2);

console.log(studente1.nome);

let aula = [
    new Studente("Anna", "Gialli", 1),
    new Studente("Paolo", "Paoli", 2)
]

// console.log(aula[0]);
aula.forEach(stud => {
    console.log(stud);
    console.log(stud.nome, stud.cognome);
})


class Docente {
    constructor(nome, cognome, corso){
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
        this.scuola = "I&L"; //Questa prop non varia, vuol dire che tutti i docenti che creo hanno questa scuola come prop
    }

    presentati() {
        //con il this.nome sto leggendo il nome dell'oggetto docente
        return `Sono ${this.nome} ${this.cognome} e insegno nel corso di ${this.corso} presso ${this.scuola}`;
    }
}

//Stampo le proprietà del docente facendo riferimento alla denominazione delle stesse
let doc1 = new Docente("Pier", "Profio", "JS");

console.log(doc1);
console.log(doc1.nome);
console.log(doc1.cognome);
console.log(doc1.corso);

console.log(doc1.presentati());

let doc2 = new Docente("Luca", "Ceroni", "Comunicazione");
console.log(doc2.presentati());