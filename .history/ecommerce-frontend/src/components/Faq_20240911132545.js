function toggleFaq(element) {
    const faqItem = element.parentNode;
    const icon = faqItem.querySelector('.icon');
    const isActive = faqItem.classList.contains('active');
  
    // Toggle the active class on the clicked item
    faqItem.classList.toggle('active');
  
    // Update the icon accordingly
    icon.textContent = isActive ? "+" : "-";
  }
  