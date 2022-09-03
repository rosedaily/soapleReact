import React , { useRef, useCallback, useState} from 'react';

function UseRefTest(props){
	//초깃값 null을 넣고, 반환된 inputElem이라는 레퍼런스 객체를 input에 넣어줌
	const inputElem = useRef(null);

	const onButtonClick = () => {
		//`current`는 마운트 된 input element를 가리킴
		inputElem.current.focus();
	};

	return (
    //버튼 클릭 시 호출되는 함수에서 inputElem.current를 통해 
    //실제 엘리먼트에 접근해서 focus() 함수 호출
		<>
			<input ref={inputElem} type="text"/>
			<button onClick={onButtonClick}>Focus the input</button>
		</>
  );
}

function MeasureExample(props){
	const [height, setHeight] = useState(0);

	//useCallback()사용 시 useRef()와 달리 
	//.current가 변경되었을 때 알림을 받을 수 있고, 
	//이를 통해 다른 정보들을 업데이트 할 수 있음
	const measureRef = useCallback(node => {
		if(node !== null){
			setHeight(node.getBoundingClientRect().height);
		}
	//의존성 배열을 빈배열로 넣어 <h1>태그가 마운트, 언마운트시에만 콜백함수 호출.
	//재렌더링시에는 호출되지 않음
	}, []);

	return (
    //h1 태그의 높이값을 매번 업데이트
		<>
			<h1 ref={measureRef}>안녕, 리액트</h1>
			<h2>위 헤더의 높이는 {Math.round(height)}px입니다.</h2>
		</>
	);
}

export default UseRefTest;