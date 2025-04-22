// Stampa i numeri da 1 a 100.
// Tutte le volte che incontri un numero divisibile per 3 stampa "BOOM"; 
// quando incontri un numero divisibile per 5 stampa "ZOOM"; 
// quando incontri un numero divisibile per 3 e 5 stampa "BANGARANG"

// for(let i = 1; i <= 100; i++){
    
//     if( i % 3 == 0 && i % 5 == 0){
//         console.log(i + " BANGARANG ");
//     }else if(i % 3 == 0){
//         console.log(i + " BOOM ");
//     }else if(i % 5 == 0){
//         console.log(i + " ZOOM");
//     }else{
//         console.log(i);
//     }
    
// }



for(let i = 1; i <= 100; i++){
    let stringa = "";

    if( i % 3 == 0 && i % 5 == 0){
        stringa += " BANGARANG ";
    }
    
    if(i % 3 == 0 && i % 5 != 0){
        stringa += " BOOM ";
    }
    
    if(i % 5 == 0 && i % 3 != 0){
     stringa  += " ZOOM";
    }
    
    console.log(i + stringa);
    
}
