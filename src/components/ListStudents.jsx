import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import SingleCampus from "../pages/Campus/SingleCampus";
import { deleteStudentThunk, fetchAllStudentsThunk } from "../redux/students/students.actions";

export const ListStudents = (props) => {
  const dispatch = useDispatch();

  const onClick = (id, e) => {
    e.preventDefault();
    dispatch(deleteStudentThunk(id)).then(() => {
      dispatch(fetchAllStudentsThunk());
    });
  };

  console.log("List students component");
  console.log(props.list);
  return props.list ? (
    props.list.map((student) => {
      console.log(`Hello ${student.campus}`)
      return (
        <div className="campus-container" key={student.id}>
          <img
            className="student-img"
            src={student.imageUrl}
            alt="student img"
          ></img>
          <h2>{student.firstName} {student.lastName}</h2>
          <button onClick={(e) => onClick(student.id, e)}>X</button>

        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};
export default ListStudents;
