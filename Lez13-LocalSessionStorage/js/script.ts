let numero = 5;
console.log(numero);

let numero2: number = 5;
let mioNome: any;
mioNome = "Dario";


type Studente = {
    nome: String,
    cognome: String,
    eta: Number,
    corso: String
} 

let mieiStudenti: Studente[] = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 30,
        corso: "TPPW"
    }
]


let studenti: String[] = [
    "Gabri",
    "Agustina",
    "Angel",
    "Alessia"
];


let telefono: object | string | boolean;
telefono = {
    nome: "Samsung",
    mod: "S22",
    ram: 8
};

function sommaNumeri (a: number , b: number){
    return a+b;
}

sommaNumeri(4,6);
