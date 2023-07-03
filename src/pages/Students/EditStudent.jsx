import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateStudentThunk } from "../../redux/students/students.actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// A decent idea would be having text autofill from previous student info when editing
const EditStudent = () => {
  const location = useLocation();
  const studentId = location.state.id;
  console.log(studentId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: "",
    campusId: "",
  });

  useEffect(() => {
    console.log(studentInfo);
  }, [studentInfo]);

  const onChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateStudent();
    // setIsClicked(true)
    // dispatch(fetchSingleCampusThunk(campusID));
    setTimeout(() => {
      alert("Confirm Edit");
      navigate(-1);
    }, 500);
  };

  const updateStudent = () => {
    console.log(studentId);
    dispatch(updateStudentThunk(studentId, studentInfo));
  };

  return (
    <div>
      <h1>Edit Student</h1>
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
            <input name="email" type="text" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Student - Image Url
            <input name="imageUrl" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            GPA
            <input name="gpa" type="number" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Campus - ID
            <input name="campusId" type="number" onChange={onChange}></input>
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

export default EditStudent;
