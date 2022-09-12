import React, {useState} from 'react';

function SignUp(props){
  const [ name, setName ] = useState('');
  const [ gender, setGender ] = useState('');

  const handleChageName = (event) => {
    setName(event.target.value);
  };

  const handleChageGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name}, 성별 : ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 : <input type="text" val={name} onChange={handleChageName} />
      </label>
      <label>
        성별 : 
        <select value={gender} onChange={handleChageGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default SignUp;