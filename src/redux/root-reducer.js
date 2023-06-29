// combines all reducers
import { combineReducers } from "redux";
import campusReducer from "./campuses/campus.reducers";

const rootReducer = combineReducers({
    campuses: campusReducer,
});

export default rootReducer;