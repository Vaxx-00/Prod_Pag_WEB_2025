import Card from './components/Card'
import './App.css'
import { useState } from 'react'


function App() {
 
  //contatore è la proprietà che identifica lo stato
  //setContatore è il metodo che modifica lo stato
  //useState è il metodo di react
  const [contatore, setContatore] = useState(0);

  function handleClick(event){
    console.log(event);    
    console.log(event.target);
  }

  function handleChange(event){
    console.log(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault(); 
    console.log(event);
  }
  
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
    },
     {
      id:3,
      title: "Città",
      isScelto: false,
      description: "Lo smog ad Agosto è un toccasana",
      imgURL: "https://picsum.photos/200?4"
    },
     {
      id:4,
      title: "Polo Nord",
      isScelto: false,
      description: "Fa un po' freddo néè?! ",
      imgURL: "https://picsum.photos/200?5"
    }
  ]

  return (
    <>
    <div className="card-container">
      {/* <Card
      title = {luoghi[0].title}
      description = "Com'è bello questo mare!!"
      imgURL = "https://picsum.photos/200?2">
      </Card> */}

      {/* Uso il metodo map di JS per poter renderizzare gli array. ATT: utilizzerò la parola chiave key per stabilire un'assegnazione univoca con gli oggetti */}

      { luoghi.map(luogo => (
        <Card
        key={luogo.id}
        title={luogo.title}
        description={luogo.description}
        imgURL={luogo.imgURL}
        ></Card>
      )) }

      </div>

      <h3>
        Mete scelte per le tue vacanze
      </h3>
      
      <div className="card-container">
      {
      luoghi.filter(luogo => luogo.isScelto)
      .map(luogo => (
        <Card
        key={luogo.id}
        title={luogo.title}
        imgURL={luogo.imgURL}
        description={luogo.description} 
        >

        </Card>
      )) 
    }
    </div>

    <hr />

    <h2>Gestiamo qualche evento</h2>

{/* Gestisco con funzione anonima e controllo lo state */}
    <button style={{color: 'white', fontSize: '50px'}} onClick={()=>{
      console.log("Ciao dal click");
      setContatore((contatore) => contatore + 1)
    }}>
      Cliccami che il contatore vale {contatore}
    </button>

{/* Gestisco con una function definita */}
    
    <button style={{color: 'white', fontSize: '50px'}} onClick={handleClick}>
      Cliccami adesso
    </button>
    
    {/* Gestisco il change con un campo input  */}
    
    <br />
    <div className='m5'>
        <input type="text" onChange={handleChange}/>
    </div>

    <br />
    
    <div className="m5">
      <form onSubmit={handleSubmit}>
        <button type='submit'>Sub</button>
      </form>
    </div>


    </>
  )
}

export default App
