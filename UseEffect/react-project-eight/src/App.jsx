import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount]=useState(0);
 
  useEffect(() =>{
    alert ("You Clicked Button")
  })

  function handleClick(params) {
    setCount(count+1)
  } 
  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App


