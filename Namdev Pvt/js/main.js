/* ==========================================================================
   MAIN ENTRY POINT — js/main.js
   ========================================================================== */

/*
 * All modules are self-initializing IIFEs that bind to DOMContentLoaded.
 * This file exists as the single entry point referenced by index.html.
 * Individual modules: theme.js, navbar.js, animations.js
 *
 * Load order in index.html:
 *   1. theme.js     — applies saved theme immediately (prevents flash)
 *   2. navbar.js    — scroll shadow + mobile menu
 *   3. animations.js — IntersectionObserver scroll-reveal
 *   4. main.js      — this file (reserved for future global init)
 */
