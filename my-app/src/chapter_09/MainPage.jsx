import React from 'react';
import { useState } from 'react';

function WarningBanner(props){
  if(!props.warning){
    return null;
  }

  return (
    <div>경고!</div>
  );
}

function MainPage(props){
  const [ showWanning, setShowWanning ] = useState(false);

  const handleToggleClick = () => {
    setShowWanning(prevShowWarnig => !prevShowWarnig);
  }

  return (
    <div>
      <WarningBanner warning={showWanning}/>
      <button onClick={handleToggleClick}>
        {showWanning ? '감추기' : '보이기'}
      </button>
    </div>
  )
}

export default MainPage;