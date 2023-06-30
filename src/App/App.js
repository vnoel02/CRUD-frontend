import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import  AllCampuses from '../pages/Campus/AllCampuses';
import { CreateNewCampus } from '../pages/Campus/CreateNewCampus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/newcampus" element={<CreateNewCampus />} />
      </Routes>
    </Router>
  );
}

export default App;
