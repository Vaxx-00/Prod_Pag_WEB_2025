import Card from './components/Card'
import './App.css'

function App() {
  const luoghi = [
    {
      id:0,
      title: "Mare",
      description: "crfyguhbijkl",
      imgURL: "xdrtcfghbjk"
    }
  ]

  return (
    <>
    <div className="card-container">
      <Card
      title = {luoghi[0].title}
      description = "Com'è bello questo mare!!"
      imgURL = "https://picsum.photos/200?2">
      </Card>

      <Card
      title = "Montagna"
      description = "Com'è bella questa montagna"
      imgURL = "https://picsum.photos/200?1"></Card>
      
      <Card
      title = "Lago"
      description = "Com'è bello questo lago!!"
      imgURL = "https://picsum.photos/200?3"></Card>
      
      <Card
      title = "Città"
      description = "Com'è bella questa città!!"
      imgURL = "https://picsum.photos/200?4"></Card>
    </div>
    </>
  )
}

export default App
