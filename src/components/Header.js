import React, {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
    const closeMenu = () => {
        setNavbarOpen(false)
      }

    return (
        <div>
        <header className="App-header">
            <nav className="nav navBar">
            <button onClick={handleToggle}>{navbarOpen ? (
<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
) : (
<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
)}</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li className="nav-links"><Link to="/" className={"nav-test-link-links"} onClick={() => closeMenu()}>Home</Link></li>
                    <li className="nav-links"><Link to="/our-services" className={"nav-test-link-links"} onClick={() => closeMenu()}>Our Services</Link></li>
                    <li className="nav-links"><Link to="/book-a-session" className={"nav-test-link-links"} onClick={() => closeMenu()}>Book a Session</Link></li>
                    <li className="nav-links"><Link to="/about-us" className={"nav-test-link-links"} onClick={() => closeMenu()}>About Us</Link></li>
                    <li className="nav-links"><Link to="/contact-us" className={"nav-test-link-links"} onClick={() => closeMenu()}>Contact Us</Link></li>
                </ul>
            <div className="nav-title">
            <h2 classname="title">Brain Box</h2>
            </div>
            <div className="nav-area">
            <ul className="nav-list hidden">
                    <li className="nav-links hidden"><Link to="/" className={"nav-link-links"}>Home</Link></li>
                    <li className="nav-links hidden"><Link to="/our-services" className={"nav-link-links"}>Our Services</Link></li>
                    <li className="nav-links hidden"><Link to="/book-a-session" className={"nav-link-links"}>Book a Session</Link></li>
                    <li className="nav-links hidden"><Link to="/about-us" className={"nav-link-links"}>About Us</Link></li>
                    <li className="nav-links hidden"><Link to="/contact-us" className={"nav-link-links"}>Contact Us</Link></li>
                </ul>
            </div>
            </nav>
        </header>
    </div>
    )
}

export default Header;