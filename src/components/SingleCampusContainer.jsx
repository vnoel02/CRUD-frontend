import React from "react";
import { Link } from "react-router-dom";
import CampusStudents from "./CampusStudents";

// Data of single campus passed as prop to this component
const SingleCampusContainer = (props) => {
//  // console.log(props.campus.students)
  return (
    <div>
      <div id="singlecampus">
        <div id="campus-info">
          <h1>{props.campus.name}</h1>
          <article> {props.campus.description}</article>
        </div>
        <div id="campus-look">
          <img
            className="single-campus-img"
            src={props.campus.imageUrl}
            alt="campus img"
          ></img>
          <h4> {props.campus.address}</h4>
        </div>
      </div>

      <div className="edit-button-container">
       {/* A button to edit campus. Redirects to another page */}
       <Link to={`/campuses/${props.campus.id}/edit`} state={props.campus}>
        <button className="edit">Edit Campus</button>
      </Link>
      </div>

      <div id="campuses-students">
        <h2> Students on this Campus</h2>
        {props.campus.students && props.campus.students.length > 0 ? (
          //Displays list of students
          <CampusStudents
            list={props.campus.students}
            forceUpdate={props.forceUpdate}
          />
        ) : (
          <h4> No students</h4>
        )}
      </div>
    </div>
  );
};

export default SingleCampusContainer;
