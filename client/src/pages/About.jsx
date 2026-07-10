import { useState, useEffect } from "react";

import heroImage from "../assets/about-hero.jpg";
import serviceImage from "../assets/service-image.jpg";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import PropertyGrid from "../Components/PropertyGrid"; 
import WhyChooseSection from "../Components/WhyChooseSection";
import Testimonials from "../Components/Testimonials";
import newsImage from "../assets/news-image.jpg";
import "../About.css";

const About = () => {
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

  const newsItems = [
    {
      id: 1,
      date: "June 24, 2026",
      title: "Why Families Prefer Monthly Rentals Over Hotels",
      image: newsImage,
    },
    {
      id: 2,
      date: "June 18, 2026",
      title: "Top 5 Luxury Amenities Guests Love Most",
      image: newsImage,
    },
    {
      id: 3,
      date: "June 10, 2026",
      title: "How to Choose the Perfect Location for Your Stay",
      image: newsImage,
    },
  ];

  return (
    <div>
      


      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            
            <p>Exclusive Homes, Premium Locations, Exceptional Living</p>
          </div>
        </div>
      </section>

    
      <section className="about-services">
        <div className="container">
          <div className="service-wrapper">
          
            <div className="service-text">
              <h2>Our Service</h2>
              <p className="service-description">
                At Kwetu Rooms we specialise in providing comfortable, sophisticated,
                self-catered rentals in the heart of the city. Each of our properties
                are situated in prime locations for you to access and enjoy the very
                best attractions, entertainment and shopping & dining hotspots
                across the area.
              </p>
            </div>
            
         
            <div className="service-image">
              <img src={serviceImage} alt="Kwetu Rooms Service" />
            </div>
          </div>
        </div>
      </section>

  
      <section className="about-why-choose">
        <WhyChooseSection />
      </section>

      {/* PROPERTY GRID FROM HOMEPAGE (shipped from there)*/}
      <section className="property-grid-section">
        <PropertyGrid />
      </section>

      {/* TESTIMONIALS SECTION (shipped from there)*/}
      <section className="about-testimonials">
        <Testimonials />
      </section>

     
      <section className="about-news-section">
        <div className="container">
          <h4 className="about-news-subtitle">Don't Miss Our News</h4>
          <h2>News</h2>
          
          <div className="about-news-grid">
            {newsItems.map((item) => (
              <div className="about-news-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <span className="about-news-date">{item.date}</span>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="about-contact-section">
        <div className="container">
          <div className="about-contact-wrapper">
            <div className="about-contact-info">
              <h2>Let's Connect</h2>
              <p>
                Have questions about our properties or want to book a stay?
                Reach out to us — we'd love to hear from you!
              </p>
              
              <div className="about-contact-details">
                <div className="about-contact-item">
                  <span className="about-contact-icon">✉</span>
                  <div>
                    <h4>Email</h4>
                    <p>
                    <a href="mailto:contact@kweturooms.com">contact@kweturooms.com </a >
                      </p>
                  </div>
                </div>
                
                <div className="about-contact-item">
                  <span className="about-contact-icon">✆</span>
                  <div>
                    <h4>Phone</h4>
                    <p> <a href="https://wa.me/254724492544" target="_blank" rel="noopener noreferrer">
          +254 724 492 544
        </a>
        </p>
                  </div>
                </div>
                
                <div className="about-contact-item">
                  <span className="about-contact-icon">⌂</span>
                  <div>
                    <h4>Address</h4>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="about-contact-form">
              <div className="about-form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              
              <div className="about-form-group">
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              
              <div className="about-form-group">
                <label>Your Message</label>
                <textarea placeholder="Write your message here..." rows="5" required></textarea>
              </div>
              
              <button type="submit" className="about-contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 