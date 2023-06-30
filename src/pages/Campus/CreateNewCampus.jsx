// create new campus page
import React from "react";
import { createNewCampusThunk } from "../../redux/campuses/campus.actions";
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
    // imageUrl: "",
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
    navigate("/campuses");
  };

  const createNewCampus = () => {
    console.log("RUNNING DISPATCH FOR NEW CAMPUS");
    console.log(campusInfo);
    return dispatch(createNewCampusThunk(campusInfo));
  };

  return (
    <div>
      <h1>Create New Campus</h1>
      <div className="form-container">
        <form id="addcampus">
          <label>
            {" "}
            Campus - Name
            <input name="name" type="text" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Campus - Address
            <input name="address" type="text" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Campus - Image Url
            <input type="text" onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Campus - Description
            <textarea
              name="description"
              id="textbox"
              type="text"
              onChange={onChange}
            ></textarea>
          </label>
        </form>

        <button id="addcampusbtn" onClick={handleClick}>
          {" "}
          Add Campus
        </button>
      </div>
    </div>
  );
};
