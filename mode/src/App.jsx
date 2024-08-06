import { useState } from 'react'

import './App.css'
import Color from './Components/Color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Color/>
    </>
  )
}

export default App
