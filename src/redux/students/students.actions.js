import axios from "axios";
import StudentActionTypes from "./students.types";

//action creators
export const fetchAllStudents = () => {
  console.log("Fetch all students action");
  return {
    type: StudentActionTypes.FETCH_ALL_STUDENTS,
    payload: payload,
  };
};

/*thunks for api calls------------------------------------------------------------------------------------------------
*
*
*
----------------------------------------------------------------------------------------------------------------------*/

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("Fetch all students thunk is firing");
      const response = axios.get("http://localhost:4000/api/students/");
      console.log("Fetch all students thunk is completed");
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
