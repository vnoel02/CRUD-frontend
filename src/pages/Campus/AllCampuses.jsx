// Single campus data is handled by parameterized routes in express

// Page that displays all campuses
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllCampusesThunk } from "../../redux/campuses/campus.actions";
import ListCampuses from "../../components/ListCampuses";
import { Link } from "react-router-dom";

const AllCampuses = () => {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  // const [allCampusesState, setAllCamusesState] = useState([])
  const dispatch = useDispatch();
  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    dispatch(fetchAllCampusesThunk());
  };

  // const [rerender, setRerender] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchAllCampusesThunk());
  //   setRerender(!rerender);
  // }, []);

  useEffect(() => {
    console.log("FETCHALLCAMPUSES FIRING IN USEEFFECT");
    console.log(allCampuses)
    // dispatch(fetchAllCampusesThunk());
    fetchAllCampuses();
  }, []); // insert allCampuses

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
