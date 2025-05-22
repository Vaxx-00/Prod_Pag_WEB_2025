let artCarrello = document.querySelector("#artCarrello");

function prendiArticoliCarrello(){
    let mieiArticoli = JSON.parse(localStorage.getItem("user Selezionato"));
    artCarrello.innerHTML = mieiArticoli.first_name + " " +mieiArticoli.last_name
}

document.addEventListener("DOMContentLoaded", prendiArticoliCarrello)