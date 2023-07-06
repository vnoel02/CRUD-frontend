// create new campus page
import React from "react";
import { createNewCampusThunk, fetchAllCampusesThunk } from "../../redux/campuses/campus.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// For tommorrow just handle axios call within local component

export const CreateNewCampus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [campusInfo, setCampusInfo] = useState({
    name: "",
    address: "",
    description: "",
  });



  const onChange = (e) => {
    setCampusInfo({ ...campusInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(campusInfo);
  }, [campusInfo]);


  const handleClick = (e) => {
    e.preventDefault();
    createNewCampus();
    navigate("/campuses")
  };

  const createNewCampus = () => {
    console.log("RUNNING DISPATCH FOR NEW CAMPUS");
    console.log(campusInfo);
    dispatch(createNewCampusThunk(campusInfo)).then(() => dispatch(fetchAllCampusesThunk()));
  };

  return (
    <div className="newcampus-container">
      <h1>Create New Campus</h1>
      <div 
      // className="form-container"
      >
        <form 
        // id="addcampus"
        >
          <label>
            {" "}
            Campus - Name
            </label>
            <input name="name" type="text" onChange={onChange}></input>
          

          <label>
            {" "}
            Campus - Address
            </label>
            <input name="address" type="text" onChange={onChange}></input>
          

          <label>
            {" "}
            Campus - Description
            </label>
            <textarea
              name="description"
              id="textbox"
              type="text"
              onChange={onChange}
            ></textarea>
          
        </form>

        <button id="addcampusbtn" onClick={handleClick}>
          {" "}
          Add Campus
        </button>
      </div>
    </div>
  );
};
