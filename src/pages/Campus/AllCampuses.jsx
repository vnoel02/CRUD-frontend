// Single campus data is handled by parameterized routes in express

// Page that displays all campuses
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllCampusesThunk } from "../../redux/campuses/campus.actions";
import ListCampuses from "../../components/ListCampuses";
import { Link } from "react-router-dom";

const AllCampuses = () => {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();
  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    console.log("FETCHALLCAMPUSES FIRING IN USEEFFECT");
    fetchAllCampuses();
  }, []);
  return (
    <div>
      <Link to="/newcampus">
        <button>Add New Campus</button>
      </Link>
      
      <h1>All Campuses</h1>
      
      <ListCampuses list={allCampuses} />
    </div>
  );
};

export default AllCampuses;
