import { useState, useEffect } from "react";

import Footer from "../Components/Footer";
import heroImage from "../assets/contact-hero.jpg";
import contactImage from "../assets/contact-image.jpg"; 
import "../Contact.css";

const Contact = () => {
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

  return (
    <div>
     

      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
      
          </div>
        </div>
      </section>


      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-wrapper">
           
            <div className="contact-image-wrapper">
              <img src={contactImage} alt="Contact Us" />
            </div>
            
        
            <div className="contact-info">
              
              <h2>Contact</h2>
              <p>Get in touch with Kwetu Rooms for inquiries about premium property rentals. We're here to assist you.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M21 8.59 15.41 3c-.78-.78-2.05-.78-2.83 0L3 12.59c-.78.78-.78 2.05 0 2.83l5.59 5.59c.39.39.9.58 1.41.58s1.02-.19 1.41-.58L21 11.42c.78-.78.78-2.05 0-2.83m-11 11L4.41 14 14 4.41 19.59 10l-9.58 9.59Z"></path><path d="M8.29 14.29A.996.996 0 1 0 9.7 15.7a.996.996 0 1 0-1.41-1.41m6 6L15 21l.71.71 3-3 3-3L21 15l-.71-.71-3 3zM9.71 3.71 9 3l-.71-.71-3 3-3 3L3 9l.71.71 3-3z"></path>
</svg>
                  <div>
             
                  <p><a href="tel:+254724492544" className="contact-phone-link">
          +254 724 492 544
        </a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
</svg>
                  <div>
                  
                    <p>
                    <a href="mailto:contact@kweturooms.com" className="contact-email-link">
        contact@kweturooms.com
      </a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M6 8.44c-.02 5.1 5.17 9.18 5.39 9.35.18.14.4.21.61.21s.43-.07.61-.21c.22-.17 5.41-4.25 5.39-9.35C18 4.89 15.31 2 12 2S6 4.89 6 8.44m10 0c.01 3.19-2.74 6.08-4 7.24-1.26-1.15-4.01-4.04-4-7.24C8 5.99 9.79 4 12 4s4 1.99 4 4.44"></path><path d="M12 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4m6.02 8.73c-.4.64-.84 1.23-1.27 1.76C18.88 16.97 20 17.68 20 18c0 .51-2.75 2-8 2s-8-1.49-8-2c0-.32 1.12-1.03 3.25-1.51-.43-.53-.86-1.12-1.27-1.76C3.66 15.37 2 16.44 2 18c0 2.75 5.18 4 10 4s10-1.25 10-4c0-1.56-1.67-2.63-3.98-3.27"></path>
</svg>
                  <div>
                
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
  <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <h2>WE ARE HERE TO HELP</h2>
            <h3>Get in Touch</h3>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                 
                  <input type="text" placeholder="First Name" required />
                </div>
                
                <div className="form-group">
              
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
        
                  <input type="email" placeholder="Email" required />
                </div>
                
                <div className="form-group">
              
                  <select>
                    <option value="">Select...</option>
                    <option value="Existing Booking">Existing Booking</option>
                    <option value="New Booking">New Booking</option>
                    <option value="Enquiry">Enquiry</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
        
                <input type="text" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;