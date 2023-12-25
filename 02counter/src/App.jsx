import { useState } from 'react';
import './App.css'

function App() {
  let [count, setCounter] = useState(0)
  // let count = 0
  const addValue = () => {
    if(count === 20){
      return;
    }
    setCounter(count+1);    
  }
  const substractValue = () => {
    if(count > 0){
      setCounter(count-1);    
    }
  }
  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={addValue}>+</button>
      <button onClick={substractValue}>-</button>
    </>
  )
}

export default App
