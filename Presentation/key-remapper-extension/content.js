// Simple F19/F20 to Arrow Key Remapper
(function() {
  'use strict';
  
  console.log('F19/F20 Key Remapper loaded');
  
  // Function to simulate arrow key press
  function simulateArrowKey(direction) {
    const key = direction === 'left' ? 'ArrowLeft' : 'ArrowRight';
    const keyCode = direction === 'left' ? 37 : 39;
    
    // Create and dispatch a new keyboard event
    const event = new KeyboardEvent('keydown', {
      key: key,
      code: key,
      keyCode: keyCode,
      which: keyCode,
      bubbles: true,
      cancelable: true
    });
    
    // Dispatch to the focused element or document
    const target = document.activeElement || document;
    target.dispatchEvent(event);
    
    console.log(`Simulated ${key} press`);
  }
  
  // Key event handler
  function handleKeyDown(e) {
    let remapped = false;
    
    // F19 → Left Arrow
    if (e.code === 'F19' || e.key === 'F19') {
      console.log('F19 detected - remapping to Left Arrow');
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      simulateArrowKey('left');
      remapped = true;
    }
    // F20 → Right Arrow  
    else if (e.code === 'F20' || e.key === 'F20') {
      console.log('F20 detected - remapping to Right Arrow');
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      simulateArrowKey('right');
      remapped = true;
    }
    
    if (remapped) {
      return false;
    }
  }
  
  // Add event listeners with highest priority (capture phase)
  document.addEventListener('keydown', handleKeyDown, true);
  window.addEventListener('keydown', handleKeyDown, true);
  
  // Also add to body when it's available
  if (document.body) {
    document.body.addEventListener('keydown', handleKeyDown, true);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('keydown', handleKeyDown, true);
    });
  }
  
  console.log('F19→LeftArrow, F20→RightArrow remapping active');
})();