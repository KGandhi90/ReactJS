import { useState } from 'react';
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev+1);
    console.log(count);
  }
  // The setCount will increment the value only after the increaseCount() is executed
  // Which means console.log(count) inside the function will always be 1 number ahead of setCount

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increaseCount}>Increment Counter</button>
    </div>
  )
}
