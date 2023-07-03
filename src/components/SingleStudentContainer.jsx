import React from "react";
import { Link } from "react-router-dom";

const SingleStudentContainer = (props) => {
  return props.list ? (
    props.list.map((student) => {
      return (
        <div key={student.id}>
          <div id="singlecampus" key={student.id}>
            <h2>{student.firstName} {student.lastName}</h2>
            <h2> {student.email}</h2>
            <p> GPA: {student.GPA}</p>
            <img
              className="campus-img"
              src={student.imageUrl}
              alt="campus img"
            ></img>
          </div>
            {/* <Link to={`/campuses/${campus.id}/edit`} state={campus} > */}
                {/* <button>Edit Campus</button> */}
            {/* </Link> */}
          
        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};

export default SingleStudentContainer;