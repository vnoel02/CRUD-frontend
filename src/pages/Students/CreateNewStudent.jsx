import React from "react";
import {
  fetchAllStudentsThunk,
  createNewStudentThunk,
} from "../../redux/students/students.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const CreateNewStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gpa: "",
  });

  const onChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(studentInfo);
  }, [studentInfo]);

  const handleClick = (e) => {
    e.preventDefault();
    if (emailError.length > 0) {
      alert("Incorrect Email");
    } else if (
      studentInfo.firstName.length === 0 ||
      studentInfo.lastName.length === 0
    ) {
      alert("Missing Student's first and last name");
    } else {
      createNewStudent();
      navigate("/students");
    }
  };

  const createNewStudent = () => {
    console.log("RUNNING DISPATCH FOR NEW CAMPUS");
    console.log(studentInfo);
    dispatch(createNewStudentThunk(studentInfo)).then(() =>
      dispatch(fetchAllStudentsThunk())
    );
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const emailChange = (e) => {
    onChange(e);
    validateEmail(e);
  };

  return (
    <div className="form-container">
      <h1>Create New Student</h1>
      <div>
        <form>
          <label>
            {" "}
            First Name
            <input name="firstName" type="text" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Last Name
            <input name="lastName" type="text" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            E-mail
            <input
              name="email"
              type="text"
              onChange={(e) => emailChange(e)}
            ></input>
            <span>{emailError}</span>
          </label>

          <label>
            {" "}
            GPA
            <input name="gpa" type="number" onChange={onChange}></input>
          </label>
        </form>

        <button id="addcampusbtn" onClick={handleClick}>
          {" "}
          Add Student
        </button>
      </div>
    </div>
  );
};

export default CreateNewStudent;
