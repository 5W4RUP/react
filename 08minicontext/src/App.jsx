import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context API!!!</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
