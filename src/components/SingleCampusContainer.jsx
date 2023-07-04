import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListStudents from "./ListStudents";
import CampusStudents from "./CampusStudents";
import { useReducer } from "react";

const SingleCampusContainer = (props) => {
  // const [render, setRerender] = useState(false);
  // const rerender = () => {
  //   setRerender(!rerender);
  // }
  


  // return props.list ? (
  // campus.campus.map((campus) => {
  // console.log("Hello", props.campus);
 
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

      {/* {props.campus.students && props.campus.students.length > 0 ? (
        props.campus.students.map((students) => {
          console.log("Hello", students);
          return (
            
            <div key={students.id}>
              {" "}
              <ListStudents props={students} />
            </div>
          );
        })
      ) : (
        <h4> No students</h4>
      )} */}
      {
      props.campus.students && props.campus.students.length > 0 ? (
        <CampusStudents list={props.campus.students} rerender={props.rerender} />
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
