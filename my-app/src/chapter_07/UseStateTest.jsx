import React, { useState } from 'react';


function UseStateTest(props){
  // var count = 0; // 이대로 사용하면 재렌더링이 일어나지 않아 새로운 값이 업데이트가 되지 않음.
  const [count, setCount ] = useState(0);
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  )
}

export default UseStateTest;