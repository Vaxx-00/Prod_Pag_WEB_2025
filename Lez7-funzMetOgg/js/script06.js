let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

function calcolaArea(raggio){
    let areaCerchio = Math.PI * Math.pow(raggio, 2);
    return areaCerchio;
}
 
console.log(calcolaArea(6));//POSSO FARLO
//console.log(areaCerchio); //NON POSSO FARLO


function calcolaVolume(raggio){
    let volume = (4/3) * Math.PI * Math.pow(raggio, 3);
    return volume;
}



/**
 * prendiRaggio() legge il numero nel campo input e fa tutti i calcoli
*/
function prendiRaggio(){
    //il value è ciò che l'utente scrive nell'input
    let raggio = Number( document.getElementById("inputRaggio").value );

    if(raggio == 0 || raggio < 0){
        demo.innerHTML = "Amico user, stai inserendo dei valori non validi oppure non hai inserito nulla"
    }else{

        let area = calcolaArea(raggio).toFixed(3);  
        let volume = calcolaVolume(raggio);
        
        demo.innerHTML = `<p> L'area vale ${area} </p>
        <p> Il volume vale ${volume} </p>`
    }
}

//Adesso collego la funzione prediRaggio() al mio btn
//ATTENZIONE: questo è l'unico caso in cui richiamerò la funzione senza ()
btn.addEventListener("click", prendiRaggio);


//ESEMPIO op tern con funzioni
let accesa = true;

function spegni(){
    accesa = false;

}

function accendi(){
    accesa = true;
}

accesa ? spegni(): accendi();

// if(accesa){
//     spegni();
// }else{
//     accendi();
// }