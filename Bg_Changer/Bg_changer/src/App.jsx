import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl"><button className='bg-red-500 outline-none rounded-3xl px-4 py-1 ' onClick={() => setColor("red")}>Red</button>
          <button className='bg-green-500 outline-none rounded-3xl px-4 py-1 ' onClick={() => setColor("green")}>Green</button>
          <button className='bg-yellow-500 outline-none rounded-3xl px-4 py-1' onClick={() => setColor("yellow")}>Yellow</button>
          </div>
        </div>
        
    </div>

  )
}

export default App
