//Ho un sacchetto con 90 numeri 
//devo estrarne 10. Att: i numeri estratti non devono ripetersi 
//ATT: non scrivere un array con 90 numeri

//1 soluzione con for
//1 soluzione con while
//1 soluzione solo con for senza if

let numeriEstratti = [];
let tentativi = 0;

for(let i = 0 ; i < 20; i++){
    let numEstratto = Math.ceil(Math.random() * 90);
    if(numeriEstratti.includes(numEstratto)){
        i--; //fai un altro giro
    }else{
        numeriEstratti.push(numEstratto);
    }
    tentativi++;
}

console.log(numeriEstratti);
console.log(tentativi);
