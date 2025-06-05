// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css' //Questo è il css definito per questo component
import Navbar from './components/Navbar'

//APP è un Component
function App() {
  // const [count, setCount] = useState(1000)

  return (
    // Commento fuori dal frammento
    //Questo sotto si chiama Frammento
    <>  
    {/* Commento di jsx */}
    
    {/* Att: ricorda SEMPRE di verificare l'import in alto */}
    <Navbar></Navbar>
    <h1>Questa è la mia prima App in React, Ciao</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur perferendis placeat obcaecati quidem perspiciatis magnam fugit nesciunt exercitationem laudantium, accusamus, voluptate ducimus repellat officia nobis distinctio, itaque repellendus recusandae.</p>
       
    </>  
  )
}

//Export Necessario per poter renderizzare l'app dove mi pare
export default App
