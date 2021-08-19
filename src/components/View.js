import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addView } from '../redux'	// index.js 안에 import 디렉토리 한번에 정리 & index는 생략가능

const Subscriber = ({count, addView}) => {
	const [number, setNumber] = useState(1);

	return (
		<div className="items">
			<h2>조회 수: {count}</h2>
			<input type="text" value={number} onChange={({target}) => setNumber(target.value)}/>
			<button onClick={() => addView(number)}>조회</button>
		</div>
	);
};

const mapStateToProps = ({views}) => {
	return {
		count: views.count
	}
}


// object 형식으로 보내는 방법
const mapDispatchToProps = {
	addView: (number) => addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscriber);