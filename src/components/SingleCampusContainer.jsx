import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListStudents from "./ListStudents";
import CampusStudents from "./CampusStudents";
import { useReducer } from "react";

const SingleCampusContainer = (props) => { 
  console.log(props.campus.students)
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
      <Link to={`/campuses/${props.campus.id}/edit`} state={props.campus}>
        <button>Edit Campus</button>
      </Link>
      <h2> Students on this Campus</h2>

      {
      props.campus.students && props.campus.students.length > 0 ? (
        <CampusStudents list={props.campus.students} forceUpdate={props.forceUpdate} />
      ) : (
        <h4> No students</h4>
      )}
    </div>
  );
}; //)
// ) : (
//   <h1>...Loading</h1>
// );
// };

export default SingleCampusContainer;
