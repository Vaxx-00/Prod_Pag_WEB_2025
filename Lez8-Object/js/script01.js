//Gli oggetti mi permetto di descrivere delle entità presenti nel mondo reale. Questa descrizione avviene attravero le prop, i suoi comportamenti sono delineati attraverso i metodi


//Oggetto notazione letterale
let studente = {
    //Proprietà. Principio [key: value]
    //nomeProp: valore
    nome: "Giangi",
    cognome: "Giangio",
    eta: 25,
    presenza: true,

    //Metodo
    saluta: function(){
        //il this fa riferimento all'oggetto contenitore, cioè a studente
        // console.log(`Ciao mi chiamo ${this.nome} ${this.cognome}`); 
        let saluto = `Ciao mi chiamo ${this.nome} ${this.cognome}`
        return saluto;
    },

    //L'overload in JS non esiste

    salutaQualcuno: function(nome){
        let saluto = "";
        if(nome != null){
            saluto = `Ciao ${nome}, io mi chiamo ${this.nome}`; 
        }else{
            saluto = `Ciao non ricordo il tuo nome, io mi chiamo ${this.nome}`;
        }
        return saluto;
    },

/** JSDOC: servono alla documentazione ufficiale e per avere i suggerimenti. Non implicano nessun contratto col programmatore
 * @param {String[]} listaNomi 
 * @returns msgSaluto
 */
    salutaTutti: function(listaNomi){
        let msgSaluto = "";
        listaNomi.forEach(nome =>{
            msgSaluto += `<p> Ciao ${nome} </p>`
        })
        return msgSaluto;
    }

}

//leggo una o più prop utilizzando la notazione .

console.log(studente.nome);
console.log(studente.cognome);
console.log(studente.eta);
console.log(studente.presenza);

console.log(studente.saluta());
let demo = document.getElementById("demo");

demo.innerHTML = studente.saluta();

// demo.innerHTML += "<p>" + studente.salutaQualcuno("Anna") + "</p>";

//Saluto un array di nomi
let personeDaSalutare = ["Anna", "Luisa", "Pasquale", "Giovanni"];

for(let i = 0; i < personeDaSalutare.length; i++){
    demo.innerHTML += "<p>" + studente.salutaQualcuno(personeDaSalutare[i]) + "</p>"
}

demo.innerHTML += "<p>" + studente.salutaQualcuno() + "</p>";

demo.innerHTML += studente.salutaTutti(personeDaSalutare);