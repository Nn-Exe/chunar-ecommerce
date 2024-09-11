import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section mx-auto max-w-6xl text-center">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Responsive grid for 2 items per row */}
        <div className={`faq-item bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${activeIndex === 0 ? 'scale-105' : ''}`}>
          <div
            className="faq-question p-5 cursor-pointer flex justify-between items-center text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => toggleFaq(0)}
          >
            <span>What is Jubilee?</span>
            <span className={`transform transition-transform duration-300 ${activeIndex === 0 ? 'rotate-45' : ''}`}>+</span>
          </div>
          <div
            className={`faq-answer px-5 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 0 ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0'}`}
          >
            <p>Jubilee is a dropshipping marketplace that lets you build your own cosmetic and skincare line with minimal upfront costs. You can find high-quality beauty products with customizable attributes like logos and branded invoicing.</p>
          </div>
        </div>

        <div className={`faq-item bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${activeIndex === 1 ? 'scale-105' : ''}`}>
          <div
            className="faq-question p-5 cursor-pointer flex justify-between items-center text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => toggleFaq(1)}
          >
            <span>What is private label dropshipping?</span>
            <span className={`transform transition-transform duration-300 ${activeIndex === 1 ? 'rotate-45' : ''}`}>+</span>
          </div>
          <div
            className={`faq-answer px-5 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 1 ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0'}`}
          >
            <p>Private label dropshipping allows you to sell products from suppliers with your own branding. It’s a great way to promote your brand with minimal effort.</p>
          </div>
        </div>

        <div className={`faq-item bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${activeIndex === 2 ? 'scale-105' : ''}`}>
          <div
            className="faq-question p-5 cursor-pointer flex justify-between items-center text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => toggleFaq(2)}
          >
            <span>How can I customize my package?</span>
            <span className={`transform transition-transform duration-300 ${activeIndex === 2 ? 'rotate-45' : ''}`}>+</span>
          </div>
          <div
            className={`faq-answer px-5 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 2 ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0'}`}
          >
            <p>Private labeling is a great way to showcase your brand! As a retailer, you have the power to control how the packaging of the products will look that will be directly delivered to your customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
