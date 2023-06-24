import './App.css'
import Home from './components/Home'
import LengthConverter from './components/LengthConverter'
import Navbar from './components/Navbar'
import TemperatureConverter from './components/TemperatureConverter'
import TimeConverter from './components/TimeConverter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/temperature-converter' element={<TemperatureConverter />}></Route>
            <Route exact path='/time-converter' element={<TimeConverter />}></Route>
            <Route exact path='/length-converter' element={<LengthConverter />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
