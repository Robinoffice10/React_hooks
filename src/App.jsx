import { useState, useEffect } from 'react'
import './App.css'
import Cars from './cars/Cars'
function App() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(2)


  const [count3, setCount3] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount3((count3) => count3 + 1);
    }, 1000);
  }, [count, count1,]);


  return (
    <>
      <h1>I have rendered {count3} times!</h1>
      <div>the count is {count}</div>
      <button onClick={() => { setCount(count + 1) }} >update count</button>
      <hr />

      <div>the count is {count1}</div>
      <button onClick={() => setCount1(count1 ** 2)} >update count</button>

      <Cars setCount3={setCount3} />
    </>
  )
}

export default App
