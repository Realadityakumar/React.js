import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()*-+~`{}[]"

    for(let i =1;i<=length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
  setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  const passwordRef = useRef(null);

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {passwordGenerator();},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md rounder-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounder-lg overflow-hidden pb-4">
          <input type="" name="" id="" value={password} ref={passwordRef} className='
          outline-none w-full py-1 px-3 ' placeholder='Password' readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  onClick={copypasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} />
          <label >Length: {length}</label>
          <input type="checkbox" defaultChecked={numberAllowed} name="" id="numberInput" onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}/>
          <label >Numbers</label>
          <input type="checkbox" defaultChecked={charAllowed} name="" id="characterInput" onChange={() => {
            setCharAllowed((prev) => !prev);
          }}/>
          <label >Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
