/* ==========================================================================
   THEME MODULE — js/theme.js
   Handles dark/light mode toggle with localStorage persistence
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'nlf-theme';

  /**
   * Get the saved theme from localStorage, or default to 'dark'.
   */
  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  /**
   * Apply the given theme to the document and update the toggle button icon.
   */
  function applyTheme(theme) {
    var html = document.documentElement;
    var toggleBtn = document.getElementById('themeToggle');

    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }

    // Update button icon: moon in light mode (to switch to dark), sun in dark (to switch to light)
    if (toggleBtn) {
      if (theme === 'light') {
        toggleBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
        toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      } else {
        toggleBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
        toggleBtn.setAttribute('aria-label', 'Switch to light mode');
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* localStorage unavailable */ }
  }

  // Apply saved theme immediately (before DOMContentLoaded to prevent flash)
  applyTheme(getSavedTheme());

  // Bind toggle button after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    // Re-apply to update the icon (button now exists in DOM)
    applyTheme(getSavedTheme());

    toggleBtn.addEventListener('click', function () {
      var currentTheme = document.documentElement.hasAttribute('data-theme') ? 'light' : 'dark';
      var newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });
})();
