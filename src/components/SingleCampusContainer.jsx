import React from "react";
import { Link } from "react-router-dom";
import CampusStudents from "./CampusStudents";

// Data of single campus passed as prop to this component
const SingleCampusContainer = (props) => { 
  // console.log(props.campus.students)
  return (
    <div>
      <div id="singlecampus">
        <h1>{props.campus.name}</h1>
        <h2> {props.campus.description}</h2>
        <h2> {props.campus.address}</h2>
        <img
          className="campus-img"
          src={props.campus.imageUrl}
          alt="campus img"
        ></img>
      </div>
      {/* A button to edit campus. Redirects to another page */}
      <Link to={`/campuses/${props.campus.id}/edit`} state={props.campus}>
        <button>Edit Campus</button>
      </Link>
      <h2> Students on this Campus</h2>
      {
      props.campus.students && props.campus.students.length > 0 ? (
        //Displays list of students
        <CampusStudents list={props.campus.students} forceUpdate={props.forceUpdate} />
      ) : (
        <h4> No students</h4>
      )}
    </div>
  );
}; 

export default SingleCampusContainer;
