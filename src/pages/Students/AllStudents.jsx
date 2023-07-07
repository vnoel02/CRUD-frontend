import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllStudentsThunk } from "../../redux/students/students.actions";
import ListStudents from "../../components/ListStudents";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();

  const fetchStudents = () => {
//    console.log("Sending dispatch from fetchStudents");
    dispatch(fetchAllStudentsThunk());
  };

  useEffect(() => {
//    console.log("Calling fetchStudents in useEffect");
//    console.log(allStudents);
    fetchStudents();
  }, []);

  return (
    <div className="allstudents-container">
        
        <Link to="/newstudent">
          <button className="add-item">Add New Student</button>
        </Link>
        <h1>All Students</h1>
        <ListStudents list={allStudents} />

    </div>
  );
};

export default AllStudents;
