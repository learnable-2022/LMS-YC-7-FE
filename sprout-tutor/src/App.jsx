import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from './Pages/Landing/Landing'
// import About from './Pages/About/About'
import Login from "./Pages/Login-Page/Login";
import Forget from "./Pages/Login-Page/New-Password";
import NewP from "./Pages/Login-Page/Forget-Password";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Forget-Password" element={<NewP />} />
            <Route path="/New-Password" element={<Forget />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
