// Homepage container
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
    <div id="Greeting"> Welcome!</div>
    <div className="home-container">
      <div id="navToCampuses">
        <Link to="/campuses">
          <img src="https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg"></img>
          <h4>Campuses</h4>
        </Link>
      </div>

      <div id="navToStudents">
        <Link to="/students">
          <img src="https://magazine.blog.brooklyn.edu/files/2020/09/7.2-US-News-and-World-Report-Ranks-Brooklyn-College-the-Most-Ethnically-Diverse-Campus-1200x628-1.jpg"></img>
          <h4>Students</h4>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;
