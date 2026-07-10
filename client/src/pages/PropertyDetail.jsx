import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../PropertyDetail.css";
import "../Contact.css";
import buruburuHero from "../assets/properties/buruburu-hero.jpg";
import greenParkHero from "../assets/properties/green-park-hero.jpg";
import loreshoHero from "../assets/properties/loresho-hero.jpg";
import lavingtoneHero from "../assets/properties/lavingtone-hero.jpg";
import mbagathiHero from "../assets/properties/mbagathi-hero.jpg";
import kileleshwaHero from "../assets/properties/kileleshwa-hero.jpg";
import jogooRdHero from "../assets/properties/jogoo-rd-hero.jpg";
import outeringHero from "../assets/properties/outering-hero.jpg";
import sateliteHero from "../assets/properties/satelite-hero.jpg";
import dagorettiHero from "../assets/properties/dagoretti-hero.jpg";
import kahawaWestHero from "../assets/properties/kahawa-west-hero.jpg";
import kasaraniHero from "../assets/properties/kasarani-hero.jpg";
import roysambuHero from "../assets/properties/roysambu-hero.jpg";
import rongaiHero from "../assets/properties/rongai-hero.jpg";
import ruaiHero from "../assets/properties/ruai-hero.jpg";
import ngaraHero from "../assets/properties/ngara-hero.jpg";
import imaraHero from "../assets/properties/imara-hero.jpg";
import kanguundoHero from "../assets/properties/kanguundo-hero.jpg";
import embakasiHero from "../assets/properties/embakasi-hero.jpg";
import utawalaHero from "../assets/properties/utawala-hero.jpg";
import kiambuHero from "../assets/properties/kiambu-hero.jpg";
import jujaHero from "../assets/properties/juja-hero.jpg";
import withetieHero from "../assets/properties/withetie-hero.jpg";
import kimboHero from "../assets/properties/kimbo-hero.jpg";
import thikaSquareHero from "../assets/properties/thika-square-hero.jpg";
import defaultHero from "../assets/default-hero.jpg";


import WhyChooseSection from "../components/WhyChooseSection";

import Contact from "../pages/Contact";

