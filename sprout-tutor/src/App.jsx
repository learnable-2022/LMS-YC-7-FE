import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login-Page/Login";
import Forget from "./Pages/Login-Page/New-Password";
import NewP from "./Pages/Login-Page/Forget-Password";
import PasswordChanged from "./Pages/Login-Page/Changed-Password";
import RegisterStudent from "./Pages/AuthStudent/RegisterStudent";
import RegisterTeacher from "./Pages/AuthTeacher/RegisterTeacher";
import RegisterParent from "./Pages/AuthParent/RegisterParent";
import Landing from "./Pages/Landing/Landing";
import Teacher from "./Pages/Teacher/Teacher";
import Student from "./Pages/Student/Student";
import StudentExplore from "./Pages/StudentExplore/StudentExplore";


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Forget-Password" element={<NewP />} />
            <Route path="/New-Password" element={<Forget />} />
            <Route path="/PasswordChanged" element={<PasswordChanged />} />
            <Route path="/register/student" element={<RegisterStudent />} />
            <Route path="/register/teacher" element={<RegisterTeacher />} />
            <Route path="/register/parent" element={<RegisterParent/>} />
            <Route path="/teacherdashboard" element={<Teacher />} />
            <Route path="/studentdashboard" element={<Student />} />
            <Route path="/studentexplore" element={<StudentExplore />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
