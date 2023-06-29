import React from "react";

export const ListCampuses = (props) => {

  console.log("List campuses component");
  console.log(props.list);
  return props.list ? (
    props.list.map((campus) => {
      return (
        <div className="campus-container" key={campus.id}>
          <h2>{campus.name}</h2>
          <img className="campus-img"src={campus.imageUrl} alt="campus img"></img>
          
        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default ListCampuses;
