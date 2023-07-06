import React from "react";
import { Link } from "react-router-dom";

// From SingleCampus.jsx
const SingleStudentContainer = (props) => {
  return (
    <div>
      <div id="singlestudent">
      <div id="student-info">
          <h2>
            {props.student.firstName} {props.student.lastName}
          </h2>
          <h2> {props.student.email}</h2>
          <p> GPA: {props.student.GPA}</p>
        </div>
        <div id="student-look">
          <img
            className="single-student-img"
            src={props.student.imageUrl}
            alt="campus img"
          ></img>
        </div>
        
      </div>
      <div className="edit-button-container">
        <Link to={`/students/edit/${props.student.id}`} state={props.student}>
          <button className="edit">Edit Student</button>
        </Link>
      </div>

      <div id="students-campus">
        <h2> This student is registered to this campus.</h2>
        {props.student.campus ? (
          <Link
            to={`/campuses/${props.student.campus.id}`}
            state={props.student.campus.id}
          >
            <h3> {props.student.campus.name}</h3>
          </Link>
        ) : (
          <h4> No campuses registered</h4>
        )}
      </div>
    </div>
  );
};

export default SingleStudentContainer;
