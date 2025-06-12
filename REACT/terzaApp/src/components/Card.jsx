function Card({title, description, imgURL, isScelto}){
// inserisci isSelezionato con lo span

    if(title == undefined){
        title = "Questo è quello che metto quando manca il titolo"
    }

    return(
        <>
            <div className="card">
                <div className="card-image">
                    <img src={imgURL} alt="" />
                </div>

                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                {isScelto ? <span> Luogo selezionato</span> : <span> Luogo non selezionato </span>}

            </div>
        </>
    )
}

export default Card