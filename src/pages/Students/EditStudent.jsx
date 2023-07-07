import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateStudentThunk } from "../../redux/students/students.actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchAllCampusesThunk } from "../../redux/campuses/campus.actions";
import validator from "validator";

// A decent idea would be having text autofill from previous student info when editing
const EditStudent = () => {
  const location = useLocation();
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const [emailError, setEmailError] = useState('')

  const fetchAllCampuses = () => {
//    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    dispatch(fetchAllCampusesThunk());
  };

  // Fetches all the campuses
  useEffect(() => {
//    console.log("FETCHALLCAMPUSES FIRING IN USEEFFECT");
//    console.log(allCampuses);
    fetchAllCampuses();
  }, []);

  const studentId = location.state.id;
  const studentFirstName = location.state.firstName;
  const studentLastName = location.state.lastName;
  const studentEmail = location.state.email;
  const studentImageUrl = location.state.imageUrl;
  const studentGPA = location.state.GPA;
  const studentCampusID = location.state.campusId;

//  console.log(studentId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [studentInfo, setStudentInfo] = useState({
    firstName: studentFirstName,
    lastName: studentLastName,
    email: studentEmail,
    imageUrl: studentImageUrl,
    gpa: studentGPA,
    campusId: studentCampusID,
  });

  useEffect(() => {
//    console.log(studentInfo);
  }, [studentInfo]);

  const onChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
    
  };

  const handleClick = (e) => {
    if(emailError.length > 0) {
      alert("Incorrect Email")
    } else {
      e.preventDefault();
      updateStudent();
      setTimeout(() => {
        alert("Editing Student...");
        navigate(-1);
      }, 500);
    }
   
  };

  const updateStudent = () => {
//    console.log(studentId);
    dispatch(updateStudentThunk(studentId, studentInfo));
  };

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const emailChange = (e) => {
    onChange(e);
    validateEmail(e);
  }

  return (
    <div className="form-container">
      <h1>Edit Student</h1>
      <div>
        <form id="edit-student">
          <label> First Name</label>
          <input
            name="firstName"
            type="text"
            onChange={onChange}
            defaultValue={studentFirstName}
          ></input>

          <label> Last Name</label>
          <input
            name="lastName"
            type="text"
            onChange={onChange}
            defaultValue={studentLastName}
          ></input>

          <label> E-mail</label>
          <input
            name="email"
            type="text"
            onChange={(e) => emailChange(e)}
            defaultValue={studentEmail}
          ></input>
          <span>{emailError}</span>

          <label> Student - Image Url</label>
          <input
            name="imageUrl"
            onChange={onChange}
            defaultValue={studentImageUrl}
          ></input>

          <div id="gpa-container">
          <label> GPA</label>
          <input
            name="gpa"
            type="number"
            onChange={onChange}
            step="0.1"
            defaultValue={studentGPA}
          ></input>

          </div>
          

          <div id="campus-select">
          <label> Campus</label>
          <select name="campusId" onChange={onChange}>
            <option value={null}> NO CAMPUS</option>
            {allCampuses.sort((a,b)=> a.id > b.id? 1: -1)
            .map((campus) => {
              return (
                <option key={campus.id} value={campus.id}>
                  {" "}
                  {campus.id} - {campus.name}
                </option>
              );
            })}
          </select>

          </div>
          
        </form>

        <button id="addcampusbtn" onClick={handleClick}>
          {" "}
          Edit Student
        </button>
      </div>
    </div>
  );
};

export default EditStudent;
