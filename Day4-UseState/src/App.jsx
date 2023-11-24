

import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [writeInput, setWriteInput] = useState('Flávio da Mata')


  const add = () => {
   setCount(count+1)
   
  }

  
  const changeWriteInput = (event) => {
    setWriteInput(event.target.value)
  }
  

  return (
    <>
      <div className='App'>
        <h1> Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={add}>Add</button>
      <div>
        <input onChange={changeWriteInput}></input>
        </div>
        <h3>{writeInput}</h3>

      </div>
     
    </>
  )
}

export default App
