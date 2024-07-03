import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import Footer from './components/footer/footer'
import  Header  from './components/header/header'

function App() {
const [loading, setLoading] = useState(true)
const dispacth = useDispatch()
useEffect(() => {
  authService.getCurrentUser().then((userData) => {
    if(userData){
      dispacth(login({userData}))
    }else{
      dispacth(logout())
    }
  }).finally(() => setLoading(false))
},[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-800'>
      <div className="w-full block">
        <Header/>
        <main>
          {/*<outlet/>*/}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
