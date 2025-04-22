let i = 1;
let msg = "";

//il while fa parte dei cicli indefiniti. Ovvero quei cicli che "girano" finché la condizione è true
while(i <= 10){
    let risultato = i * 7;
    msg = `${i} x 7 = ${risultato}`; 
    console.log(msg);
    i++;
}

//Lucchetto 
//Hai un numero indefinito di tentativi per trovare il numero segreto (da 1 a 100)
const NUMERO_SEGRETO = 9;
let tentativo = 0;
let numTentativi = 0;

while(tentativo != NUMERO_SEGRETO){
    tentativo = prompt("Inserisci un numero per scoprire se si apre il lucchetto");

    numTentativi++;

    if(tentativo == NUMERO_SEGRETO){
        console.log("Bravo, hai aperto il lucchetto");
        break;
    }else if(tentativo < NUMERO_SEGRETO){
        console.log("Il numero segreto è più grande");
    }else{
        console.log("Il numero segreto è più piccolo");
    }
}

console.log(`Hai impiegato ${numTentativi} tentativi`);


///do-while : prima esegue qualcosa, poi la controlla
do{

    tentativo = prompt("Inserisci un numero");
    numTentativi++;

    if(tentativo == NUMERO_SEGRETO){
        console.log("Bravo, hai aperto il lucchetto");
        break;
    }else if(tentativo < NUMERO_SEGRETO){
        console.log("Il numero segreto è più grande");
    }else{
        console.log("Il numero segreto è più piccolo");
    }
}while(tentativo != NUMERO_SEGRETO)