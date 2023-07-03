import axios from "axios";
import StudentActionTypes from "./students.types";

//action creators
export const fetchAllStudents = (payload) => {
  console.log("Fetch all students action");
  return {
    type: StudentActionTypes.FETCH_ALL_STUDENTS,
    payload: payload,
  };
};

export const createNewStudent = (payload) => {
  return {
    type: StudentActionTypes.CREATE_NEW_STUDENT,
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
      const response = await axios.get("http://localhost:4000/api/students/");
      console.log("Fetch all students thunk is completed");
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewStudentThunk = (studentInfo) => {
  return async (dispatch) => {
    try {
      console.log("Create new student thunk is firing");
      const response = await axios.post("http://localhost:4000/api/students/newstudent", {
        firstName: studentInfo.firstName,
        lastName: studentInfo.lastName,
        email: studentInfo.email,
        GPA: studentInfo.gpa
      }
      );
      console.log("Create new student thunk completed");
      dispatch(createNewStudent(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
