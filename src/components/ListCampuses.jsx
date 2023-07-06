// delete button functionality will be in here

import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campus.actions";
import { fetchAllCampusesThunk } from "../redux/campuses/campus.actions";
import { Link } from "react-router-dom";

export const ListCampuses = (props) => {
  const dispatch = useDispatch();

  // A delete API call will be sent onClick. The the second dispatch is for rendering that change
  const onClick = (id, e) => {
    e.preventDefault();
    dispatch(deleteCampusThunk(id)).then(() => {
      dispatch(fetchAllCampusesThunk());
    });
  };

  return props.list && props.list.length > 0 ? (
    props.list.map((campus) => {
      return (
        <div className="campus-container" key={campus.id}>
          {/* Each campus has a link to its single view */}
          <Link to={`/campuses/${campus.id}`} state={campus.id}>
            <h2>{campus.name}</h2>
          </Link>
          <img
            className="campus-img"
            src={campus.imageUrl}
            alt="campus img"
          ></img>
          {/* Delete button */}
          <button className="delete" onClick={(e) => onClick(campus.id, e)}> X </button>
        </div>
      );
    })
  ) : (
    <h2> No Campuses </h2>
  );
};

export default ListCampuses;
