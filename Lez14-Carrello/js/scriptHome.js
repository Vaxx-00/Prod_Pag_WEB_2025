class Prodotto{
    constructor(nome, prezzo, immagine, descrizione, disponibilita){
        this.nome = nome;
        this.prezzo = prezzo;
        this.immagine = immagine;
        this.descrizione = descrizione;
        this.disponibilita = disponibilita;
    }
}

//Appena atterro sulla home devo leggere i prodotti
let showroom = document.querySelector("#showroom");

//Questa funzione si occuperà di eseguire la fetch
function mostraProdotti(){
    //endpoint
    const URL = "http://localhost:3000/prodotti";

    fetch(URL)
    .then(data =>{
        return data.json();
    })
    .then(response =>{
        console.log(response);
        let prodotti = response;
        prodotti.forEach(prodotto => {
            showroom.appendChild(creaCard(prodotto));
        });
    })
}

document.addEventListener("DOMContentLoaded", mostraProdotti);

//Questa funzione crea la singola card
/**
 * @param {Prodotto} prodotto 
 */
function creaCard(prodotto){
    let col = document.createElement("div");
    col.setAttribute("class", "col-4");

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", prodotto.immagine); 

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let title = document.createElement("h3");
    title.setAttribute("class", "card-title");
    title.textContent = prodotto.nome;

    let descr = document.createElement("p");
    descr.setAttribute("class", "card-text");
    descr.textContent = prodotto.descrizione;

    let prezzo = document.createElement("p");
    prezzo.setAttribute("class", "card-text");
    prezzo.textContent = "Prezzo: €" + prodotto.prezzo;

    let disp = document.createElement("p");
    disp.setAttribute("class", "card-text");
    disp.textContent = "Disponibilità: " + prodotto.disponibilita;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary bi bi-cart");

    
    if(!prodotto.disponibilita){
        btn.setAttribute("disabled", true);
    }

    btn.addEventListener("click",  function(){
        try {
            postInCarrello(prodotto);    
        } catch (error) {
            console.log(error);
            
        }finally{

        }
        // prezzo.innerHTML = "..sto aggiungendo al carrello";  
        // setTimeout(() => {
        //     prezzo.textContent = "Prezzo: €" + prodotto.prezzo;
        // }, 2000);   
        
        btn.classList.remove("bi");
        btn.classList.remove("bi-cart");
        btn.textContent = "Sto aggiungendo al carrello";

        setTimeout(() => {
            btn.classList.add("bi");
            btn.classList.add("bi-cart");
            btn.textContent = "";
        }, 2000);
     });

    col.appendChild(card);
    card.appendChild(cardImg);
    
    cardBody.appendChild(title)
    cardBody.appendChild(descr)
    cardBody.appendChild(prezzo)
    cardBody.appendChild(disp);
    cardBody.append(btn);

    card.appendChild(cardBody);

    return col;
}


// function postInCarrello(prodotto){
//     const URL = "http://localhost:3000/carrello";
//     fetch(URL, {
//         method: "POST",
//         headers:{
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(prodotto)
//     })
//     .then(data =>{
//         console.log("prodotto aggiunto", data);
//     })  
// }


//Con Async Await
async function postInCarrello(prodotto) {
    const response = await fetch("http://localhost:3000/carrello", {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(prodotto)
    })

    const data = await response.json();
    console.log("prodotto aggiunto", data);

}
