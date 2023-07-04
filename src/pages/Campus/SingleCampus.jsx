import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCampusThunk } from "../../redux/campuses/campus.actions";
import SingleCampusContainer from "../../components/SingleCampusContainer";
import Navbar from "../../components/Navbar";
import { useState } from "react";

function SingleCampus() {
  const [render, setRerender] = useState(false);
  const rerender = () => {
    setRerender(!rerender);
  }
 
    // Using useLocation hook to pass prop through link from ListCampuses containter
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData)

    const singleCampus = useSelector((state)=> state.campuses.singleCampus)
    const dispatch = useDispatch();
    const fetchSingleCampus = () => {
        console.log("RUNNING DISPATCH FETCH SINGLE CAMPUS")
        console.log(`Using ${propsData} for dispatch`)
        dispatch(fetchSingleCampusThunk(propsData));
    }

    useEffect(() => {
        console.log("USEEFFECT FIRING FETCHSINGLECAMPUS")
        console.log("This is the data", singleCampus)
        fetchSingleCampus();
    }, [])
    
    

  return (

    <div>
      <div>
      <SingleCampusContainer campus={singleCampus} rerender={rerender} />
      </div>
      
    
    </div>
  );
}

export default SingleCampus;
