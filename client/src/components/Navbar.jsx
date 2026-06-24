import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kwetu-removebg-preview.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [propertiesDropdown, setPropertiesDropdown] = useState(false);
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false); // ✅ ADDED

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Property locations data
  const propertyLocations = [
     "Buruburu", "Green Park", "Loresho", "Lavingtone",
    "Mbagathi", "Kileleshwa", "Jogoo rd", "Outering",
    "Satelite", "Dagoretti", " kahawa west", "All Soaps",
    "Kasarani", "Roysambu", "Rongai", "Ruai",
    "Ngara", "Imara", "Kangu'undo", "Embakasi",
    "Utawala", "Kiambu", "Juja", "Withetie",
    "Kimbo", "Thika Square", 
  ];

  // Property Types data
  const propertyTypes = [
  
   
    "Weekly",
    "Long Weekend",
    "Vacation",
    "Short Stays",
    "Monthly",
    "Long Stays",
   
   
   
  ];

  //  3 columns
  const column1 = propertyLocations.slice(0, 9);
  const column2 = propertyLocations.slice(9, 18);
  const column3 = propertyLocations.slice(18, 27);

  // 2 columns
  const typeColumn1 = propertyTypes.slice(0, 6);
  const typeColumn2 = propertyTypes.slice(6, 11);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Kwetu Rooms" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          
          {/* PROPERTIES DROPDOWN */}
          <li 
            className="dropdown-trigger"
            onMouseEnter={() => setPropertiesDropdown(true)}
            onMouseLeave={() => setPropertiesDropdown(false)}
          >
            <Link to="/properties">PROPERTIES</Link>

locations
            {propertiesDropdown && (
              <div className="mega-dropdown">
                <div className="mega-dropdown-inner">
                  <div className="mega-column">
                    {column1.map((location) => (
                      <Link key={location} to={`/properties/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-column">
                    {column2.map((location) => (
                      <Link key={location} to={`/properties/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-column">
                    {column3.map((location) => (
                      <Link key={location} to={`/properties/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
          
          {/* PROPERTY TYPE DROPDOWN */}
          <li 
            className="dropdown-trigger"
            onMouseEnter={() => setPropertyTypeDropdown(true)}
            onMouseLeave={() => setPropertyTypeDropdown(false)}
          >
            <Link to="/properties">PROPERTY TYPE</Link>
            {propertyTypeDropdown && (
              <div className="mega-dropdown property-type-dropdown">
                <div className="mega-dropdown-inner">
                  <div className="mega-column">
                    {typeColumn1.map((type) => (
                      <Link key={type} to={`/properties"/${type.toLowerCase().replace(/ /g, '-')}`}>
                        {type}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-column">
                    {typeColumn2.map((type) => (
                      <Link key={type} to={`/properties"/${type.toLowerCase().replace(/ /g, '-')}`}>
                        {type}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* PROPERTY LOCATIONS DROPDOWN */}
          <li 
            className="dropdown-trigger"
            onMouseEnter={() => setLocationsDropdown(true)}
            onMouseLeave={() => setLocationsDropdown(false)}
          >
            <Link to="/#">PROPERTY LOCATIONS</Link>
            {locationsDropdown && (
              <div className="mega-dropdown locations-dropdown">
                <div className="mega-dropdown-inner">
                  <div className="mega-column">
                    {column1.map((location) => (
                      <Link key={location} to={`/properties/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
    
                    ))}
                  </div>
                  <div className="mega-column">
                    {column2.map((location) => (
                      <Link key={location} to={`/properties/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-column">
                    {column3.map((location) => (
                      <Link key={location} to={`/properties/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="contact-btn">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        {/* Hamburger */}
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
            <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/properties" onClick={() => setMenuOpen(false)}>PROPERTIES</Link>
          </li>
          <li>
            <Link to="/property-type" onClick={() => setMenuOpen(false)}>PROPERTY TYPE</Link>
          </li>
          <li>
            <Link to="/locations" onClick={() => setMenuOpen(false)}>PROPERTY LOCATIONS</Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}