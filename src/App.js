//import logo from './logo.svg';
//import './App.css';

/* REact libraries */
import React, {useState} from 'react';
/* react styles */
import './css/App.css'


const App = ()=>{
  const [count, setCount] = useState(0);
  const [increment, setInc] = useState(1);
  return(
    <div className="App">
      <h1>React counter</h1>
      <div class="main">
    
        <div class="cont">
          <h2>Counter</h2>
          <h3>{count}</h3>
          <div class="btn-group">
            <button class="suma" onClick={()=>setCount(count+increment)}>Add</button>
            <button class="resta" onClick={()=>setCount(count-increment)}>Less</button>
            <button class="clear" onClick={()=>setCount(0)}>Reset</button>
          </div>
          
        </div>
        
        <div class="inc">
          <h2>Increment</h2>
          <h3>{increment}</h3>
          <div class="btn-group">
            <button class="suma" onClick={()=>setInc(increment +1)}>Add</button>
            <button class="resta" onClick={()=>setInc(increment - 1)}>Less</button>
            <button class="clear" onClick={()=>setInc(1)}>Reset</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;