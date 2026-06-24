import { useState, useEffect } from "react";
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

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
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

      {/* Property Types Grid */}
      <section className="property-type-section">
        <div className="container">
          <div className="property-type-grid">
            {propertyTypes.map((type, index) => (
              <div className="property-type-card" key={index}>
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyType; 