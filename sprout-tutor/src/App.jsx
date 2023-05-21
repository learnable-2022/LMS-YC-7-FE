import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import About from './Pages/About/About'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
