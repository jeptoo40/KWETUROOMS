import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image1 from "../assets/blog-image-1.jpg";
import image2 from "../assets/blog-image-2.jpg";
import image3 from "../assets/blog-image-3.jpg";
import "../Blog.css";

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      date: "JUNE 18, 2026",
      category: "AREA GUIDE",
      title: "How to Find a Luxury Holiday Rental in London That Suits Your Group",
      excerpt: "To find a luxury group rental in London, first confirm group size, per-person budget, and sleeping configurations, then aim for one bathroom per three guests and a communal space that seats everyone. Mayfair, Notting Hill, and South Kensington suit different group priorities, from nightlife access to family-friendly attractions. Always request an itemised quote, check group occupancy insurance, and confirm the property complies with London's 90-day short-let rule. Groups of four or more staying three nights or longer typically save versus equivalent hotel rooms.",
      image: image1,
      link: "/blog/how-to-find-luxury-holiday-rental-london"
    },
    {
      id: 2,
      date: "JUNE 10, 2026",
      category: "TRAVEL TIPS",
      title: "Why Families Prefer Monthly Rentals Over Hotels",
      excerpt: "Monthly rentals offer families more space, privacy, and value compared to traditional hotel stays. Learn why this trend is growing and how to choose the perfect property for your family's needs.",
      image: image2,
      link: "/blog/families-prefer-monthly-rentals"
    },
    {
      id: 3,
      date: "JUNE 2, 2026",
      category: "LUXURY LIVING",
      title: "Top 10 Luxury Amenities Guests Love Most",
      excerpt: "From private cinemas to rooftop terraces, discover the most sought-after amenities that make a luxury stay truly unforgettable for discerning travelers.",
      image: image3,
      link: "/blog/top-10-luxury-amenities"
    }
  ];

  return (
    <div>
      <Navbar />

      {/* Blog Section - Full width cards with image left, text right */}
      <section className="blog-section">
        <div className="container">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-category">{post.category}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href={post.link} className="blog-read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;