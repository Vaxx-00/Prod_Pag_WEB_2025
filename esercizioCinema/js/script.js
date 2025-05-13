class Film{
    /**
     * @param {String} titolo 
     * @param {String} locandina 
     * @param {String} regista 
     * @param {Number} anno 
     * @param {String} genere 
     * @param {String[]} attori
     */
    constructor(titolo, locandina, regista, anno, genere,attori){
        this.titolo = titolo;
        this.locandina = locandina;
        this.regista = regista;
        this.anno = anno;
        this.genere = genere;
        this.attori = attori;
    }
}

let filmsDB = [
    // {titolo: "Apocalypse now", locandina: "...url", attori:[]}
    new Film(
        "Apocalypse Now", 
        "./img/apocalypse.jpg", 
        "Francis Ford Coppola", 
        1982, 
        "Storico", 
        ["Marlon Brando", "Martin Sheen"]
    ),
    new Film(
        "Bastardi senza gloria", 
        "./img/bastardi.jpg", 
        "Quentin Tarantino", 
        2013, 
        "Storico", 
        ["Brad Pitt", "Christoph Waltz"]
    ),
    new Film(
        "Il mago di OZ", 
        "./img/mago.jpg", 
        "Victor Fleming", 
        1947, 
        "Fantastico", 
        ["judy Garland", "Jack Haley", "Ray Bolger"]
    ),
    new Film(
        "Frankenstein Junior", 
        "./img/frankenstein.jpg", 
        "Victor Fleming", 
        1947, 
        "Fantastico", 
        ["judy Garland", "Jack Haley", "Ray Bolger"]
    )
]


let boxFilms = document.querySelector("#boxFilms");

/**
 * 
 * @param {Film[]} films 
 */
function stampaFilms(films){
    boxFilms.innerHTML = ""; //pulire il div

    let card = "";

    films.forEach(film => {
        card = `<div id='cardSingola'> 
        <h4> ${film.titolo} </h4> 
        <img src='${film.locandina}' />
        <p>Regista: ${film.regista}</p>
        <p>Anno: ${film.anno} </p>
        <p>Genere: ${film.genere}</p>
        Attori:
        <ul>`

        film.attori.forEach(attore => {
            card += `
            <li> ${attore} </li>
            `;
        });

        card += "</ul></div>";

        boxFilms.innerHTML+= card;
    });
}

//stampaFilms();
document.addEventListener("DOMContentLoaded", ()=>{
    stampaFilms(filmsDB);
    mostraSingoloFilm(contatore);
});

//////////FILTRO
/**
 * @param {Film[]} films 
 * @param {String} genere
 * @returns {Film[]} filmsFiltrati
 */

function filtraFilm(films, genere){
    if( genere == "Tutti"){
        return films;
    }else{
        let filmsFiltrati = films.filter( (mieiFilms) => mieiFilms.genere == genere);
        return filmsFiltrati;
    }
}



let genereSel = document.querySelector("#genereSel");
let btnSel = document.querySelector("#btnSel");

function selezionaGenere(){
 let genere = genereSel.value;
 let filmsFiltrati = filtraFilm(filmsDB, genere);
 stampaFilms(filmsFiltrati);
}

btnSel.addEventListener("click", selezionaGenere);



let btnJSON = document.querySelector("#btnJSON");
let boxJSON = document.querySelector("#boxJSON");

//function() è una funzione anonima passata direttamente all'eventListener sul pulsante
//function() è tradotto con ()=>

btnJSON.addEventListener("click", ()=>{
    let filmsJSON = JSON.stringify(films);
    boxJSON.innerHTML = filmsJSON;
})


//CAROSELLO//
let boxCarosello = document.querySelector("#boxCarosello");
let btnIndietro = document.querySelector("#btnIndietro");
let btnAvanti = document.querySelector("#btnAvanti");

let cardCarousel = "";

function mostraSingoloFilm(indice){
    //prendo il film passando l'indice all'arry
    let singoloFilm = filmsDB[indice];

     cardCarousel = `<div id='cardSingola'> 
        <h4> ${singoloFilm.titolo} </h4> 
        <img src='${singoloFilm.locandina}' />
        <p>Regista: ${singoloFilm.regista}</p>
        <p>Anno: ${singoloFilm.anno} </p>
        <p>Genere: ${singoloFilm.genere}</p>
        Attori:
        <ul>`

        singoloFilm.attori.forEach(attore => {
            cardCarousel += `
            <li> ${attore} </li>
            `;
        });

        cardCarousel += "</ul></div>"

        boxCarosello.innerHTML = cardCarousel;
}

let contatore = 0;
function scorri(direzione){
    if(direzione == "prev"){
        if(contatore == 0){
            contatore = filmsDB.length - 1;
        }else{
            contatore--;
        }
    }else{
        if(contatore >= filmsDB.length - 1){
            contatore = 0;
        }else{
            contatore++;
        }
    }

    console.log(contatore);
    mostraSingoloFilm(contatore);
}

btnAvanti.addEventListener("click", ()=>{
    scorri("next");
});

btnIndietro.addEventListener("click", ()=>{
    scorri("prev");
})