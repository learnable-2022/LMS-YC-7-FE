import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login-Page/Login";
import Forget from "./Pages/Login-Page/New-Password";
import NewP from "./Pages/Login-Page/Forget-Password";
import PasswordChanged from "./Pages/Login-Page/Changed-Password";

function App() {
  return (
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
    </div>
  );
}

export default App;
