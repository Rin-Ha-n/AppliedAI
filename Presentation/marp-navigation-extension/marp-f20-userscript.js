// ==UserScript==
// @name         Marp F20 Navigation
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add F20 navigation to Marp presentations
// @author       You
// @match        file://*/*.html
// @match        http://*/*.html
// @match        https://*/*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Check if this is a Marp presentation
    function isMarpPresentation() {
        return document.querySelector('.bespoke-marp-parent') !== null ||
               document.querySelector('.bespoke-marp-slide') !== null;
    }
    
    if (!isMarpPresentation()) {
        return; // Not a Marp presentation
    }
    
    console.log('Marp presentation detected - enabling F20 navigation');
    
    let deck = null;
    
    function findDeck() {
        const parent = document.querySelector('.bespoke-marp-parent');
        if (parent && parent.__bespoke__) {
            return parent.__bespoke__;
        }
        const slides = document.querySelectorAll('.bespoke-marp-slide');
        if (slides.length > 0) {
            return 'dom';
        }
        return null;
    }
    
    function navigateWithDOM() {
        const button = document.querySelector('button[data-bespoke-marp-osc="next"]');
        if (button) button.click();
    }
    
    setTimeout(() => {
        deck = findDeck();
        if (deck) {
            window.addEventListener('keydown', function(e) {
                if (e.code === 'F20') {
                    e.preventDefault();
                    if (deck === 'dom') {
                        navigateWithDOM();
                    } else {
                        deck.next();
                    }
                }
            }, true);
            console.log('F20 navigation enabled');
        }
    }, 500);
})();