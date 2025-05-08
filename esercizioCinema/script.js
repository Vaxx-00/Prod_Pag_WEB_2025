
let nomi = ["Dario", "Andrea", "Massimo", "Barbara"];
console.log("Array originale:", nomi);


function ordinaAlfabeticamente(array) {
  
  let risultato = [];
  for (let i = 0; i < array.length; i++) {
    risultato[i] = array[i];
  }

  //Questo fa l'ordinamento
  for (let i = 0; i < risultato.length; i++) {
    for (let j = 0; j < risultato.length - 1 - i; j++) {
      // Confronto le stringhe
      if (risultato[j] > risultato[j + 1]) {
        // Scambio gli elementi
        let temporanea = risultato[j];
        risultato[j] = risultato[j + 1];
        risultato[j + 1] = temporanea;
      }
    }
  }
  
  return risultato;
}

let nomiOrdinati = ordinaAlfabeticamente(nomi);
console.log("Array ordinato:", nomiOrdinati);
