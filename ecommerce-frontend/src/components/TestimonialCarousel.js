import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Supisara Permsuk',
      title: 'Chunar.Co Store Owner',
      text: '“I can’t say enough good things about Chunar. Elegant packaging and even more stunning shades—Chunar.Co lipsticks are a must-have!”',
      stars: 5,
      image: 'https://github.com/Nn-Exe/chunar-images/blob/master/testimonial/fern.jpg?raw=true', // Example image URL
    },
    {
      name: 'Supapis Permsuk',
      title: 'Chunar.Co Store Owner',
      text: '“Chunar.Co lipsticks feel luxurious and keep your lips hydrated all day!”',
      stars: 5,
      image: 'https://github.com/Nn-Exe/chunar-images/blob/master/testimonial/fah.jpg?raw=true', // Example image URL
    },
    {
      name: 'yingrin19',
      title: 'Shopee Reviewer',
      text: '“Chunar.Co lipstick delivers vibrant, long-lasting color with a smooth finish!”',
      stars: 4,
      image: 'https://github.com/Nn-Exe/chunar-images/blob/master/testimonial/ai%20review.jpg?raw=true', // Example image URL
    },
    {
      name: 'Anabella',
      title: 'Tiktok Testimonial',
      text: 'Bold, beautiful, and made to last—Chunar.Co lipstick is perfection in a tube!”',
      stars: 5,
      image: 'https://github.com/Nn-Exe/chunar-images/blob/master/testimonial/ai%20review2.jpg?raw=true', // Example image URL
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

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
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card-wrapper" key={index}>
              <div className="testimonial-card">
                <div className="profile">
                  <img
                    src={testimonial.image} // Dynamic image from the testimonial object
                    alt={`${testimonial.name} profile`} // Descriptive alt text
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
