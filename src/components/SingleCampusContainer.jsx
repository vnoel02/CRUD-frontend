import React from "react";
import { Link } from "react-router-dom";

const SingleCampusContainer = (props) => {
  return props.list ? (
    props.list.map((campus) => {
      return (
        <div key={campus.id}>
          <div id="singlecampus" key={campus.id}>
            <h2>{campus.name}</h2>
            <h2> {campus.description}</h2>
            <h2> {campus.address}</h2>
            <img
              className="campus-img"
              src={campus.imageUrl}
              alt="campus img"
            ></img>
          </div>
            <Link to={`/campuses/${campus.id}/edit`} state={campus} >
                <button>Edit Campus</button>
            </Link>
          
        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default SingleCampusContainer;
