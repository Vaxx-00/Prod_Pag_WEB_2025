import './App.css'
import CardForm from './components/CardForm'


function App() {
  const luoghi = [
    {
      id:0,
      title: "Mare",
      isScelto: true,
      description: "Com'è bello questo mare",
      imgURL: "https://picsum.photos/200?2"
    },
     {
      id:1,
      title: "Lago",
      isScelto: false,
      description: "Com'è bello questo lago",
      imgURL: "https://picsum.photos/200?1"
    },
     {
      id:2,
      title: "Montagna",
      isScelto: true,
      description: "La montagna della montagna",
      imgURL: "https://picsum.photos/200?3"
    }
  ];

  //STEP 1. creo una funzione per aggiungere un nuovo  luogo
  //Step 2. Questa funz verrà però utilizzata dal Child usando il principio dei props
  let addLuogoParent = (nuovoLuogo)=>{
    luoghi.push(nuovoLuogo)
    console.log(luoghi);

  }
  //addLuogoParent chiamasi variabile funzionale

  return (
    <>
     <div className="card-container">
      {/* In questo div inserisco il form per l'aggiunta di un luogo */}
                {/*riferimentoDelPropNelChild = {riferimentoParent}  */}
        <CardForm 
          addLuogoChild={addLuogoParent}>

        </CardForm>
     </div>
    </>
  )
}

export default App
