import React from 'react';
import { useState } from 'react';

function SelectFruit(props){
  const [value, setValue ] = useState('banana');

  const handleChage = (event) => {
    setValue(event.taeget.value);
  }

  const handleSubmit = (event) => {
    alert('선택한 과일 : ' + value);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요.
        <select value={value} onChange={handleChage}>
          <option value='apple'>사과</option>
          <option value='grape'>포도</option>
          <option value='banana'>바나나</option>
          <option value='watermelon'>수박</option>
          <option multiple={true} value={['banana', 'apple']}>수박</option>
        </select>
      </label>
    </form>
  );


}

export default SelectFruit;