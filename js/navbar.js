/* ==========================================================================
   NAVBAR MODULE — js/navbar.js
   Handles scroll-based shadow, mobile menu toggle, and close-on-link-click
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // --- Scroll Shadow ---
    var navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      });
    }

    // --- Mobile Menu Toggle ---
    var mobileToggle = document.getElementById('mobileToggle');
    var navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', function () {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileToggle.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }
  });
})();
