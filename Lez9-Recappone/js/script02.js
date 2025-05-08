class Pokemon{
    constructor(id, nome, tipo, abilita, IV, genere, evoluzione){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.abilita = abilita;
        this.IV = IV;
        this.genere = genere;
        this.evoluzione = evoluzione;
    }
}

let mioPoke = new Pokemon(1, "Bulbasaur", "Erba", "Erbaiuto", 23, "maschio", "Ivysaur");

let pokedex = [
    new Pokemon(4, "Charmander", "Fuoco", "Fuocoaiuto", 9, "femmina", "Charmeleon"),
    new Pokemon(25, "Pikachu", "Elettro", "Statico", 10, "femmina", "Raichu"),
    new Pokemon(132, "Ditto", "Normale", "Sosia", 21, undefined, null),
    new Pokemon(151, "Mew", "Psico", "Sincronismo", 31, undefined, null),
    new Pokemon(145, "Zapdos","Elettro", "Parafulmine", 28, undefined, null)
];

//inserisco Bulbasaur nel pokedex
pokedex.push(mioPoke);

//Con questa funzione filtro per genere
function filtraPerGenere(genere){
    // ()=>{} si chiama funzione anonima
    //filter restituisce un altro array sulla base di una funzione di callback anonima che valuta un boolean
    let pokemonFiltrati = pokedex.filter(pokemons => pokemons.genere == genere);
    console.log(pokemonFiltrati);

    // let pokeFiltr = [];
    // for(let i = 0; i < pokedex.length; i++){
    //     if(pokedex[i].genere == genere){
    //         pokeFiltr.push(pokedex[i]);
    //     }
    // }
    // console.log(pokeFiltr);
}

filtraPerGenere("maschio");

let filtro = document.getElementById("filtro");
let demo = document.getElementById("demo");
let btn = document.getElementById("btn");


function filtraPerTipo(tipo){ //tipo è il value di filtro (HTML Object)
    let pokemonsFiltrati = pokedex.filter(pokemons => pokemons.tipo == tipo);
    return pokemonsFiltrati; //Questo è un array di oggetti di tipo Pokemon
}

function stampaPokemon(){
    demo.innerHTML = "";
    //1. vado a prendere il value del filtro
    let tipo = filtro.value.charAt(0).toLocaleUpperCase() + filtro.value.substring(1);
    console.log(tipo);
    
    if(tipo == "Tutti"){
        pokedex.forEach(poke =>{
            demo.innerHTML += `<li> ${poke.nome} - ${poke.tipo} </li>`;
        })
    }else if(tipo == ""){
        demo.innerHTML = "Non hai selezionato nessun tipo";
    }else{
        let pokemonsFiltrati = filtraPerTipo(tipo);
        
        pokemonsFiltrati.forEach(poke =>{
            demo.innerHTML += `<li>${poke.nome} ${poke.tipo}</li>`;
        });
    }
    // for(let i = 0; i < pokemonsFiltrati.length; i++){
    //     demo.innerHTML += `<li> ${pokemonsFiltrati[i].nome} </li>`;
    // }
}

btn.addEventListener("click", stampaPokemon);

//JSON (JavaScript Object Notation)
//trasformo un array di oggetti in stringhe, ovvero in JSON
let pokedexJSON = JSON.stringify(pokedex);
console.log(pokedexJSON);
console.log(pokedex);
