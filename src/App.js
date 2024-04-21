
import './App.css';
import React, { useMemo, useState } from 'react'
function App() {
  const [height,setHeight]=useState(70);
  const [weight,setWeight]=useState(180);
  const ans=useMemo(()=>{
    const mheight=height/100;
    return (weight/(mheight*mheight)).toFixed(1);
  },[height,weight])
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>

        <p className='slider-output'>{`Weight is ${weight} Kg`}</p>
        <input  className='input-slider' type='range' step="1" min="40" max="200"  onChange={(e)=>setWeight(e.target.value)}/>

        <p className='slider-output'>{`Height is ${height} cm`}</p>
        <input className='input-slider' type='range' min={140} max={220} onChange={(e)=>setHeight(e.target.value)}/>

        <p className='output-section'>Your BMI is</p>
        <p className='output'>{ans}</p>
      </div>
    </main>
  );
}

export default App;
