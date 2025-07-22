let listaProdCarrello = document.querySelector("#listaProdCarrello");

function scaricaDatiCarrello(){
    const URL = "http://localhost:3000/carrello";
    fetch(URL)
    .then(data =>{
        return data.json()
    })
    .then(response=>{
        console.log("Nel mio carrello ci sono i seguenti prodotti", response);
        response.forEach(prod => {
            let listItem = document.createElement("li");
            listItem.setAttribute("class", "list-group-item");
            listItem.textContent = prod.nome + " " + prod.prezzo + " € ";
            
            let img = document.createElement("img");
            img.setAttribute("src", prod.immagine);
            img.setAttribute("style", "width: 50px");

            listItem.appendChild(img);

            listaProdCarrello.appendChild(listItem);
            listItem.addEventListener("click", function(){
                console.log(prod.id);
                location.href = `singoloProdotto.html?id=${prod.id}`;
                
            })
        });
    })
}

document.addEventListener("DOMContentLoaded", scaricaDatiCarrello);