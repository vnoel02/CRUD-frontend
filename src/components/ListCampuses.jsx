// delete button functionality will be in here

import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campus.actions";
import { fetchAllCampusesThunk } from "../redux/campuses/campus.actions";

import { Routes, Route, Link } from "react-router-dom";
import SingleCampus from "../pages/Campus/SingleCampus";

export const ListCampuses = (props) => {
  const dispatch = useDispatch();

  const onClick = (id, e) => {
    e.preventDefault();
    dispatch(deleteCampusThunk(id)).then(() => {
      dispatch(fetchAllCampusesThunk());
    });
  };

  console.log("List campuses component");
  console.log(props.list);
  return props.list ? (
    props.list.map((campus) => {
      return (
        <div className="campus-container" key={campus.id}>
          <Link to={`/campuses/${campus.id}`} state={campus.id}>
            <h2>{campus.name}</h2>
          </Link>
          <img
            className="campus-img"
            src={campus.imageUrl}
            alt="campus img"
          ></img>
          <button onClick={(e) => onClick(campus.id, e)}>X</button>

          
        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default ListCampuses;
