import { combineReducers } from "redux";

import subscriberReducer from "./subscriber/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
	views: viewsReducer,
	subscriber: subscriberReducer,
	comments: commentsReducer
})

export default rootReducer;