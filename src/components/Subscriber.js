import React from 'react';
import { connect } from 'react-redux'
import { addSubscriber } from '../redux'

const Subscriber = ({count, addSubscriber}) => {
	return (
		<div className="items">
			<h2>구독자 수: {count}</h2>
			<button onClick={() => addSubscriber()}>구독하기</button>
		</div>
	);
};

const mapStateToProps = ({subscriber}) => {
	return {
		count: subscriber.count
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addSubscriber: () => dispatch(addSubscriber())
// 	}
// }

// object 형식으로 보내는 방법
const mapDispatchToProps = {
	addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscriber);