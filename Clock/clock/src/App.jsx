import { useState,useRef } from 'react'
import './App.css'

function App() {
  
  const [currentClock,setCurrentClock] = useState(0);
  const timer = useRef(0); // we use useref just to presist re render 
  function startClock(){
    let value = setInterval(() => {
     setCurrentClock(c => c+1);
    }, 1000);
    timer.current = value;
  }
  function stopClock(){
    clearInterval(timer.current);
  }
  return (
    <>
     {currentClock}
     <br />
     <button onClick={startClock}>start</button>
    <button onClick={stopClock}>stop</button>
    </>
  )
}

export default App
