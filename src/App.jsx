import React, { useEffect } from 'react';
import { initGA, trackPageView } from './/utils/Analytics';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/index'
import Portfolio from './pages/Portfolio'
import Services from './pages/services'
import About from './pages/About/index'
import Contact from './pages/Quote'

function App() {

   const location = useLocation();

  // Initialize GA once
  useEffect(() => {
    initGA();
  }, []);

  // Track page view every time the URL changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
