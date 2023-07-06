import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteStudentThunk,
  fetchAllStudentsThunk,
} from "../redux/students/students.actions";

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
  return props.list && props.list.length > 0 ? (
    props.list
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((student) => {
        console.log(`Hello ${student.campus}`);
        return (
          
            <div className="students-container" key={student.id}>
            <Link to={`/students/${student.id}`} state={student.id}>
              <img
                className="student-img"
                src={student.imageUrl}
                alt="student img"
              ></img>
              {/* Uses name to go to single campus page */}
              
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
              </Link>
              <button className="delete" onClick={(e) => onClick(student.id, e)}>
              X
            </button>
            </div>
            
         
        );
      })
  ) : (
    <h1> No students available</h1>
  );
};
export default ListStudents;
