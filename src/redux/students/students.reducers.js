import StudentActionTypes from "./students.types";

export const INITIAL_STATE = {
    allStudents: [],
    createNewStudent: [],
    deleteStudent: [],
    singleStudent: [],
    updateStudent: [],
}

// action => {type, payload}
const studentReducer = (state = INITIAL_STATE, action) => {
    console.log("In student reducer handling actions");
    switch (action.type) {
        case StudentActionTypes.FETCH_ALL_STUDENTS: 
            return {
                ...state,
                allStudents: action.payload
            }
        case StudentActionTypes.CREATE_NEW_STUDENT: 
            return {
                ...state,
                createNewStudent: action.payload
            }
        case StudentActionTypes.DELETE_STUDENT:
            return {
                ...state,
                deleteStudent: action.payload
            }
        case StudentActionTypes.FETCH_SINGLE_STUDENT:
            return {
                ...state,
                singleStudent: action.payload
            }
        case StudentActionTypes.UPDATE_STUDENT:
            return {
                ...state,
                updateStudent: action.payload
            }
        default: 
            return state;
    };
};

export default studentReducer;