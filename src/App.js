import './App.css';
import LandingPage from './pages/LandingPage';
import OurServices from './pages/OurServices';
import BookASession from './pages/BookASession';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Route, Routes } from 'react-router-dom'
import Faqs from './pages/Faqs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/> 
        <Route path="/our-services" element={<OurServices />}/> 
        <Route path="/book-a-session" element={<BookASession />}/> 
        <Route path="/about-us" element={<AboutUs />}/> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/> 
        <Route path="/faqs" element={<Faqs />}/> 
        <Route path="/contact-us" element={<ContactUs />}/> 
      </Routes>
    </div>
  );
}

export default App;
