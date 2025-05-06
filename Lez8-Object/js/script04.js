//Date
let oggi = new Date();
console.log(oggi);

let est = new Date("May 06, 2015, 17:57:00");

let diff = oggi.getFullYear() - est.getFullYear();
console.log("sono trascorsi: " + diff + "anni");


let demo = document.getElementById("demo");
//Set Interval. Permette di ripetere una funzione ogni tot di ms

let adesso = "";

//Orologio Digitale
setInterval(()=>{

    let oraEsatta = new Date();
    let ora = (oraEsatta.getHours() < 10 ? '0': '') + oraEsatta.getHours();
    let min = (oraEsatta.getMinutes() < 10 ? '0': '') + oraEsatta.getMinutes();
    let sec = (oraEsatta.getSeconds() < 10 ? '0': '') +oraEsatta.getSeconds();
    
    demo.innerHTML = "<h2>"+ ora + ":" + min + ":" + sec + "</h2>";

    adesso = ora + ":" + min + ":" + sec;

}, 1000)




