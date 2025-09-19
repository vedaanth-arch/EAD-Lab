import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './assets/comp1/Hello.jsx'
import Counter from './assets/comp1/counter.jsx'
import Greeting from './assets/comp1/GreetingP.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><>
    <Greeting name="Alice" />
      <Hello />
    </><Counter /></>
  )
}

export default App;
