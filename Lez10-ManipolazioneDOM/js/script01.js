//QuerySelector("sintassiCSS")
//#id
//.class
//tagName

//ById
// let myBody = document.querySelector("#myBody");

//ByTagName
// let myBody = document.querySelector("body");

let myBody = document.querySelector(".dimBody");
console.log(myBody);
console.log(typeof myBody);

let demo = document.querySelector("#demo");
console.log(demo);

let par = document.querySelector("#par");
//vOGLIO LEggere il testo nel par

let testoPar = par.innerHTML; //legge e scrivi HTML e testo
console.log(testoPar);

let soloTestoPar = par.textContent //legge e scrive solo testo
console.log(soloTestoPar);


let miaLista = document.querySelector("#miaLista");
// miaLista.innerHTML = "<li> Pane </li>";
// miaLista.textContent += "<li> Birrra </li>"; //qui è inutile passargli un tag


//il querySelector restituisce SEMPRE LA PRIMA OCCORRENZA
let li = document.querySelector("li");
console.log(li);

//in questo modo prende tutti gli li esistenti e li piazza in una NODELIST (parente stretto dell'array)
let lis = document.querySelectorAll("li");
console.log(lis);
//Se voglio leggere il contenuto testuale dei miei li mi serve un ciclo FOR oppure FOREACH
// for(let i = 0; i < lis.length; i++){
//     console.log(lis[i].textContent);
// }

lis.forEach(li => {
    console.log(li.textContent);
});

console.log("SOLO COSE DELLA TODOLIST");

let lisTodos = document.querySelectorAll("#mieTodos li");
console.log(lisTodos);

lisTodos.forEach(li =>{
    console.log(li.textContent);
});



