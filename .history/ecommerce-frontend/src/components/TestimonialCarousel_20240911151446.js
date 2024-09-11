let currentSlideIndex = 0;

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');

  // Ensure index is in range
  if (n > slides.length) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = slides.length;

  // Hide all slides
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${(n - 1) * 320}px)`;
  });

  // Remove active class from all dots
  dots.forEach((dot) => dot.classList.remove('active'));

  // Add active class to the current dot
  dots[n - 1].classList.add('active');
}

export default TestimonialCarousel;