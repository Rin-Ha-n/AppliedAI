// Marp F20 Navigation Extension
(function() {
  'use strict';
  
  // Check if this is a Marp presentation
  function isMarpPresentation() {
    return document.querySelector('.bespoke-marp-parent') !== null ||
           document.querySelector('.bespoke-marp-slide') !== null ||
           document.querySelector('[data-bespoke-marp-osc]') !== null;
  }
  
  // Wait for page to load and check if it's a Marp presentation
  function initialize() {
    if (!isMarpPresentation()) {
      return; // Not a Marp presentation, exit
    }
    
    console.log('Marp presentation detected - enabling F20 navigation');
    
    let deck = null;
    let checkCount = 0;
    
    // Function to find the Bespoke deck instance
    function findDeck() {
      const parent = document.querySelector('.bespoke-marp-parent');
      
      if (parent && parent.__bespoke__) {
        return parent.__bespoke__;
      }
      
      if (window.bespoke) {
        return window.bespoke;
      }
      
      const slides = document.querySelectorAll('.bespoke-marp-slide');
      if (slides.length > 0) {
        return 'dom'; // Use DOM manipulation
      }
      
      return null;
    }
    
    // Function to navigate using DOM manipulation
    function navigateWithDOM(direction) {
      const slides = Array.from(document.querySelectorAll('.bespoke-marp-slide'));
      const activeSlide = document.querySelector('.bespoke-marp-slide.bespoke-marp-active');
      
      if (!activeSlide || slides.length === 0) return;
      
      const currentIndex = slides.indexOf(activeSlide);
      let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      
      if (nextIndex >= 0 && nextIndex < slides.length) {
        const button = document.querySelector(direction === 'next' ? 
          'button[data-bespoke-marp-osc="next"]' : 
          'button[data-bespoke-marp-osc="prev"]');
        
        if (button) {
          button.click();
        }
      }
    }
    
    // Try to find the deck with retries
    function initWithRetry() {
      deck = findDeck();
      checkCount++;
      
      if (deck) {
        console.log('Bespoke deck found - F20 navigation enabled');
        
        // F20 key handler
        const handleKey = function(e) {
          if (e.code === 'F20' || e.key === 'F20') {
            console.log('F20 pressed - navigating forward');
            e.preventDefault();
            e.stopPropagation();
            
            try {
              if (deck === 'dom') {
                navigateWithDOM('next');
              } else {
                deck.next();
              }
            } catch (error) {
              console.error('Navigation error:', error);
            }
            return false;
          }
        };
        
        // Add event listeners
        window.addEventListener('keydown', handleKey, true);
        document.addEventListener('keydown', handleKey, true);
        
      } else if (checkCount < 10) {
        setTimeout(initWithRetry, 200);
      } else {
        console.log('Could not find Bespoke deck for F20 navigation');
      }
    }
    
    initWithRetry();
  }
  
  // Initialize when page is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();