import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Location.css";


import naiCbdImage from "../assets/Nai cbd.jpg";
import westlandsImage from "../assets/westlands.jpg";
import karenImage from "../assets/karen.jpg";
import kilimaniImage from "../assets/kilimani.jpg";
import riversideImage from "../assets/riverside.jpg";
import lavingtonImage from "../assets/lavington.jpg";
import kitisuruImage from "../assets/kitisuru.jpg";
import rundaImage from "../assets/runda.jpg";

const Location = () => {
  const { locationName } = useParams();
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


  const locationImages = {
    "nairobi-cbd": naiCbdImage,
    "westlands": westlandsImage,
    "karen": karenImage,
    "kilimani": kilimaniImage,
    "riverside": riversideImage,
    "lavington": lavingtonImage,
    "kitisuru": kitisuruImage,
    "runda": rundaImage,
  };


  const formatLocationName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  
  const imageSrc = locationImages[locationName];


  if (!imageSrc) {
    return (
      <div>
        <Navbar />
        <div className="location-not-found">
          <h1>Location Not Found</h1>
          <p>Sorry, we couldn't find this location.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <section className="location-page">
        <div className="container">
          <div className="location-wrapper">
            <div className="location-image">
              <img src={imageSrc} alt={formatLocationName(locationName)} />
            </div>
            <h1 className="location-title">{formatLocationName(locationName)}</h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;