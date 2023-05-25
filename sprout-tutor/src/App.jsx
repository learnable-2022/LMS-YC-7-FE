<<<<<<< HEAD
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login-Page/Login";
import Forget from "./Pages/Login-Page/New-Password";
import NewP from "./Pages/Login-Page/Forget-Password";
import PasswordChanged from "./Pages/Login-Page/Changed-Password";
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
>>>>>>> 014feaf632a42cfdeda1df1c6173141b53e91b5a

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      {
        <Router>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Forget-Password" element={<NewP />} />
            <Route path="/New-Password" element={<Forget />} />
            <Route path="/PasswordChanged" element={<PasswordChanged />} />
          </Routes>
        </Router>
      }
=======
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
>>>>>>> 014feaf632a42cfdeda1df1c6173141b53e91b5a
    </div>
  );
}

export default App;
