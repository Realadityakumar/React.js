import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>React padlo guys</h1>
      <Login />
      <Profile />
      </UserContextProvider>
      
  )
}

export default App
