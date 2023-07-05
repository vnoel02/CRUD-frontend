import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeStudentThunk } from "../redux/students/students.actions";

const CampusStudents = (props) => {
  const dispatch = useDispatch();

  const onClick = (id, e) => {
    e.preventDefault();
    dispatch(removeStudentThunk(id));
    console.log("FORCING UPDATE");
    setTimeout(() => {
      alert("Deleting...");
      props.forceUpdate();
    }, 100);

    props.forceUpdate();
  };

  console.log("List students component");
  console.log(props.list);
  return props.list ? (
    props.list.map((student) => {
      console.log(`Hello ${student.campus}`);
      return (
        <div className="campus-container" key={student.id}>
          <img
            className="student-img"
            src={student.imageUrl}
            alt="student img"
          ></img>
          {/* Uses name to go to single campus page */}
          <Link to={`/students/${student.id}`} state={student.id}>
            <h2>
              {student.firstName} {student.lastName}
            </h2>
          </Link>
          {/* For removing a student from campus. It simply changes the campus id to null for a student */}
          <button onClick={(e) => onClick(student.id, e)}>
            {" "}
            Remove Student from Campus
          </button>
        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default CampusStudents;
