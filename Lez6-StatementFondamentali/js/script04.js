//Esercizio If
// 00 - 06 (buonmattino)
// 06 - 12 (buongiorno)
// 12 - 18 (buon pomeriggio)
// 18 - 24 (buonasera)

let oraEsatta = document.getElementById("oraEsatta");
let salutoOrario = document.getElementById("salutoOrario");

let oraDelGiorno = 0;
let saluto = "";

if(oraDelGiorno >= 0 && oraDelGiorno < 6){
    saluto = "buon mattino";
}else if(oraDelGiorno >= 6 && oraDelGiorno < 12){
    saluto = "buongiorno";
}else if(oraDelGiorno >= 12 && oraDelGiorno < 18){
    saluto = "buon pomeriggio";
}else if(oraDelGiorno >= 18 && oraDelGiorno <= 24){
    saluto = "buonanotte";
}else{
    saluto = "dato non comprensibile";
}

console.log(saluto);
oraEsatta.innerHTML = "Sono le ore " + oraDelGiorno;
salutoOrario.innerHTML = saluto;

