import React, { useState } from "react";
import './App.css'



function App(){
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }


//   const [counter, setCounter] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   const increment = () => {
//     setCounter((prev) => prev + 1);
//     //or we can do setCounter(counter + 1);
//     console.log(counter);
//   }

//   const toggler = () => {
//     setToggle((prev) => !prev);
//   }
//   return (
//   <div className="App">
//     <h1 className={toggle ? 'active' : ''}>Hello React!!</h1>
//     <h2>Counter {counter}</h2>
//     <button onClick={increment}>Click</button>
//     <button onClick={toggler}>Toggler</button>
//   </div>
//   );
// }
const createDigits = () => {
  const digits = [];

  for (let i = 1; i < 10; i++){
    digits.push(
      <button 
      onClick={() => updateCalc(i.toString())} 
      key={i}>{i}</button>
    )
  }
  return digits;
}

const calculate = () => {
  setCalc(eval(calc).toString());
}

const deleteLast = () => {
  if (calc === ''){
    return;
  }

  const value = calc.slice(0, -1);

  setCalc(value);
}
return(
  <div className="App">
    <div className="calculator">
      <div className="display">
        {result ? <span>({result})</span> : ''} {calc || '0'}&nbsp;
      </div>

      <div className="operators">
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>

        <button onClick={deleteLast}>DEL</button>
      </div>

      <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>

        <button onClick={calculate}>=</button>
      </div>
    </div>
  </div>
)
}

export default App;