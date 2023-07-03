// combines all reducers
import { combineReducers } from "redux";
import campusReducer from "./campuses/campus.reducers";
import studentReducer from "./students/students.reducers";

const rootReducer = combineReducers({
    campuses: campusReducer,
    students: studentReducer
});

export default rootReducer;