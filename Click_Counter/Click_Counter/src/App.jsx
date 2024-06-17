import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
 // let counter = 15

  const addValue = () => {
    console.log("clicked",Math.random(), counter);
    setCounter(counter + 1);
  }
  const subValue = () => {
    console.log("clicked",Math.random(), counter);
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
