import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='main-container'>
    <Todo/>
   
   </div>
  )
}

export default App
