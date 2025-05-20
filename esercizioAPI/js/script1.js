function creaCard(persona){
    //` ALT + 96
    let col = document.createElement("div");
    col.setAttribute("class", "col-4 mt-4");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let btnCambiaFoto = document.createElement("button");
    btnCambiaFoto.setAttribute("class", "btn btn-primary");
    btnCambiaFoto.textContent = "Cambia Foto";
    
    
    let img = document.createElement("img");
    img.setAttribute("class", "img-fluid rounded-top");
    img.setAttribute("src", persona.avatar);
    
    btnCambiaFoto.addEventListener("click", () => {
        setTimeout(() => {
            rigaPersone.removeChild(col);
        }, 2000);
        img.setAttribute("src", "./img/sddefault.jpg");      
    })

    let cardTitle = document.createElement("h3");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = persona.first_name + " " + persona.last_name;

    let info = document.createElement("div");
    info.innerHTML = `
    <p class="card-text">Info:</p>
    <ul>
    <li>Tel: 000000000</li>
    <li>Email: ${persona.email}</li>
    <li>Addr: Via Carlo Alberto 22</li>
    </ul>`
    
    cardBody.appendChild(img);
    cardBody.appendChild(cardTitle);                    
    cardBody.appendChild(info);
    cardBody.appendChild(btnCambiaFoto);
    card.appendChild(cardBody);
    col.appendChild(card);
 
    return col;
}

let rigaPersone = document.querySelector("#rigaPersone");

function recuperaDati(){
    // const URL = "https://reqres.in/api/users?page=2";
    const  URL = "http://localhost:3000/users"
    
    fetch(URL, {
        method: "GET",
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    .then(data =>{
        if(data.status == 404){
            location.href = "https://www.immaginazioneelavoro.it";
        }
        console.log(data.status);
        return data.json();
    })
    .then(response => {
        //data è la prop dell'oggetto response che contiene l'array di persone
        console.log(JSON.stringify(response));
        // let persone = response.data;
        let persone = response; //in questo caso ricevo direttamente un array di oggetti

        for(let i = 0; i < persone.length; i++){
            rigaPersone.appendChild(creaCard(persone[i]));
        }
    })
    // .finally(
    //     // setInterval(() => {
    //     //     location.href = "https://www.immaginazioneelavoro.it"
    //     // }, 3000)
    // )
}

document.addEventListener("DOMContentLoaded", recuperaDati);

//usare il querySelectorAll per cambiare sfondo a tutte le card