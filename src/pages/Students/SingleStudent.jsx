import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleStudentThunk } from "../../redux/students/students.actions";
import SingleStudentContainer from "../../components/SingleStudentContainer";


const SingleStudent = () => {
  const location = useLocation();
  const propsData = location.state;

  const singleStudent = useSelector((state) => state.students.singleStudent);
  const dispatch = useDispatch();

  const fetchSingleStudent = () => {
    console.log("RUNNING DISPATCH FETCH SINGLE CAMPUS");
    console.log(`Using ${propsData} for dispatch`);
    dispatch(fetchSingleStudentThunk(propsData));
  };

  useEffect(() => {
    console.log("USEEFFECT FIRING FETCHSINGLECAMPUS");
    console.log(singleStudent);
    fetchSingleStudent();
  }, []);
  return (
    <div>
      <SingleStudentContainer student={singleStudent} />
    </div>
  );
};

export default SingleStudent;
