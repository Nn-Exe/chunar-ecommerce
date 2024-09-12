import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-items"> {/* Grid layout for the items */}
        <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFaq(0)}>
            <span>What is Chunar.Co?</span>
            <span className="icon">{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>Chunar.Co is a premium lipstick brand known for its elegant packaging and high-quality, long-lasting shades that hydrate and enhance lips with vibrant color. The brand focuses on delivering luxurious, standout beauty products.</p>
            </div>
          )}
        </div>

        <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFaq(1)}>
            <span>How can I buy the lipsticks?</span>
            <span className="icon">{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>You can purchase Chunar.Co lipsticks directly through our website or via major e-commerce platforms like Shopee and TikTok Shop.</p>
            </div>
          )}
        </div>

        <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFaq(2)}>
            <span>How long is the shipping period?</span>
            <span className="icon">{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Chunar.Co offers fast shipping, with domestic deliveries typically arriving within 1-3 business days.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
