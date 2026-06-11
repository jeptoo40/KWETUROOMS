import { useState, useEffect } from "react";
import StayPicker from "./components/StayPicker";
import IntroSection from "./components/IntroSection";
import Features from "./components/Features";
import PropertyGrid from "./components/PropertyGrid";
import WhyChooseSection from "./components/WhyChooseSection";
import SocialSection from "./components/SocialSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import myLogo from "./assets/Kwetu-removebg-preview.png";
import hero from "./assets/hero.jpg";
import hero3 from "./assets/hero-3.jpg";
import "./App.css";


function App() {
  const [active, setActive] = useState("Home");

  const menu = [
    "Home",
    "About Us",
    "Properties",
    "Property Type",
    "Locations",
    "Blog",
  ];

  // HERO SLIDER
  const heroImages = [hero, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">
            <img src={myLogo} alt="Kwetu Rooms" />
          </div>

          <ul className="nav-links">
            {menu.map((item) => (
              <li
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button>CONTACT US</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
        }}
      >
        <div className="hero-overlay">
          <h1>Luxury Living</h1>

          {/* SEARCH BAR */}
          <div className="search-bar">

            {/* STAY */}
            <div className="search-item">
              <label>Stay</label>
              <StayPicker />
            </div>

            <div className="divider"></div>

            {/* GUESTS */}
            <div className="search-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81.41.13.84.22 1.31.22 2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22.43.53.76 1.14.98 1.81.11-.01.21-.03.33-.03 1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5" />
              </svg>

              <select className="guest-select">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            {/* SEARCH BUTTON */}
            <button className="search-btn">Search</button>

          </div>
        </div>
      </section>

      {/* INTRO SECTION (CORRECT PLACE) */}
      <IntroSection />
      <WhyChooseSection />
      <Features />
      <PropertyGrid />
      <Testimonials />
      <SocialSection />
      <Footer />
    </>
  );
}

export default App;