import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [input,setInput]=React.useState("");
  const [result,setResult]=React.useState("");
  const operator=["/","*","+","-","."];
  const display=(e)=>{
    if(
      operator.includes(e) && input === "" ||
      operator.includes(e) && operator.includes(input.slice(-1))
    ){
      return;
    }
    setInput(input+e);
    if(!operator.includes(e)){
      setResult(eval(input+e).toString())
    }
  }
  const a=["one","two","three","four","five","six","seven","eight","nine"]
  const Digits=()=>{
    const digit=[];
    for(let i=1;i<10;i++){
      digit.push( <button onClick={()=>display(i.toString())} className='btn col-4 btn  ' id={a[i-1]}>{i}</button>)
    }
    return digit;
  }
  const calculate=()=>{
    setInput(eval(input).toString());
    setResult("");
  }
  const deletelast=()=>{
    if(input===""){
      return;
    }
  const value=input.slice(0,-1);
  setInput(value);
  }
  const reset=()=>{
    setInput("0");
    setResult("");
  }

  return (
    <div id="calc" className='bg-warning rounded align-self-center m-auto w-50'>
      <div id="display" className='text-end text-break  fs-1 fw-bold bg-white p-2 '>
        {result?<span className='fs-6'>({result})</span>:""}&nbsp;{input || "0"}
      </div>
      <div id="ops" className='d-flex justify-content-around bg-dark  ' >
        <button id='divide' onClick={()=>display("/")} className='btn text-light'>/</button>
        <button id='multiply' onClick={()=>display("*")} className='btn text-light'>*</button>
        <button id="add" onClick={()=>display("+")} className='btn text-light'>+</button>
        <button id="subtract" onClick={()=>display("-")} className='btn text-light'>-</button>

        <button id='clear' className='btn text-light' onClick={deletelast}>Del</button>
      </div>
      <div id="digits">
        <Digits/>
      </div>
      <div className='d-flex justify-content-around'>
        <button id="zero" onClick={()=>display("0")} className='btn'>0</button>
        <button id="decimal" onClick={()=>display(".")} className='btn'>.</button>

        <button id="equals" className='btn' onClick={calculate}>=</button>

      </div>
      <button className='btn btn-outline-dark col-12' onClick={reset}>clear</button>
     
    </div>

  );
}

export default App;
