import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCampusThunk } from "../../redux/campuses/campus.actions";
import SingleCampusContainer from "../../components/SingleCampusContainer";

function SingleCampus() {
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
        console.log(singleCampus)
        fetchSingleCampus();
    }, [])
    
    

  return (

    <div>
      <SingleCampusContainer list={singleCampus} />
    
    </div>
  );
}

export default SingleCampus;
