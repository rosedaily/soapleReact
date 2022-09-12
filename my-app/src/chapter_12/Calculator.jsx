import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict'

function Calculator(props){
  const [temperature, setTemperature ] = useState('');

  const handleChage = (event) => {
    setTemperature(event.target.value);
  }

  return(
    <fieldset>
      <legend>섭씨온도를 입력하세요.</legend>
      <input 
        value={temperature}
        onChange={handleChage} />
      <BoilingVerdict 
        celcius={parseFloat(temperature)} />
    </fieldset>
  )
}

export default Calculator;