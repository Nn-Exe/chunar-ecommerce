import React, { useState, useEffect } from 'react';


const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Supisara Permsuk',
      title: 'Chunar.Co Store Owner',
      text: '“I can’t say enough good things about Chunar. Our dropshipping model is efficient, and the product quality is excellent...”',
      stars: 5,
    },
    {
      name: 'Supapis Permsuk',
      title: 'Chunar.Co Store Owner',
      text: '“Starting my own beauty brand seemed daunting, but Jubilee made it incredibly easy. The customization options are fantastic...”',
      stars: 5,
    },
    {
      name: 'Another Testimonial',
      title: 'Shopify Store Owner',
      text: '“Another positive review about how amazing Jubilee is.”',
      stars: 4,
    },
    {
      name: 'Final Testimonial',
      title: 'Shopify Store Owner',
      text: '“Jubilee is a great choice for entrepreneurs looking to build their own brand.”',
      stars: 5,
    },
    {
      name: 'Final Testimonial',
      title: 'Shopify Store Owner',
      text: '“Jubilee is a great choice for entrepreneurs looking to build their own brand.”',
      stars: 5,
    },
    {
      name: 'Final Testimonial',
      title: 'Shopify Store Owner',
      text: '“Jubilee is a great choice for entrepreneurs looking to build their own brand.”',
      stars: 5,
    }
  ];

  // Calculate the number of slides needed (two testimonials per slide)
  const totalSlides = Math.ceil(testimonials.length / 2);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalSlides]);

  // Function to move the slides manually
  const moveSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonial-section">
      <h2>Retailers Experience</h2>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`, // Move by 100% per slide
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card-wrapper" key={index}>
              <div className="testimonial-card">
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
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="dots">
        {[...Array(totalSlides)].map((_, index) => (
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
