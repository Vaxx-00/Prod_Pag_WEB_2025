import Link from "./Link";

import "./Navbar.css";

function Navbar(){
    //Qui parlo in JS
    //Inizializzo una variabile
    let miaVariabile = "Dario";
    // miaVariabile = "Laura";

    //Posso anche utilizzare gli oggetti
    let mioStyle = {
        height: "100px",
        width: "100px"
    }

    let x = 43;

    let myStyleDiv = {
        height: x >= 42? "420px": "100px"
    }



    return(
        <>
        <ul>
            {/* Uso la mia variabile */}
            <li><a href="#">{miaVariabile}</a></li>
            {/* Posso richiamare quante volte mi pare un component dentro l'altro */}
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><a href="#">Stai</a></li>
            <li><a href="#">Grazie</a></li>
        </ul>

        <hr />

        <h3>{miaVariabile == "Dario" ? "Ciao " + miaVariabile : "Non ti conosco"}</h3>
        
        <img style={mioStyle} src="/vite.svg" alt="" />
        <img style={myStyleDiv} src="/vite.svg" alt="" />
        
        {/*ATT: la parola class è vietata */}
        {/* <div className="stileDiv"></div> */}

        {/*Voglio aggiungere delle classi dinamicamente passando un'espressione jsx*/}

        <div className={`${x > 42 ? "rotated": "stileDiv"}`}></div>
        </>
    )
}

export default Navbar