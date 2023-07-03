import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campus.actions";
import { fetchAllCampusesThunk } from "../redux/campuses/campus.actions";

import { Routes, Route, Link } from "react-router-dom";
import SingleCampus from "../pages/Campus/SingleCampus";

export const ListStudents = (props) => {
  // const dispatch = useDispatch();

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
      console.log(`Hello ${student.campus}`)
      return (
        <div className="campus-container" key={student.id}>
          {/* <Link to={`/campuses/${student.id}`} state={student.id}> */}
            <h2>{student.firstName} {student.lastName}</h2>
             {/* {student.campus? 
             (student.campus.map((campus)=> {
                return <h1>{campus.name}</h1>
             }
             )) : (<h1> Nothing</h1>)
            } */}
            
             {/* <h2>{student.campus}</h2> */}
          {/* </Link> */}
          <img
            className="student-img"
            src={student.imageUrl}
            alt="student img"
          ></img>
          {/* <button onClick={(e) => onClick(student.id, e)}>X</button> */}

        </div>
      );
    })
  ) : (
    <h1>...Loading</h1>
  );
};
// return (
// student.campus.map((campus) => {
//   return <h1>{campus.name}</h1>
// })
// )
export default ListStudents;
