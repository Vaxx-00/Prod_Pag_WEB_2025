
//idea: passare un nuovo dato al parent attraverso dei "PROPS AL CONTRARIO"
function CardForm({addLuogoChild}){

    const handleClick = () => {
        const luogo = {
            id: 3,
            title: "Montagna",
            isScelto: false,
            description: "La montagna bassa",
            imgURL: "https://picsum.photos/200?4"
        };
        addLuogoChild(luogo); 
    }

    return(
        <div className="cardForm">
            <h3>Aggiungi un luogo</h3>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={handleClick}> Aggiungi Luogo</button>
        </div>
    )
}

export default CardForm