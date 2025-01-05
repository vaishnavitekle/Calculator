import './Weather.css'
import React,{ useState } from 'react'

function Weather() {

    const [data, setData] = useState("");

    const getValue =(event) =>{
        console.log(event.target.value);
        setData(data.concat(event.target.value))
    }
    const calculation = () =>{
        setData(eval(data).toString())
    }
    const back = () =>{
        setData(data.slice(0,-1))
    }
    const clear = () =>{
        setData("")
    }

  return (
    <>
      <div className='calculator'>
            <input placeholder='0' value={data}/>
            <br/>

           <div className='buttons'>
            <button className='operator' onClick={getValue} value="(">(</button>
            <button className='operator' onClick={getValue} value=")">)</button>
            <button className='operator' onClick={getValue} value="%">%</button>
            <button className='operator' onClick={clear}  >AC</button>

            <button className='number' onClick={getValue} value="7">7</button>
            <button className='number' onClick={getValue} value="8">8</button>
            <button className='number' onClick={getValue} value="9">9</button>
            <button className='operator' onClick={getValue} value="*">*</button>

            <button className='number' onClick={getValue} value="4">4</button>
            <button className='number' onClick={getValue} value="5">5</button>
            <button className='number' onClick={getValue} value="6">6</button>
            <button className='operator' onClick={getValue} value="-">-</button>

            <button className='number' onClick={getValue} value="1">1</button>
            <button className='number' onClick={getValue} value="2">2</button>
            <button className='number' onClick={getValue} value="3">3</button>
            <button className='operator' onClick={getValue} value="+">+</button>

            <button className='number' onClick={getValue} value="0">0</button>
            <button className='operator' onClick={back}  >Back</button>
            <button className='operator' onClick={calculation}  >=</button>
            <button className='operator' onClick={getValue} value="/">/</button>

    </div>
    </div>
    </>
  )
}

export default Weather
