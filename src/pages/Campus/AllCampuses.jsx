// Single campus data is handled by parameterized routes in express

// Page that displays all campuses
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllCampusesThunk } from "../../redux/campuses/campus.actions";
import ListCampuses from "../../components/ListCampuses";
import { Link } from "react-router-dom";

const AllCampuses = () => {
  // Contains state of all campuses
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    dispatch(fetchAllCampusesThunk());
  };

  // Fetches all the campuses
  useEffect(() => {
    console.log("FETCHALLCAMPUSES FIRING IN USEEFFECT");
    console.log(allCampuses);
    fetchAllCampuses();
  }, []);

  return (
    <div>
      <div>
        {/* Redirects to create a campus page */}
        <Link to="/newcampus/">
          <button>Add New Campus</button>
        </Link>

        {/* Child component that lists out all the campuses */}
        <h1>All Campuses</h1>
        <ListCampuses list={allCampuses} />
      </div>
    </div>
  );
};

export default AllCampuses;
