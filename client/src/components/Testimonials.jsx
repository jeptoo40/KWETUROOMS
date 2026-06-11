
import { useRef, useEffect } from "react";
function Testimonials() {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      text: "Fantastic location, even better than the pictures inside and everything you could need.",
      author: "Isobella - Nairobi, Kenya",
    },
    {
      text: "What a wonderful place to stay! Amazing location, spotless and homely.",
      author: "Clare - Nakuru, Kenta",
    },
    {
      text: "A wonderful apartment: clean, well decorated, functional and extremely well located.",
      author: "Bruno - kisumu, Kenya",
    },
    {
      text: "This apartment exceeded expectations and made our trip special.",
      author: "Sarah - Kiambu, Kenya",
    },
  ];

  return (
    <section className="testimonials-section">

      <p className="testimonial-subtitle">
        WHAT OUR CLIENTS HAVE TO SAY
      </p>

      <div className="testimonial-header">
        <h2>Client Testimonials</h2>

        <div className="testimonial-nav">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="testimonial-slider" ref={sliderRef}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p>{item.text}</p>

            <h4>{item.author}</h4>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;