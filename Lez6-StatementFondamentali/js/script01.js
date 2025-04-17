//ESEMPIO dei prof universitari

//PROFIO (cattivo) - per superare l'esame devo superare scritto e orale. Otterrò una media

let votoScritto1 = 25;
let votoOrale1 = 15;
let votoFinale1 = 0;

let esameProfio = document.getElementById("esameProfio");

if(votoScritto1 >= 18 && votoOrale1 >= 18){

    //console.log("Bravo, hai superato l'esame con Profio. Guarda che era tosta !!! \nVoto: " + votoFinale1);
    esameProfio.innerHTML = "Bravo, hai superato l'esame con Profio. Guarda che era tosta !!!";
   
    votoFinale1 = (votoScritto1 + votoOrale1) / 2;
    esamePier.innerHTML += "Voto Finale: " + votoFinale2;
}else{
    // console.log("Mi spiace, non hai superato l'esame !");
    esameProfio.innerHTML = "Mi spiace, non hai superato l'esame !"

    if (votoScritto1 < 18 && votoOrale1 < 18){
        esameProfio.innerHTML += "<br>Entrambi gli esami sono andati male: scritto " + votoScritto1 + " - orale: " + votoOrale1;
    }else if(votoScritto1 < 18 && votoOrale1 >= 18){
        esameProfio.innerHTML += "Lo scritto è andato male: <br>scritto " + votoScritto1 + "<br>orale " + votoOrale1
    }else{
        esameProfio.innerHTML += "L'esame orale è andato male: <br>scritto " + votoScritto1 + "<br>orale " + votoOrale1
    }
}

//Pierpier (buono) - Per superare l'esame mi basta passare o lo scritto o l'orale. Il voto finale sarà il maggiore tra i due

let votoScritto2 = 17;
let votoOrale2 = 20;
let votoFinale2 = 0; //var di supporto o di backup

let esamePier = document.getElementById("esamePier");

if(votoScritto2 >= 18 || votoOrale2 >= 18){
    if(votoScritto2 >= votoOrale2){
        votoFinale2 = votoScritto2
    }else{
        votoFinale2 = votoOrale2
    }
    
    console.log("Bravo hai passato l'esame con voto: " + votoFinale2);
    esamePier.innerHTML = "Bravo hai passato l'esame con voto: " + votoFinale2
}else{
    console.log("Mi spiace, non hai superato l'esame");
    esamePier.innerHTML = "Mi spiace, non hai superato l'esame"
}

