
        import React from "react";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";
import property4 from "../assets/property4.jpg";
import property5 from "../assets/property5.jpg";
import property6 from "../assets/property6.jpg";

function PropertyGrid() {
  const properties = [
    {
      image: property1,
      title: "Westlands Residence",
      location: "Westlands, Nairobi",

    },
    {
      image: property2,
      title: "Karen Luxury Villa",
      location: "Karen, Nairobi",
    
    },
    {
      image: property3,
      title: "Kilimani Apartment",
      location: "Kilimani, Nairobi",
    
    },
    {
      image: property4,
      title: "Riverside Villa",
      location: "Riverside, Nairobi",
     
    },


{
      image: property5,
      title: "Kilimani Apartment",
      location: "Kilimani, Nairobi",

    },
    {
      image: property6,
      title: "Riverside Penthouse",
      location: "Riverside, Nairobi",
     
    },









  ];

  return (
<section className="property-grid-section">
  <div className="property-grid">
    {properties.map((property, index) => (
      <div className="property-card" key={index}>
        <img src={property.image} alt={property.title} />
        <h3>{property.title}</h3>
      </div>
    ))}
  </div>

  <div className="properties-btn-wrapper">
    <button className="intro-btn2">
      Explore Properties
    </button>
  </div>
</section>




);
   
}

export default PropertyGrid;
