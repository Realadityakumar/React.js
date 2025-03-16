import { useState } from 'react'
import './App.css'

function App() {
  
  const [currentClock,setCurrentClock] = useState(0);

  function startClock(){
    setInterval(() => {
      setCurrentClock(c => c+1);
    }, 1000);
  }
  return (
    <>
     {currentClock}
     <br />
     <button onClick={startClock}>start</button>
   
    </>
  )
}

export default App
