import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleCampusThunk } from "../../redux/campuses/campus.actions";
import SingleCampusContainer from "../../components/SingleCampusContainer";
import { useReducer } from "react";

function SingleCampus() {
  // This useReducer hook is done to rerender when removing a student from campus
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  // Using useLocation hook to pass prop through link from ListCampuses containter
  const location = useLocation();
  const propsData = location.state;
  // console.log(propsData);

  // Going to redux store for single campus state
  const singleCampus = useSelector((state) => state.campuses.singleCampus);
  const dispatch = useDispatch();
  const fetchSingleCampus = () => {
    console.log("RUNNING DISPATCH FETCH SINGLE CAMPUS");
    console.log(`Using ${propsData} for dispatch`);
    dispatch(fetchSingleCampusThunk(propsData));
  };

  useEffect(() => {
    console.log("USEEFFECT FIRING FETCHSINGLECAMPUS");
    console.log("This is the data", singleCampus);
    fetchSingleCampus();
  }, [ignored]);

  return (
    <div>
      <div>
        {/* Passes method to force rerender and data from single campus state into container */}
        <SingleCampusContainer
          campus={singleCampus}
          forceUpdate={forceUpdate}
        />
      </div>
    </div>
  );
}

export default SingleCampus;