const PropertyDetail = () => {
  const { location } = useParams();
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

  
  const kenyaPropertyData = {
    "buruburu": {
      title: "Buruburu",
      subtitle: "Modern 3-Bedroom Apartment with Garden",
      location: "Buruburu, Nairobi",
      bedrooms: 3,
      bathrooms: 2,
      area: "120 m²",
      guests: 6,
      price: "KES 45,000 per week",
      heroImage: buruburuHero,
      description: `
        <p><strong>Modern Living in the Heart of Buruburu</strong></p>
        <p>Located in one of Nairobi's most established neighborhoods, this modern apartment offers comfortable living with easy access to shopping centers, schools, and public transport.</p>
        <p>The property features spacious bedrooms, a fully equipped kitchen, and a beautiful private garden - perfect for families or professionals seeking a peaceful retreat in the city.</p>
        
        <p><strong>Convenient Location</strong></p>
        <p>Buruburu is known for its excellent amenities including shopping malls, hospitals, and recreational facilities. The property is within walking distance of major supermarkets and restaurants.</p>
        
        <p><strong>Modern Amenities</strong></p>
        <p>Enjoy high-speed Wi-Fi, air conditioning, and 24/7 security. The apartment is fully furnished with modern furniture and comes with all necessary appliances for comfortable living.</p>
      `,
      houseFeatures: [
        {
          title: "Master Bedroom",
          details: [
            "King-size bed",
            "En-suite bathroom",
            "Walk-in wardrobe",
            "Garden views"
          ]
        },
        {
          title: "Bedroom 2",
          details: [
            "Queen-size bed",
            "Built-in wardrobe",
            "Natural lighting"
          ]
        },
        {
          title: "Bedroom 3",
          details: [
            "Double bed",
            "Built-in wardrobe",
            "Garden views"
          ]
        },
        {
          title: "Living Room",
          details: [
            "Comfortable seating",
            "Smart TV with streaming",
            "Dining area for 6",
            "Natural lighting"
          ]
        },
        {
          title: "Kitchen",
          details: [
            "Modern fitted kitchen",
            "Full-size refrigerator",
            "Microwave & oven",
            "Breakfast bar"
          ]
        },
        {
          title: "Garden",
          details: [
            "Private garden",
            "Outdoor seating",
            "Landscaped",
            "Children's play area"
          ]
        }
      ],
      highlights: [
        {
          icon: "🏡",
          title: "Prime Buruburu Location",
          description: "Established neighborhood with excellent amenities and transport links."
        },
        {
          icon: "🌳",
          title: "Private Garden",
          description: "Enjoy outdoor living with a beautifully landscaped garden."
        },
        {
          icon: "🛡️",
          title: "Secure Neighborhood",
          description: "24/7 security with controlled access."
        },
        {
          icon: "🛍️",
          title: "Shopping Nearby",
          description: "Walking distance to supermarkets and shopping centers."
        }
      ],
      amenities: [
        "Wi-Fi", "Air Conditioning", "Kitchen", "Washer/Dryer",
        "Smart TV", "Heating", "Garden", "Work Desk",
        "Luxury Linens", "Toiletries", "Hair Dryer", "Iron",
        "Parking", "Security System", "Water Heater"
      ],
      nearby: [
        "Buruburu Shopping Centre",
        "Buruburu Hospital",
        "Moi Avenue",
        "Nairobi CBD - 15 mins",
        "JKIA - 30 mins",
        "Schools and Churches"
      ],
      checkIn: "2:00 PM",
      checkOut: "10:00 AM",
      minStay: "2 nights",
      smoking: "No smoking",
      pets: "Not allowed"
    },
    "loresho": {
      title: "Loresho",
      subtitle: "Executive 4-Bedroom Villa with Pool",
      location: "Loresho, Nairobi",
      bedrooms: 4,
      bathrooms: 4,
      area: "250 m²",
      guests: 8,
      price: "KES 120,000 per week",
      heroImage: loreshoHero,
      description: `
        <p><strong>Executive Villa in Prestigious Loresho</strong></p>
        <p>Experience luxury living in one of Nairobi's most prestigious neighborhoods. This stunning villa offers spacious living areas, a private swimming pool, and beautiful garden views.</p>
        <p>Perfect for corporate executives, families, or groups seeking a luxurious stay in Nairobi's leafy suburbs.</p>
        
        <p><strong>Exceptional Features</strong></p>
        <p>The property features four en-suite bedrooms, a modern kitchen, and a large living and dining area. The outdoor area includes a swimming pool, patio, and landscaped gardens.</p>
      `,
      houseFeatures: [
        {
          title: "Master Suite",
          details: [
            "King-size bed",
            "En-suite bathroom with tub",
            "Walk-in wardrobe",
            "Private balcony"
          ]
        },
        {
          title: "Bedroom 2",
          details: [
            "Queen-size bed",
            "En-suite bathroom",
            "Built-in wardrobe"
          ]
        },
        {
          title: "Bedroom 3",
          details: [
            "Queen-size bed",
            "En-suite bathroom",
            "Garden views"
          ]
        },
        {
          title: "Bedroom 4",
          details: [
            "Double bed",
            "En-suite bathroom",
            "Pool views"
          ]
        },
        {
          title: "Living Room",
          details: [
            "Open-plan design",
            "Large seating area",
            "Fireplace",
            "Smart TV"
          ]
        },
        {
          title: "Kitchen",
          details: [
            "Gourmet kitchen",
            "Large refrigerator",
            "Wine cooler",
            "Breakfast bar"
          ]
        },
        {
          title: "Pool & Garden",
          details: [
            "Private swimming pool",
            "Sun loungers",
            "Landscaped garden",
            "Outdoor dining"
          ]
        }
      ],
      highlights: [
        {
          icon: "🏊",
          title: "Private Swimming Pool",
          description: "Enjoy a refreshing swim in your private pool."
        },
        {
          icon: "🌿",
          title: "Luxury Garden",
          description: "Beautifully landscaped garden perfect for entertaining."
        },
        {
          icon: "🏢",
          title: "Prestigious Location",
          description: "Located in one of Nairobi's most sought-after neighborhoods."
        },
        {
          icon: "👨‍💼",
          title: "Corporate Ready",
          description: "Perfect for executives and business travelers."
        }
      ],
      amenities: [
        "Wi-Fi", "Air Conditioning", "Swimming Pool", "Kitchen",
        "Washer/Dryer", "Smart TV", "Heating", "Garden",
        "Parking", "Security System", "Water Heater",
        "Backup Power", "Fully Furnished"
      ],
      nearby: [
        "Loresho Shopping Centre",
        "The Hub Mall - 10 mins",
        "Westlands - 15 mins",
        "Nairobi CBD - 20 mins",
        "JKIA - 35 mins"
      ],
      checkIn: "2:00 PM",
      checkOut: "10:00 AM",
      minStay: "3 nights",
      smoking: "No smoking",
      pets: "Allowed upon request"
    },
    "kileleshwa": {
      title: "Kileleshwa",
      subtitle: "Stylish 3-Bedroom Apartment with City Views",
      location: "Kileleshwa, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      area: "150 m²",
      guests: 6,
      price: "KES 65,000 per week",
      heroImage: kileleshwaHero,
      description: `
        <p><strong>Contemporary Living in Kileleshwa</strong></p>
        <p>Located in the vibrant neighborhood of Kileleshwa, this stylish apartment offers modern living with panoramic city views. Close to Nairobi's best restaurants, shops, and entertainment venues.</p>
        
        <p><strong>Modern Design</strong></p>
        <p>The apartment features contemporary design with high-end finishes, spacious bedrooms, and a fully equipped kitchen. Perfect for families, couples, or business travelers.</p>
      `,
      houseFeatures: [
        {
          title: "Master Bedroom",
          details: [
            "King-size bed",
            "En-suite bathroom",
            "City views",
            "Walk-in wardrobe"
          ]
        },
        {
          title: "Bedroom 2",
          details: [
            "Queen-size bed",
            "En-suite bathroom",
            "Built-in wardrobe"
          ]
        },
        {
          title: "Bedroom 3",
          details: [
            "Double bed",
            "En-suite bathroom",
            "City views"
          ]
        },
        {
          title: "Living Room",
          details: [
            "Open-plan design",
            "Panoramic city views",
            "Comfortable seating",
            "Smart TV"
          ]
        },
        {
          title: "Kitchen",
          details: [
            "Modern kitchen",
            "Breakfast bar",
            "High-end appliances",
            "Dining area"
          ]
        }
      ],
      highlights: [
        {
          icon: "🏙️",
          title: "Panoramic Views",
          description: "Stunning city views from every room."
        },
        {
          icon: "📍",
          title: "Prime Location",
          description: "Walking distance to restaurants and shopping."
        },
        {
          icon: "✨",
          title: "Modern Design",
          description: "Contemporary interiors with luxury finishes."
        }
      ],
      amenities: [
        "Wi-Fi", "Air Conditioning", "Kitchen", "Washer/Dryer",
        "Smart TV", "Heating", "Work Desk", "City Views",
        "Luxury Linens", "Toiletries", "Parking", "Security"
      ],
      nearby: [
        "Yaya Centre",
        "The Junction Mall",
        "Chiromo Road",
        "Nairobi CBD - 15 mins",
        "JKIA - 30 mins"
      ],
      checkIn: "2:00 PM",
      checkOut: "10:00 AM",
      minStay: "2 nights",
      smoking: "No smoking",
      pets: "Not allowed"
    },
 
  };

 
  const defaultProperty = {
    title: "Luxury Property",
    subtitle: "Premium Nairobi Rental",
    location: "Nairobi",
    bedrooms: 0,
    bathrooms: 0,
    area: "0 m²",
    guests: 0,
    price: "Contact for price",
    heroImage: defaultHero,
    description: "<p>This property is currently being updated. Please contact us for more information.</p>",
    houseFeatures: [],
    highlights: [],
    amenities: [],
    nearby: [],
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    minStay: "Contact us",
    smoking: "No smoking",
    pets: "Contact us"
  };


  const propertyKey = location.toLowerCase();
  const property = kenyaPropertyData[propertyKey] || defaultProperty;


  const formatLocationName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div id="property-detail-page">  
     
  
    
      <div className="property-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/properties">Properties</Link>
          <span> / </span>
          <span className="current">{formatLocationName(location)}</span>
        </div>
      </div>
  
      <section
        className="property-hero"
        style={{
          backgroundImage: `url(${property.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          minHeight: "500px",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            padding: "0 20px",
            maxWidth: "800px",
          }}
        >
   
   
          <p className="property-meta">
       
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Enquire Now</Link>
            <Link to="/booking" className="btn-secondary">Book Now</Link>
          </div>
        </div>
      </section>
  
    
      <section className="key-details">
        <div className="container">
          <div className="details-grid">
            <div className="detail-item">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M4 17h16v3h2V10c0-1.65-1.35-3-3-3h-7c-.55 0-1 .45-1 1v7H4V5H2v15h2zm9-8h6c.55 0 1 .45 1 1v5h-7z"></path><path d="M7.5 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5"></path>
</svg>
              <span className="detail-label">Bedrooms</span>
              <span className="detail-value">{property.bedrooms}</span>
            </div>
            <div className="detail-item">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M19.5 20c.83 0 1.5-.75 1.5-1.67 0-1.5-1.5-3.33-1.5-3.33S18 16.82 18 18.33c0 .92.67 1.67 1.5 1.67m-10 2c.83 0 1.5-.75 1.5-1.67C11 18.83 9.5 17 9.5 17S8 18.82 8 20.33c0 .92.67 1.67 1.5 1.67m6.5-1.67c0-1.5-1.5-3.33-1.5-3.33S13 18.82 13 20.33c0 .92.67 1.67 1.5 1.67s1.5-.75 1.5-1.67M4.5 20c.83 0 1.5-.75 1.5-1.67C6 16.83 4.5 15 4.5 15S3 16.82 3 18.33c0 .92.67 1.67 1.5 1.67M13 4.07V2h-2v2.07C7.06 4.56 4 7.93 4 12H2v2h20v-2h-2c0-4.07-3.06-7.44-7-7.93M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6z"></path>
</svg>
              <span className="detail-label">Bathrooms</span>
              <span className="detail-value">{property.bathrooms}</span>
            </div>
            
            <div className="detail-item">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M15.5 9c-2 0-2.5 2-2.5 2h5s-.5-2-2.5-2m-7-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3"></path><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m-2 16v-3h4v3c0 1.1-.9 2-2 2s-2-.9-2-2m5.86 1c.08-.32.14-.66.14-1v-1.5c1.59-1.47 2-3.5 2-3.5H6s.41 2.02 2 3.5V18c0 .35.06.68.14 1A7.99 7.99 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 3.01-1.68 5.64-4.14 7"></path>
</svg>
              <span className="detail-label">Guests</span>
              <span className="detail-value">{property.guests}</span>
            </div>
            <div className="detail-item">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M10 19c0 1.1.89 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2m7.66-3.61c-1.51-1.51-3.52-2.34-5.66-2.34s-4.15.83-5.66 2.34l1.41 1.41c1.13-1.13 2.64-1.76 4.24-1.76s3.11.62 4.24 1.76l1.41-1.41Z"></path><path d="M20.49 12.57C18.22 10.3 15.21 9.05 12 9.05s-6.22 1.25-8.49 3.52l1.42 1.41c1.89-1.89 4.4-2.93 7.07-2.93s5.18 1.04 7.07 2.93z"></path><path d="M.69 9.69 2.1 11.1C4.74 8.46 8.26 7 12 7s7.25 1.46 9.9 4.1l1.41-1.41C20.29 6.67 16.27 5 12 5S3.71 6.66.69 9.69"></path>
</svg>
<span className="detail-label">Wi=fi</span>
              <span className="detail-value">Included</span>
            </div>
            <div className="detail-item">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox={"0 0 24 24"}>
{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M20.46 9.42c.22-.51 0-1.1-.52-1.32L6.21 2.08c-.24-.11-.52-.11-.77-.02-.25.1-.45.29-.55.53L2.08 9c-.22.51 0 1.1.52 1.32l7.14 3.13-1.42 3.54H4v-3H2v8h2v-3h5a1 1 0 0 0 .93-.63l1.65-4.11 4.77 2.09c.13.06.26.08.4.08.12 0 .25-.02.36-.07.25-.1.45-.29.55-.53l.53-1.21 1.83.8 1.75-4-1.83-.8.53-1.21Zm-4.24 4.69L4.31 8.9l2.01-4.58 11.91 5.21z"></path>
</svg>
              <span className="detail-label">Security</span>
              <span className="detail-value">24/7</span>
            </div>
          </div>
        </div>
      </section>
  
    




      <WhyChooseSection />
  

    
    
        

  
      










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

export default PropertyDetail;