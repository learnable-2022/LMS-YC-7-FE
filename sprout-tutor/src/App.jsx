import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import RegisterStudent from './Pages/AuthStudent/RegisterStudent'
import RegisterTeacher from './Pages/AuthTeacher/RegisterTeacher'


function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          <Route path="/register/teacher" element={<RegisterTeacher/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
