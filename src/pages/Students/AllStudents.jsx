import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllCampusesThunk } from "../../redux/campuses/campus.actions";
import ListCampuses from "../../components/ListCampuses";
import { Link } from "react-router-dom";

const AllStudents = () => {
  return (
    <div>AllStudents</div>
  )
}

export default AllStudents