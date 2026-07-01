import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kwetu-removebg-preview.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [propertiesDropdown, setPropertiesDropdown] = useState(false);
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // PROPERTIES data (for PROPERTIES dropdown)
  const propertyLocations = [
    "Buruburu", "Green Park", "Loresho", "Lavingtone",
    "Mbagathi", "Kileleshwa", "Jogoo rd", "Outering",
    "Satelite", "Dagoretti", "Kahawa West", "All Soaps",
    "Kasarani", "Roysambu", "Rongai", "Ruai",
    "Ngara", "Imara", "Kangu'undo", "Embakasi",
    "Utawala", "Kiambu", "Juja", "Withetie",
    "Kimbo", "Thika Square"
  ];

  // OUR LOCATIONS data (for OUR LOCATIONS dropdown) - DIFFERENT from above
  const ourLocations = [
    "Nairobi CBD",
    "Westlands",
    "Karen",
    "Kilimani",
    "Riverside",
    "Lavington",
    "Kitisuru",
    "Runda"
  ];

  // Property Types data
  const propertyTypes = [
    "Weekly",
    "Long Weekend",
    "Vacation",
    "Short Stays",
    "Monthly",
    "Long Stays"
  ];

  //  propertyLocations in 3 columns
  const column1 = propertyLocations.slice(0, 9);
  const column2 = propertyLocations.slice(9, 18);
  const column3 = propertyLocations.slice(18, 27);

  //  ourLocations in 2 columns
  const ourColumn1 = ourLocations.slice(0, 4);
  const ourColumn2 = ourLocations.slice(4, 8);

  // Spliteed propertyTypes in 2 columns
  const typeColumn1 = propertyTypes.slice(0, 3);
  const typeColumn2 = propertyTypes.slice(3, 6);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Kwetu Rooms" />
          </Link>
        </div>

       
        <ul className="desktop-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          
          
          <li 
            className="dropdown-trigger"
            onMouseEnter={() => setPropertiesDropdown(true)}
            onMouseLeave={() => setPropertiesDropdown(false)}
          >
            <Link to="/properties">PROPERTIES</Link>
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
                      <Link key={type} to={`/property-type/${type.toLowerCase().replace(/ /g, '-')}`}>
                        {type}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-column">
                    {typeColumn2.map((type) => (
                      <Link key={type} to={`/property-type/${type.toLowerCase().replace(/ /g, '-')}`}>
                        {type}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li 
            className="dropdown-trigger"
            onMouseEnter={() => setLocationsDropdown(true)}
            onMouseLeave={() => setLocationsDropdown(false)}
          >
            <Link to="/#">OUR LOCATIONS</Link>
            {locationsDropdown && (
              <div className="mega-dropdown ourLocations-dropdown">
                <div className="mega-dropdown-inner">
                  <div className="mega-column">
                    {ourColumn1.map((location) => (
                      <Link key={location} to={`/locations/${location.toLowerCase().replace(/ /g, '-')}`}>
                        {location}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-column">
                    {ourColumn2.map((location) => (
                      <Link key={location} to={`/locations/${location.toLowerCase().replace(/ /g, '-')}`}>
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
            <Link to="/Contact">CONTACT US</Link>
          </li>
        </ul>

    
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      
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
            <Link to="/properties" onClick={() => setMenuOpen(false)}>PROPERTY TYPE</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>OUR LOCATIONS</Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}