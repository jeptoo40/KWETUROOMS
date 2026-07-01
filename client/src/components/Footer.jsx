import myLogo from "../assets/Kwetu-removebg-preview.png";
import Features from "./Features";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col">
          <img src={myLogo} alt="Kwetu Rooms" className="footer-logo" />

          <p>
            Luxury serviced apartments and premium stays in Nairobi's most
            desirable locations.Welcome to Kweturooms Listings, your premier gateway to the finest properties across Kenya’s most prestigious neighborhoods.
          </p>
        </div>

        <div className="footer-col">
          <h4>More Information</h4>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Properties</li>
            <li>Locations</li>
           
            <li>Testimonials</li>
            <li>Features</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>

          <p>Nairobi, Kenya</p>
          <p>+254 724 492 544 </p>
          <p>contact@kweturooms.com</p>
        </div>

        <div className="footer-col">
          <h4>Our Newsletter</h4>
           <p>Sign Up For Special Offers </p>
          


          
            
     <div className="footer-socials btn-wrapper">

        
   <div className="subscribe-box">
  <input
    type="email"
    placeholder="Email Address"
    className="subscribe-input"
  />

  <button className="subscribe-btn">
    →
  </button>
</div>
  
         
    <button className="intro-btn4">
     Subscribe
    </button>
  
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Kwetu Rooms. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;