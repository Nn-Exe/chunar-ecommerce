import React, { useState, useEffect } from 'react';


const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Kate Burton Company',
      title: 'Shopify Store Owner',
      text: '“I can’t say enough good things about Jubilee. Their dropshipping model is efficient, and the product quality is excellent...”',
      stars: 5,
    },
    {
      name: 'Zelogic',
      title: 'Shopify Store Owner',
      text: '“Starting my own beauty brand seemed daunting, but Jubilee made it incredibly easy. The customization options are fantastic...”',
      stars: 5,
    },
    {
      name: 'Zelogic',
      title: 'Shopify Store Owner',
      text: '“Starting my own beauty brand seemed daunting, but Jubilee made it incredibly easy. The customization options are fantastic...”',
      stars: 5,
    },
    {
      name: 'Zelogic',
      title: 'Shopify Store Owner',
      text: '“Starting my own beauty brand seemed daunting, but Jubilee made it incredibly easy. The customization options are fantastic...”',
      stars: 5,
    },
    {
      name: 'Zelogic',
      title: 'Shopify Store Owner',
      text: '“Starting my own beauty brand seemed daunting, but Jubilee made it incredibly easy. The customization options are fantastic...”',
      stars: 5,
    },
    // Add more testimonials here if needed
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length); // Loop through slides
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [testimonials.length]);

  // Function to move the slides manually
  const moveSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonial-section">
      <h2>Retailers Experience</h2>
      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            style={{
              transform: `translateX(-${currentSlide * 320}px)`, // Slide the cards
            }}
          >
            <div className="profile">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
              />
              <div className="profile-details">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
            <p>{testimonial.text}</p>
            <div className="stars">
              {'⭐'.repeat(testimonial.stars)}
            </div>
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => moveSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
