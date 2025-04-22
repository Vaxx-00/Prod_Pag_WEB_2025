//Oggetto Math e suoi metodi 
//Math.random() produce un numero casuale tra 0 e 1
let numRandom = Math.random() * 10;
console.log(numRandom);

//Math.ceil() e Math.floor()
//ceil() arrotonda all'intero superiore 2.1 --> 3
//floor() arrotonda all'intero inferiore 2.1 ---> 2

let mioNum = 5.9;
console.log(Math.ceil(mioNum));
console.log(Math.floor(mioNum));

//se volessi ottenere un numero casuale tra 1 e 10
let numCasuale = Math.ceil( Math.random() * 10 );
console.log(numCasuale);

//Se volessi ottenere un numero casuale tra 15 e 25
let numCasuale2 = Math.ceil(Math.random() * 10) + 14;
console.log(numCasuale2);

//ABS valore assolute
let a = Math.abs(-9);
console.log(a); //9


//radice
let b = 64;
let radB = Math.sqrt(b);

console.log(radB);

//Potenza
let c = 5;
let powC = Math.pow(c, 3);
console.log(powC);

//Round - arrotonda in modo classico 
let d = 12.49;
let rD = Math.round(d); //12
console.log(rD);

let e = 12.5;
let rE = Math.round(e); //13
console.log(rE);


const PI = Math.PI;
console.log(PI);



