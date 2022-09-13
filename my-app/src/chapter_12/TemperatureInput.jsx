import React, { useState } from 'react';

const scaleNames = {
  c : '섭씨',
  f : '화씨'
};

function TemperatureInput(props){
  const [temperature, setTemperature] = useState('');

  const handleChage = (e) => {
    // setTemperature(e.target.value);
    props.onTemperatureChange(e.target.value);
  }

  return(
    <fieldset>
      <legend>온도를 입력해주세요. (단위{scaleNames[props.scale]}):</legend>
      {/* <input value={temperature} onChange={handleChage} /> */}
      <input value={props.temperature} onChange={handleChage} />
    </fieldset>
  )
}

export default TemperatureInput;