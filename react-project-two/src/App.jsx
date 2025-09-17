import UsreCard from "./components/UsreCard"
import ironman from "./assets/ironman.jpg"
import thor from "./assets/thor.jpg"
import pool from "./assets/pool.jpeg"

function App() {


  return (
    
      <div className="container">
        <UsreCard name="Ironman" desc="desc1" image={ironman} style={{"border-radius":"10px"}}/>
        <UsreCard name="Thor" desc="desc2" image={thor} style={{"border-radius":"10px"}}/>
        <UsreCard name="DeadPool" desc="desc3" image={pool} style={{"border-radius":"10px"}}/>
        
       
      </div>
    
  )
}

export default App
