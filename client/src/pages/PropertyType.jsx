import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Add this import
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heroImage from "../assets/property-type-hero.jpg";
import "../PropertyType.css";

const PropertyType = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const propertyTypes = [
    "Apartments",
    "Corporate",
    "Weekly",
    "Long Weekend",
    "Vacation",
    "Short Stays",
    "Monthly",
    "Long Stays",
    "Guest Houses",
    "Groups",
    "Family Friendly"
  ];

  // Function to convert type to URL-friendly format
  const getTypeLink = (type) => {
    return type.toLowerCase().replace(/ /g, '-');
  };

  return (
    <div>
      <Navbar />

      <section
        className="property-type-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="property-type-hero-overlay">
          <div className="property-type-hero-content">
            <h1>Property Type</h1>
            <p>Exclusive Homes, Premium Locations, Exceptional Living</p>
          </div>
        </div>
      </section>

      <section className="property-type-section">
        <div className="container">
          <div className="property-type-grid">
            {propertyTypes.map((type, index) => (
              <Link 
                to={`/property-type/${getTypeLink(type)}`} 
                className="property-type-card" 
                key={index}
              >
                <span>{type}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyType;