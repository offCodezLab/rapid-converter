import './App.css'
import Home from './components/Home'
import LengthConverter from './components/LengthConverter'
import Navbar from './components/Navbar'
import TemperatureConverter from './components/TemperatureConverter'
import TimeConverter from './components/TimeConverter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Spinner from './components/Spinner'

function App() {

  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);

  }



  return (
    <>
      <Router>
        <Navbar />
        <Spinner loading={loading} />
        {<div>
          <Routes>
            <Route exact path='/' element={<Home showLoading={showLoading} loading={loading} />}></Route>
            <Route exact path='/temperature-converter' element={<TemperatureConverter showLoading={showLoading} loading={loading} />}></Route>
            <Route exact path='/time-converter' element={<TimeConverter showLoading={showLoading} loading={loading} />}></Route>
            <Route exact path='/length-converter' element={<LengthConverter showLoading={showLoading} loading={loading} />}></Route>
          </Routes>
        </div>}
      </Router>
    </>
  )
}

export default App
