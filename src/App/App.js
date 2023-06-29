import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import  AllCampuses from '../pages/Campus/AllCampuses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campuses" element={<AllCampuses />} />
      </Routes>
    </Router>
  );
}

export default App;
