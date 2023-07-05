import React from "react";
import { Link } from "react-router-dom";

// From SingleCampus.jsx
const SingleStudentContainer = (props) => {
  return (
    <div>
      <div id="singlecampus">
        <h2>
          {props.student.firstName} {props.student.lastName}
        </h2>
        <h2> {props.student.email}</h2>
        <p> GPA: {props.student.GPA}</p>
        <img
          className="campus-img"
          src={props.student.imageUrl}
          alt="campus img"
        ></img>
      </div>
      <Link to={`/students/edit/${props.student.id}`} state={props.student}>
        <button>Edit Student</button>
      </Link>

      <h2> This student is registered to this campus</h2>
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
  );
}; //)
//   ) : (
//     <h1>...Loading</h1>
//   );

export default SingleStudentContainer;
