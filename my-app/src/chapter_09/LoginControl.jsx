import React from 'react';
import { useState } from 'react';

function UserGreeting(props){
  return <h1>다시오셨군요!</h1>
}
function GuestGreeting(props){
  return <h1>회원가입을 해주세요.</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>
  }else{
    return <GuestGreeting/>
  }
}

function LoginBtn(props){
  return (
    <button onClick={props.onClick}>
      로그인
    </button>
  );
}

function LogoutBtn(props){
  return (
    <button onClick={props.onClick}>
      로그아웃
    </button>
  );
}

function LoginControl(props){
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let btn;
  if(isLoggedIn){
    btn = <LogoutBtn onClick={handleLogoutClick}/>
  }else{
    btn = <LoginBtn onClick={handleLoginClick}/>
  }

  return ( 
    <div>
      <Greeting isLoggedIn = {isLoggedIn}/>
      {btn}
    </div>
  )
}

export default LoginControl;