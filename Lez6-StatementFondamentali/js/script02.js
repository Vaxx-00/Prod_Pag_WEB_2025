//Ho un solo numero. Voglio capire se questo numero è multiplo di 3 o un multiplo di 5 o un multiplo di 3 e 5 

let numero = 7;

//  % cioè il resto della divisione
//console.log(numero % 3); //0

if(numero % 3 == 0 && numero % 5 == 0){
    console.log("Il numero " + numero + " è divisibile per 3 e 5 ");
}else if(numero % 3 == 0){
    console.log("Il numero " + numero + " è divisibile solo per 3");
}else if(numero % 5 == 0){
    console.log("Il numero " + numero + " è divisibile solo per 5");    
}else{
    console.log("Il numero non è divisibile né per 3 né per 5 né per entrambi");
}

////////CLUB Javascript, solo per veri programmatori (invitati)

let invito = false;
let eta = 18;

if(eta >= 18 && invito){
    console.log("Benvenuto, puoi entrare!");
}else if(eta < 18 && invito){
    console.log("Mi spiace, sei troppo piccolo anche se hai l'invito");
}
//       30 >= 18    false == false oppure !(false)
//         TRUE        TRUE
else if(eta >= 18 && !invito){
    console.log("Mi spiace, non hai un invito");
}else{
    console.log("Torna tra qualche anno con un invito!");
}

// True == True ---> True
// False == True ---> False

//OPERATORE TERNARIO - funziona quando la condizione è binaria, cioè o true o false
//condizione ? esegui se true: esegui se false

let pioggia = false;

let msg = pioggia ? "Porta un ombrello": "Non portare l'ombrello";
console.log(msg);

let msg2 = !pioggia ? "Non portare l'ombrello" : "porta l'ombrello";
console.log(msg2);

