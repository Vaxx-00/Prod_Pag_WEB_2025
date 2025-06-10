// //Primo modo per utilizzare i props
// function Card(props){

//     //definisco delle proprietà
//     const title = props.title;
//     const description = props.description
//     const imgURL = props.imgURL;

//     return(
//         <>
//             <div className="card">
//                 <div className="card-image">
//                     <img src={imgURL} alt="" />
//                 </div>

//                 <div>
//                     <h2>{title}</h2>
//                     <p>{description}</p>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Card

//Secondo modo per utilizzare i props
function Card({title, description, imgURL}){

    //In questo caso non ho più necessità di definire le proprietà 
   // const title = props.title;
    // const description = props.description
    // const imgURL = props.imgURL;
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

            </div>
        </>
    )
}

export default Card