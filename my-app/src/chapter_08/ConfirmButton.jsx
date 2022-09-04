import React from 'react';
import { useState } from 'react';

// 클래스 컴포넌트
// class ConfirmButton extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       isConfirmed : false,
//     };

//     // this.handleConfirm = this.handleConfirm.bind(this);
//   }
  
//   // handleConfirm() {
//   //   this.setState((prevState) => ({
//   //     isConfirmed : !prevState.isConfirmed,
//   //   }));
//   // }


//   //위 주석들과 아래 handleConfirm은 동일하게 동작됨
//   handleConfirm = () =>{
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }

//   render(){
//     return (
//       <button
//         onClick={this.handleConfirm}
//         disabled={this.state.isConfirmed}
//         >
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

//함수컴포넌트
function ConfirmButton(props){
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}


export default ConfirmButton;