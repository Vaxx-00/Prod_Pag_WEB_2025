//A che serve un for ?
//Il for serve a eseguire più volte le stesse operazioni. Crea dei cicli
// i++ ----> i = i + 1
//SINTASSI: 
/**    inizializzazione    condizione       aggiornamento
 * for(let i = 0         ; i < limite   ;   i++            ){
 * 
 * }
 */

for(let i = 0; i < 3 ; i++){
    console.log("Ciao Dario. La i vale: " + i);
}

//1° Giro: i = 0 ; 0 < 3 (True); 1 ----> {i vale 0}
//2° Giro: i = 1 ; 1 < 3 (True); 2 ----> {i vale 1}
//3° Giro: i = 2 ; 2 < 3 (True); 3 ----> {i vale 2}
//4° Giro: i = 3 ; 3 < 3 (FALSE) XXXX

for(let i = 1; i <= 10; i++){
    console.log("la i vale: " + i);
}

//ciclo for al contrario
for(let i = 10; i >= 1; i--){
    let mionome = "Dario"
    console.log("Ciao" + mionome +"la i vale: " + i);
}

//               0         1       2       3       4
let colori = ["rosso", "giallo", "blu", "rosa", "verde" ];
let frutti = ["ciliegia", "banana", "mirtillo", "pompelmo", "mela"]
// console.log(colori[2]);

//se devo leggere i valori di un array utilizzo un ciclo for
//                      5
for(let i = 0; i < colori.length; i++){
    console.log("indice i: " + i + " - colore : " + colori[i]);
    console.log(frutti[i]);
}

//console.log[0]
//console.log[1]
//console.log[2]
//console.log[3]
//console.log[4]
//XXXXXXX

for(let i = frutti.length - 1; i >= 0; i--){
    console.log(frutti[i]);
}