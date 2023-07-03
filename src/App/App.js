import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import AllCampuses from "../pages/Campus/AllCampuses";
import { CreateNewCampus } from "../pages/Campus/CreateNewCampus";
import SingleCampus from "../pages/Campus/SingleCampus";
import EditCampus from "../pages/Campus/EditCampus";
import AllStudents from "../pages/Students/AllStudents";
import CreateNewStudent from "../pages/Students/CreateNewStudent";
import SingleStudent from "../pages/Students/SingleStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses/*" element={<AllCampuses />} />
        <Route path="/newcampus" element={<CreateNewCampus />} />
        <Route path="/campuses/:id/" element={<SingleCampus />} />
        <Route path="/campuses/:id/edit" element={<EditCampus />} />
        {/* Student routes */}
        <Route path="/students/*" element={<AllStudents />} />
        <Route path="/newstudent" element={<CreateNewStudent />} />
        <Route path="/students/:id/" element={<SingleStudent/>} />
        {/* <Route path="" /> */}
      </Routes>
    </Router>
  );
}

export default App;
