import {ADD_VIEW} from "./types";

export const addView = (number) => {
	return {
		type: ADD_VIEW,
		payload: Number(number)	// 파라미터 명 보통 payload 라고 하는듯. action의 type에 따라 필요한 state 값을 담고있음.
	}
}