import React from 'react';

function BoilingVerdict(props){
  if(props.celcius >= 100){
    return <p>물이 끓습니다.</p>
  }else{
    return <p>물이 끓지 않습니다.</p>
  }
}

export default BoilingVerdict;
