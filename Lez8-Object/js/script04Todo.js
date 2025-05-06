// function Todo(item, ora){
//     this.item = item;
//     this.ora = ora
// }

class Todo{
    constructor(item, ora){
        this.item = item;
        this.ora = ora;
    }

    stampa(){
        return this.item + " aggiunto alle " + this.ora;
    }
}

let listaTodos = [];

let btnAdd = document.getElementById("btnAdd");
let lista = document.getElementById("lista");


function addTodo(){
    let item = document.getElementById("item").value;

    if(item.trim() != ""){

        //adesso creo un nuovo oggetto di tipo Todo con item che è il value del campo input e adesso dichiarata nell'altro script
        let todo = new Todo(item, adesso);
    //inserisco ogni singolo oggetto all'interno dell'array

    if(listaTodos.length == 5){
        listaTodos.shift(); //elimina il primo elemento
    }
    
    listaTodos.push(todo);
    
    document.getElementById("feed").innerHTML = "";

    stampaLista();
    }else{
       document.getElementById("feed").innerHTML = "Amico, inserisci qualcosa"
    }
    
    //cancello il campo input
    document.getElementById("item").value = "";
}

function stampaLista(){

    lista.innerHTML = "";
    for(let i = 0 ; i < listaTodos.length; i++){
        lista.innerHTML += "<li>" + listaTodos[i].stampa() + "</li>";
    }
}


btnAdd.addEventListener("click", addTodo);

