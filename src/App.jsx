import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaStar } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green'>Hello Developer</h1>
    </>
  )
}

export default App
