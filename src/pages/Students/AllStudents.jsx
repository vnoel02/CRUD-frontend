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
    console.log("Sending dispatch from fetchStudents");
    dispatch(fetchAllStudentsThunk());
  };

  useEffect(() => {
    console.log("Calling fetchStudents in useEffect");
    console.log(allStudents);
    fetchStudents();
  }, []);

  return (
    <div>
      <div>
        <h1>AllStudents</h1>
        <Link to="/newstudent">
          <button>Add New Student</button>
        </Link>
        <ListStudents list={allStudents} />
      </div>
    </div>
  );
};

export default AllStudents;
