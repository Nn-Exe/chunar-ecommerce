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
            <span>What is Chunar?</span>
            <span className="icon">{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>Chunar is a dropshipping marketplace that lets you build your own cosmetic and skincare line with minimal upfront costs...</p>
            </div>
          )}
        </div>

        <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFaq(1)}>
            <span>What is private label dropshipping?</span>
            <span className="icon">{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>Private label dropshipping allows you to sell products from suppliers with your own branding...</p>
            </div>
          )}
        </div>

        <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFaq(2)}>
            <span>How can I customize my package?</span>
            <span className="icon">{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Private labeling is a great way to showcase your brand...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
