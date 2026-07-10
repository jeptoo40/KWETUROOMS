import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../PropertyTypeDetail.css";

import defaultHero from "../assets/default-hero.jpg";
import heroApartments from "../assets/hero-apartments.jpg";
import heroCorporate from "../assets/hero-corporate.jpg";
import heroWeekly from "../assets/hero-weekly.jpg";
import heroLongWeekend from "../assets/hero-long-weekend.jpg";
import heroVacation from "../assets/hero-vacation.jpg";
import heroShortStays from "../assets/hero-short-stays.jpg";
import heroMonthly from "../assets/hero-monthly.jpg";
import heroLongStays from "../assets/hero-long-stays.jpg";
import heroGuestHouses from "../assets/hero-guest-houses.jpg";
import heroGroups from "../assets/hero-groups.jpg";
import heroFamilyFriendly from "../assets/hero-family-friendly.jpg";



const PropertyTypeDetail = () => {
  const { typeName } = useParams();
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

 
  const typeData = {
    apartments: {
      title: "Apartments",
      description: "Discover our collection of luxury apartments in Nairobi's most prestigious neighborhoods.",
      features: ["Modern amenities", "Prime locations", "24/7 security", "Fully furnished"],
      heroImage: heroApartments,
      detailedDescription: "Experience the epitome of urban living with our carefully curated selection of luxury apartments. Each property is hand-picked for its exceptional quality, prime location, and unparalleled comfort.",
      curatedDescription: "We understand that finding the perfect apartment means more than just a place to stay. Each of our listings has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're here for work or pleasure, our homes are designed to make your stay memorable. From stunning penthouses with breathtaking skyline views to elegant apartments in Nairobi's most prestigious neighborhoods, we ensure that every property provides both aesthetic beauty and practical function. Luxury living in Nairobi has never been more accessible.",
      curatedImage: heroApartments, 
    },
    corporate: {
      title: "Corporate",
      description: "Premium corporate housing solutions for businesses and executives.",
      features: ["Corporate rates", "Flexible terms", "Executive locations", "Business amenities"],
      heroImage: heroCorporate,
      detailedDescription: "Designed for the modern professional, our corporate housing solutions provide the perfect balance of work and comfort. Enjoy fully equipped properties in prime business districts.",
      curatedDescription: "We understand that corporate travel doesn't mean compromising on comfort. Each of our corporate properties has been curated to reflect unparalleled quality – from the workspaces and amenities to the locations themselves. Whether you're here for a business meeting or an extended project, our homes are designed to make your stay productive and memorable. From executive apartments with dedicated workspaces to penthouses with breathtaking views, we ensure that every property provides both professional function and aesthetic beauty.",
      curatedImage: heroCorporate,
    },
    weekly: {
      title: "Weekly",
      description: " ",
      features: ["Weekly cleaning", "Concierge support", "Prime locations", "Flexible short-term stays"],
      heroImage: heroWeekly,
      detailedDescription: "Our weekly rentals offer the perfect blend of hotel convenience and home comfort. Whether you're a business traveler, relocating, or simply seeking a luxurious short-term retreat, our hand-selected properties provide an exceptional experience. Each home is professionally managed and comes with dedicated concierge support to ensure your stay is seamless.",
      curatedDescription: "We understand that short-term stays don't mean compromising on comfort. Each of our weekly listings has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're here for work or pleasure, our homes are designed to make your stay memorable. From stunning penthouses with breathtaking views to elegant apartments in Nairobi's most prestigious neighborhoods, we ensure that every property provides both aesthetic beauty and practical function. Luxury living in Nairobi has never been more accessible for the discerning short-term guest.",
      curatedImage: heroWeekly,
    },
    "long-weekend": {
      title: "Long Weekend",
      description: " ",
      features: ["Perfect for getaways", "Prime locations", "Fully equipped homes", "Flexible check-in"],
      heroImage: heroLongWeekend,
      detailedDescription: "Escape the ordinary with a luxurious long weekend in one of our premium properties. Perfect for spontaneous getaways or planned mini-vacations, each home offers the perfect sanctuary to unwind and recharge.",
      curatedDescription: "We understand that a long weekend is the perfect opportunity to recharge. Each of our properties has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're escaping the city or exploring it, our homes are designed to make your getaway truly memorable. From stylish apartments with panoramic views to cozy retreats in peaceful neighborhoods, we ensure that every property provides both aesthetic beauty and practical comfort. Luxury living has never been more accessible for your weekend escape.",
      curatedImage: heroLongWeekend,
    },
    vacation: {
      title: "Vacation",
      description: "  ",
      features: ["Ideal for vacations", "Family-friendly", "Premium locations", "Concierge service"],
      heroImage: heroVacation,
      detailedDescription: "Transform your dream vacation into reality with our exclusive collection of vacation homes. Each property offers a unique experience with premium amenities and prime locations.",
      curatedDescription: "We understand that a dream vacation deserves a dream home. Each of our vacation properties has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're traveling with family or friends, our homes are designed to make your stay truly unforgettable. From beachfront villas to city-center penthouses, we ensure that every property provides both aesthetic beauty and practical function. Luxury living has never been more accessible for the discerning traveler.",
      curatedImage: heroVacation,
    },
    "short-stays": {
      title: "  ",
      description: "Perfect for business travelers or those needing a short-term stay.",
      features: ["Flexible booking", "Corporate rates", "Fully furnished", "24/7 support"],
      heroImage: heroShortStays,
      detailedDescription: "Ideal for business trips or temporary relocation, our short-stay properties offer flexibility without compromising on quality. Enjoy fully furnished homes with all the comforts you need.",
      curatedDescription: "We understand that short stays require flexibility without sacrificing quality. Each of our properties has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're in town for a meeting or a quick getaway, our homes are designed to make your stay comfortable and memorable. From modern studios to spacious apartments, we ensure that every property provides both aesthetic beauty and practical function.",
      curatedImage: heroShortStays,
    },
    monthly: {
      title: "Monthly",
      description: " ",
      features: ["Spacious homes", "Monthly cleaning", "Ideal for corporate housing", "Flexible terms"],
      heroImage: heroMonthly,
      detailedDescription: "Indulge in the luxury of extended stays with our monthly rental options. Perfect for those seeking a home away from home, our properties offer generous spaces and premium amenities.",
      curatedDescription: "We understand that a month-long stay should feel like home. Each of our monthly properties has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're on an extended work assignment or simply exploring the city, our homes are designed to make your stay comfortable and memorable. From spacious family homes to elegant city apartments, we ensure that every property provides both aesthetic beauty and practical function.",
      curatedImage: heroMonthly,
    },
    "long-stays": {
      title: "Long Stays",
      description: " ",
      features: ["Discounted rates", "Full furnishings", "Utilities included", "Prime locations"],
      heroImage: heroLongStays,
      detailedDescription: "Feel truly at home with our long-stay options, designed for comfort and convenience. Enjoy discounted rates and the peace of mind that comes with a fully furnished, utilities-included property.",
      curatedDescription: "We understand that long-term stays require more than just a place to sleep. Each of our long-stay properties has been curated to reflect unparalleled quality – from the interiors and amenities to the locations themselves. Whether you're relocating, on assignment, or simply want a home away from home, our properties are designed to make your extended stay comfortable and memorable. From cozy apartments to spacious houses, we ensure that every property provides both aesthetic beauty and practical function.",
      curatedImage: heroLongStays,
    }
  
   
  };

  const data = typeData[typeName];

  if (!data) {
    return (
      <div>
     
        <div className="type-not-found">
          <h1>Property Type Not Found</h1>
          <p>Sorry, we couldn't find this property type.</p>
          <Link to="/property-type" className="back-btn">Back to Property Types</Link>
        </div>
       
      </div>
    );
  }

  const heroImage = data.heroImage || defaultHero;
  const curatedImage = data.curatedImage || heroImage; 

  return (
    <div>
    

      
      <section
        className="property-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          minHeight: "400px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            padding: "0 20px",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.8", opacity: 0.95, textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
            {data.description}
          </p>
        </div>
      </section>

     
      <section className="property-detail-section">
        <div className="container">
          <div className="detail-wrapper">
            <div className="detail-text">
              <h2>Why Choose {data.title}?</h2>
              <p className="detail-paragraph">{data.detailedDescription || data.description}</p>
            </div>
            <div className="detail-features-list">
              <ul>
                {data.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

   
      <section className="curated-section">
        <div className="container">
          <div className="curated-wrapper">
            <div className="curated-text">
              <h2 className="curated-title">Curated for Unmatched Comfort and Style</h2>
              <div className="curated-content">
                <p>{data.curatedDescription}</p>
              </div>
              <div className="curated-contact">
                <Link to="/contact" className="curated-cta-link">CONTACT US</Link>
              </div>
            </div>
            <div className="curated-image">
              <img src={curatedImage} alt={`${data.title} curated`} />
            </div>
          </div>
        </div>
      </section>

  
      <section className="cta-section">
        <div className="container">
          <div className="detail-cta">
            <Link to="/properties" className="cta-btn">Browse {data.title}</Link>
            <Link to="/property-type" className="cta-btn-secondary">View All Types</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyTypeDetail;