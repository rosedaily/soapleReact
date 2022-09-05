import React from 'react';
import { useState } from 'react';

function Mailbox(props){
  // const unreadMsg = props.unreadMsg;
  // const unreadMsg = [2,1,4,3,2]; //값이 여러개인 경우 <h2>를 보여줌
  
  //값이 없는 경우 변수.length > 0 이 false가 되어 값을 보여주지 않음
  const unreadMsg = [];

  return(
    <div>
      <h1>안녕하세요!</h1>
      {unreadMsg.length > 0 &&
        <h2>
          현재 {unreadMsg.length}개의 메시지가 있습니다.
        </h2>
      }
    </div>
  );
}

function UserStatus(props){
  const isLogged = true;

  return (
    <div>
      <h1>현재 사용자는 {isLogged ? '접속중' : '로그오프'} 상태입니다.</h1>
    </div>
  )
}

export default UserStatus;