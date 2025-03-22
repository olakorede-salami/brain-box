import './App.css';
import React from 'react';
import LandingPage from './pages/LandingPage';
import OurServices from './pages/OurServices';
import BookASession from './pages/BookASession';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import { Route, Routes } from 'react-router-dom'
import Faqs from './pages/Faqs';
import ContactUs from './pages/ContactUs';
import ReactGA from "react-ga4";
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { initFacebookPixel } from './pixel';



function App() {
  useEffect(() => {
    initFacebookPixel(); // Initialize Pixel when app loads
  }, []);
  
  ReactGA.initialize("G-MZC56FSE8N");
  ReactGA.send("pageview");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/> 
        <Route path="/our-services" element={<OurServices />}/> 
        <Route path="/book-a-session" element={<BookASession />}/> 
        <Route path="/about-us" element={<AboutUs />}/> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/> 
        <Route path="/cookie-policy" element={<CookiePolicy/>}/> 
        <Route path="/faqs" element={<Faqs />}/> 
        <Route path="/contact-us" element={<ContactUs />}/> 
        <Route path="*" element={< NotFound />}/> 

      </Routes>
    </div>
  );
}

export default App;
