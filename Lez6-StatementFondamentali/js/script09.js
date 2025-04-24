//Ho un sacchetto con 90 numeri 
//devo estrarne 10. Att: i numeri estratti non devono ripetersi 
//ATT: non scrivere un array con 90 numeri

//1 soluzione con for
//1 soluzione con while
//1 soluzione con solo 2 for e 1 if innestato
//1 soluzione solo con for senza if ma con un array da 90 numeri (splice)

// let numeriEstratti = [];
// let tentativi = 0;
// let nomeUser = "paolino";
// let passUser = "stellina96";

// if(nomeUser == "paolino" && passUser == "stellina96"){
//     let numDaEstrarre = 50;
//     if(numDaEstrarre <= 90){
//         for(let i = 1 ; i <= numDaEstrarre; i++){
//             let numEstratto = Math.floor(Math.random() * 90);
//             if(numeriEstratti.includes(numEstratto)){
//                 i--; //fai un altro giro
//             }else{
//                 numeriEstratti.push(numEstratto);
//             }
//             tentativi++;
//         }
//     }else{
//         console.log("Pensavi di fregarmi estraendo più di 90 numeri ? ");
        
//     }
// }else{
//     console.log("Mi spiace ma non ti conosco");
    
// }
    
// console.log(numeriEstratti);
// console.log("Tentativi eseguiti: " + tentativi);

// let numeriEstratti = [];
// let giri = 0;

// while(numeriEstratti.length < 90){
//     let numEstratto = Math.ceil(Math.random() * 90);
//     if(!numeriEstratti.includes(numEstratto)){
//         numeriEstratti.push(numEstratto);  
//     }
//     giri++;
// }

// console.log(numeriEstratti);
// console.log("Giri eseguiti: " + giri);

//SOLUZIONE CON 2 FOR

// let numeriEstratti = [];
// let giri = 0;

// for(let i = 0; i < 12; i++){
//     let numEstratto = Math.ceil(Math.random() * 90);
//     //il for sotto legge l'array, l'if controlla numero per numero
//     //sto traducendo il metodo includes() con un for e un if
//     for(let j = 0; j < numeriEstratti.length; j++){
//         if(numeriEstratti[j] == numEstratto){
//             continue;
//         }
//     }
//     numeriEstratti.push(numEstratto);
// }
// console.log(numeriEstratti);


let listaNumeri = [];
console.log(listaNumeri.splice(1,listaNumeri.length-1));
let numeriEstratti = [];
let giri = 0;

//vado a riempire la mia lista numeri con 90 numeri
for(let i = 0; i < 90; i++){
    listaNumeri.push(i + 1);
    // listaNumeri[i] = i+1;
}
console.log(listaNumeri);

//for per estrarre
for(let i = 0 ; i < 20; i++){
    let indice = Math.floor(Math.random() * listaNumeri.length); //estrae un indice
    //adesso inserisco il numero posizionato sull'indice estratto
    numeriEstratti.push(listaNumeri[indice]);
    listaNumeri.splice(indice, 1);
    giri++;
}

console.log(numeriEstratti);
console.log(giri);





