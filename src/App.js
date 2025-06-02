import { useState } from 'react';
import './App.css';


function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div className='counter'>
      <h1 id='counterh1'>COUNTER</h1> 
      <p id='counterp'>CURRENT COUNT: {count}</p> 
      <div className='buttons'>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button id='reset' onClick={() => setCount(0)}>Reset</button>
      </div>
      
    </div>
  )
}

export default Counter;