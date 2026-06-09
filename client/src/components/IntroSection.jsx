import React from "react";

import hero2 from "../assets/hero-2.jpg";

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <p className="intro-label">WELCOME TO KWETU ROOMS</p>

          <h2>
            Curated stays designed for comfort, style, and convenience.
          </h2>

          <p>
            Whether you're travelling for business, relocation, or leisure,
            we offer thoughtfully selected apartments and homes in prime
            locations.
          </p>

          <button className="intro-btn">
            Explore Properties
          </button>
        </div>

        <div className="intro-image">
          <img src={hero2} alt="Luxury apartment" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;