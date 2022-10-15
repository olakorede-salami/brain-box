import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';

function Footer() {
return(
    <div>
        <footer className='footer'>
            <div>
            <ul className="footer-nav-list">
                        <Link to="/our-services" className={"footer-links"}><li className="nav-links">Cookie Policy</li></Link>
                        <Link to="/privacy-policy" className={"footer-links"}><li className="nav-links">Privacy Policy</li></Link>
                        <Link to="/faqs" className={"footer-links"}><li className="nav-links">FAQs</li></Link>
                        <Link to="/about-us" className={"footer-links"}><li className="nav-links">About Us</li></Link>
                        <Link to="/contact-us" className={"footer-links"}><li className="nav-links" id="last-link">Contact Us</li></Link>
                    </ul>
            </div>
            <div>
            <span className='copyright'>© 2022 Brain Box Tuition</span>
            </div>
        </footer>
    </div>
)
}

export default Footer;