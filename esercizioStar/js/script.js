let riga = ""

for(let i = 1; i <= 5; i++){
    for(let j = 1; j < i; j++){
        riga += "*";
    }   
    console.log(riga);
    riga = "";
}

