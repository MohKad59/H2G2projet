import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardShop from './components/cardShop/cardShop/CardShop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardShop />
    </>
  )
}

export default App
