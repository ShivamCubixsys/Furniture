
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Navibar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryDetail from './pages/CategoryDetail/CategoryDetail';

function App() {
  return (
  //   <div>
  //    <Navibar/>
  // <Home/> 
  //   </div>
  <Router>
     <Navibar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sofas" element="" />
    <Route path="/sofas" element="" />
    <Route path="/sofas" element="" />
    <Route path="/:name" element={<CategoryDetail/>} />
    </Routes>
  </Router>
  );
} 

export default App;
