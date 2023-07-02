import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campus.actions";
import { fetchAllCampusesThunk } from "../redux/campuses/campus.actions";

import { Routes, Route, Link } from "react-router-dom";
import SingleCampus from "../pages/Campus/SingleCampus";

export const ListStudents = (props) => {
  const dispatch = useDispatch();

//   const onClick = (id, e) => {
//     e.preventDefault();
//     dispatch(deleteCampusThunk(id)).then(() => {
//       dispatch(fetchAllCampusesThunk());
//     });
//   };

  console.log("List students component");
  console.log(props.list);
  return props.list ? (
    props.list.map((student) => {
      return (
        <div className="campus-container" key={student.id}>
          {/* <Link to={`/campuses/${student.id}`} state={student.id}> */}
            <h2>{campus.name}</h2>
          {/* </Link> */}
          <img
            className="campus-img"
            src={campus.imageUrl}
            alt="campus img"
          ></img>
          {/* <button onClick={(e) => onClick(student.id, e)}>X</button> */}

        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default ListStudents;
