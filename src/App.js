//import logo from './logo.svg';
//import './App.css';

/* REact libraries */
import React, {useState} from 'react';
/* react styles */
import './App.css'


const App = ()=>{
  const [count, setCount] = useState(0);
  const [increment, setInc] = useState(1);
  return(
    <div className="App">
      <div class="carta">
        <div class="cont">
          <h1>Contador</h1>
          <h2>{count}</h2>
          <button onClick={()=>setCount(count+increment)}>Suma</button>
          <button onClick={()=>setCount(count-increment)}>Resta</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </div>
        
        <div class="inc">
          <h1>Incremento</h1>
          <h2>{increment}</h2>
          <button onClick={()=>setInc(increment +1)}>Suma</button>
          <button onClick={()=>setInc(increment - 1)}>Resta</button>
          <button onClick={()=>setInc(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;