import React from 'react'

const SingleCampusContainer = (props) => {
  return props.list ?(
    props.list.map((campus) => {
      return (
        <div id="singlecampus" key={campus.id}>
            <h2>{campus.name}</h2>
            <h2> {campus.description}</h2>
            <h2> {campus.address}</h2>
          <img
            className="campus-img"
            src={campus.imageUrl}
            alt="campus img"
          ></img>
          {/* <button onClick={(e) => onClick(campus.id, e)}>X</button> */}

        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
}

export default SingleCampusContainer