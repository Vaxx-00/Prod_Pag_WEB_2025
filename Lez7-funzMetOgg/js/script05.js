function calcolaArea(base, altezza){
    let area = base * altezza;

    console.log(`Base: ${base} - Altezza: ${altezza}`);

    console.log(`L'area vale: ${area}`);

    //con questa parola chiave "return" mi faccio restituire il valore della variabile area. Se una funzione mi restituisce un valore dovrò raccoglierlo da qualche parte
    return area;
}

calcolaArea(4,6);

function calcolaVolume(base, altezza, profondita){

    //let volume = base * altezza * profondita;
    
    //salvo il valore di restituzione della funzione calcolaArea all'intreno della variabile miaArea
    let miaArea = calcolaArea(base, altezza);
    let volume = miaArea * profondita;

    console.log(`Il volume vale: ${volume}` );

}

calcolaVolume(4,6,8);


function calcolaVolume2(area, profondita){
    let volume = area * profondita;
    console.log(`Il volume2 vale ${volume}`);
}

let area = calcolaArea(5,6);

calcolaVolume2(area, 9);

calcolaVolume2(calcolaArea(7,8), 9);
