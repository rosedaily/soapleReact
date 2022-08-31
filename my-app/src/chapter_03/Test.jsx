import React from 'react';
import Book from './Book';

const name = '리액트';

function Test(props){
  return (
    <div>
      <h1>{`단일 컴포넌트만 불러오고 싶을 수도 있잖아?`}</h1>
      <h2>{`이름을 불러오고 싶다면 ${name}로 불러오면 되고!`}</h2>
    </div>
  )
}

export default Test;