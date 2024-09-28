import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Homescreen'
import HeroSection from './Pages/Home/Herosection'
import ContactMe from './Pages/Home/ContactMe'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div />}>
              404 Not found
            </Route>
            <Route path="/" element={<HeroSection />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
