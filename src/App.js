import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>   
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<News key="in" country="in"/>}></Route>
        <Route exact path="us" element={<News key="us" country="us"/>}></Route>
      </Routes>
      
      </Router>      
    </>
  );
}

export default App;
