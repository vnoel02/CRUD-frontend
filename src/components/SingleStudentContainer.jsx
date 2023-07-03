import React from "react";
import { Link } from "react-router-dom";

// From SingleCampus.jsx
const SingleStudentContainer = (props) => {
  return props.list ? (
    props.list.map((student) => {
      return (
        <div key={student.id}>
          <div id="singlecampus" key={student.id}>
            <h2>{student.firstName} {student.lastName}</h2>
            <h2> {student.email}</h2>
            <p> GPA: {student.GPA}</p>
            <img
              className="campus-img"
              src={student.imageUrl}
              alt="campus img"
            ></img>
          </div>
            <Link to={`/students/edit/${student.id}`} state={student} >
                <button>Edit Student</button>
            </Link>
          
        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default SingleStudentContainer;