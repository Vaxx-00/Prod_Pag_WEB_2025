import { useState } from "react"

//idea: passare un nuovo dato al parent attraverso dei "PROPS AL CONTRARIO"
function CardForm({addLuogo}){

    // const handleClick = () => {
    //     const luogo = {
    //         id: 3,
    //         title: "Montagna",
    //         isScelto: false,
    //         description: "La montagna bassa",
    //         imgURL: "https://picsum.photos/200?4"
    //     };
    //     addLuogo(luogo); 
    // }

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgURL: "",
        isScelto: false
    });

    const handleInputChange = (event) =>{
        // const title = event.target.value;
        const {name, value, type, checked } = event.target;
        const inputValue = type == 'checkbox' ? checked: value;

        setFormData({
            ...formData,
            [name]: inputValue
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault(); //SEMPRE

        const luogo = {
            id: Math.random(),
            title: formData.title,
            description: formData.description,
            imgURL: formData.imgURL,
            isScelto: formData.isScelto
        };

        addLuogo(luogo);

    }

    return(
        // <div className="cardForm">
        //     <h3>Aggiungi un luogo</h3>
        //     <input type="text" placeholder="titolo" /><br />
        //     <input type="text" placeholder="descrizione" /><br />
        //     <input type="text" placeholder="immagine URL"/><br />
        //     <button onClick={handleClick}> Aggiungi Luogo</button>
        // </div>

        <div className="cardForm">

            <form onSubmit={handleSubmit}>
                <h3>Aggiungi Veramente</h3>
                <div>
                    <input type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <input type="text" 
                    name="description" 
                    value={formData.description}
                    onChange={handleInputChange} />
                </div>
                <div>
                    <input type="text"
                    name="imgURL"
                    value={formData.imgURL}
                    onChange={handleInputChange}/>
                </div>

                <div>
                    <label>Scelto</label>
                    <input type="checkbox" 
                    name="isScelto"
                    checked = {formData.isScelto}
                    onChange={handleInputChange} />
                </div>
                <div>
                    <button type="submit">Aggiungi</button>
                </div>

            </form>
        </div>
    )
}

export default CardForm