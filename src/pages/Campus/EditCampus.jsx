import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  updateCampusThunk,
} from "../../redux/campuses/campus.actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// data is coming from SingleCampusContainer
const EditCampus = () => {
  
  const location = useLocation();
  const campusID = location.state.id;
  const campusName = location.state.name;
  const campusAddress = location.state.address;
  const campusImageUrl = location.state.imageUrl;
  const campusDesc = location.state.description;
  console.log(campusID);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [campusInfo, setCampusInfo] = useState({
    name: campusName,
    address: campusAddress,
    imageUrl: campusImageUrl,
    description: campusDesc,
  });

  useEffect(() => {
    console.log(campusInfo);
  }, [campusInfo]);

  const onChange = (e) => {
    setCampusInfo({ ...campusInfo, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateCampus();
    setTimeout(()=> {
        alert("Editing Campus...")
        navigate(-1); 
    }, 500)
      
  };

  const updateCampus = () => {
    console.log(campusID);
    dispatch(updateCampusThunk(campusID, campusInfo))
  };

  return (
    <div>
      <h1> Edit Campus</h1>
      <div className="form-container">
        <form id="addcampus">
          <label>
            {" "}
            Campus - Name
            <input name="name" 
            type="text" 
            defaultValue={campusName} 
            onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Campus - Address
            <input name="address" 
            type="text" 
            defaultValue={campusAddress} 
            onChange={onChange}></input>
          </label>

          <label>
            {" "}
            Campus - Image Url
            <input name="imageUrl" 
            onChange={onChange} 
            defaultValue= {campusImageUrl}
            ></input>
          </label>

          <label>
            {" "}
            Campus - Description
            <textarea
              name="description"
              id="textbox"
              type="text"
              onChange={onChange}
              defaultValue = {campusDesc}
            ></textarea>
          </label>
        </form>

        <button id="addcampusbtn" onClick={handleClick}>
          {" "}
          Edit Campus
        </button>
      </div>
    </div>
  );
};

export default EditCampus;
