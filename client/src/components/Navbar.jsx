import { useState, useEffect } from "react";
import logo from "../assets/kwetu-removebg-preview.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <img src={logo} alt="Kwetu Rooms" />
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
      <ul className="desktop-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT US</Link> 
          </li>
          <li>
            <Link to="/properties">PROPERTIES</Link>
          </li>
          <li>
            <Link to="/property-type">PROPERTY TYPE</Link>
          </li>
          <li>
            <Link to="/locations">PROPERTY LOCATIONS</Link>
          </li>
          <li className="contact-btn">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        {/* Hamburger (visible on mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
         <ul className={`mobile-nav ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          </li>
          <li>
            <Link to="/About" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/properties" onClick={() => setMenuOpen(false)}>PROPERTIES</Link>
          </li>
          <li>
            <Link to="/property-type" onClick={() => setMenuOpen(false)}>PROPERTY TYPE</Link>
          </li>
          <li>
            <Link to="/locations" onClick={() => setMenuOpen(false)}>LOCATIONS</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}