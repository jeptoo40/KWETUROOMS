import { useState, useEffect } from "react";

import heroImage from "../assets/properties-hero.jpg";
import Footer from "../Components/Footer";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";
import property4 from "../assets/property4.jpg";
import property5 from "../assets/property5.jpg";
import property6 from "../assets/property6.jpg";
import property7 from "../assets/property7.jpg";
import property8 from "../assets/property8.jpg";
import property9 from "../assets/property9.jpg";
import property10 from "../assets/property10.jpg";
import property11 from "../assets/property11.jpg";

import property12 from "../assets/property12.jpg";

import property13 from "../assets/property13.jpg";
import property14 from "../assets/property14.jpg";

import property15 from "../assets/property15.jpg";







import "../Properties.css";

const Properties = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL APARTMENTS");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filters = ["ALL APARTMENTS", "APARTMENT", "TOWNHOUSE"];

  // All properties with their types
  const allProperties = [
    {
      image: property1,
      title: "Westlands Residence",
      location: "Westlands, Nairobi",
      type: "APARTMENT"
    },
    {
      image: property2,
      title: "Karen Luxury Villa",
      location: "Karen, Nairobi",
      type: "TOWNHOUSE"
    },
    {
      image: property3,
      title: "Kilimani Apartment",
      location: "Kilimani, Nairobi",
      type: "APARTMENT"
    },
    {
      image: property4,
      title: "Riverside Villa",
      location: "Riverside, Nairobi",
      type: "TOWNHOUSE"
    },

 {
      image: property7,
      title: "Kileleshwa Villa",
      location: "Kileleshwa, Nairobi",
      type: "TOWNHOUSE"
    },

{
      image: property8,
      title: "Ngara Villa",
      location: "Ngara, Nairobi",
      type: "APARTMENT"
    },

{

  image: property9,
  title: "Jakaranda ",
  location: "Jakaranda",
  type:"TOWNHOUSE"
},

{
 image: property10,
  title: "kahawa villa",
  location: "Kahawa west",
  type:"APARTMENT"
},



{
 image: property11,
  title: "Runda villa",
  location: "Runda west",
  type:"APARTMENT"
},


    {
      image: property5,
      title: "Lavington Penthouse",
      location: "Lavington, Nairobi",
      type: "APARTMENT"
    },
    {
      image: property6,
      title: "Riverside Penthouse",
      location: "Riverside, Nairobi",
      type: "APARTMENT"
    },

{
      image: property12,
      title: "Kiambu Rd",
      location: "Ruiru, Kiambu",
      type: "TOWNHOUSE"
    },

{
      image: property13,
      title: "Abc Villa",
      location: "Abc, Nairobi",
      type: "TOWNHOUSE"
    },


{
      image: property14,
      title: "Kajiado",
      location: "Kitengela",
      type: "APARTMENT"
    },


{
      image: property15,
      title: "Thika Rd",
      location: "All Soaps",
      type: "TOWNHOUSE"
    }



  ];






  // Filter properties based on activeFilter
  const getFilteredProperties = () => {
    if (activeFilter === "ALL APARTMENTS") {
      return allProperties; 
    } else if (activeFilter === "APARTMENT") {
      return allProperties.filter(p => p.type === "APARTMENT");
    } else if (activeFilter === "TOWNHOUSE") {
      return allProperties.filter(p => p.type === "TOWNHOUSE");
    }
    return allProperties;
  };

  const filteredProperties = getFilteredProperties();

  return (
    <div>
   

      <section
        className="properties-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="properties-hero-overlay">
          <div className="properties-hero-content">
            <h1>Properties</h1>
         
          </div>
        </div>
      </section>

   
      <section className="properties-filter-section">
        <div className="container">
          <div className="filter-wrapper">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

   
      <section className="properties-grid-section">
        <div className="container">
          <div className="property-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <div className="property-card" key={index}>
                  <img src={property.image} alt={property.title} />
                  <h3>{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                </div>
              ))
            ) : (
              <p className="no-properties">No properties found</p>
            )}
          </div>

        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;