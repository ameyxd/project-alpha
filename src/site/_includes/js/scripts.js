/**
 * Amey Ambade's Personal Website
 * Main JavaScript functionality
 */

(function() {
  'use strict';

  // ==========================================================================
  // Theme Toggle
  // Handles dark/light mode switching with system preference detection
  // ==========================================================================

  const themeToggle = document.querySelector('.theme-toggle');

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    return localStorage.getItem('theme');
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  // Initialize theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only update if user hasn't explicitly set a preference
    if (!getStoredTheme()) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  // ==========================================================================
  // Reading Progress Bar
  // Shows scroll progress at the top of the page
  // ==========================================================================

  const progressBar = document.querySelector('.progress-bar__fill');

  function updateProgressBar() {
    if (!progressBar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }

  // Throttle scroll events for performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateProgressBar();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial update
  updateProgressBar();

  // ==========================================================================
  // Scroll Animations
  // Reveals elements as they enter the viewport
  // ==========================================================================

  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-scale');

  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionally stop observing after animation
            // animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animatedElements.forEach((el) => {
      animationObserver.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    animatedElements.forEach((el) => {
      el.classList.add('is-visible');
    });
  }

  // ==========================================================================
  // Bucket List Interactivity
  // Handles checkbox animations and state
  // ==========================================================================

  const bucketItems = document.querySelectorAll('.bucket-item');

  bucketItems.forEach((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');

    if (checkbox) {
      // Update item state based on checkbox
      const updateItemState = () => {
        if (checkbox.checked) {
          item.classList.add('bucket-item--checked');
        } else {
          item.classList.remove('bucket-item--checked');
        }
      };

      checkbox.addEventListener('change', updateItemState);
      updateItemState(); // Initial state
    }
  });

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ==========================================================================
  // Section Cards Animation
  // Stagger animation for card grids
  // ==========================================================================

  const staggerContainers = document.querySelectorAll('.stagger-container');

  staggerContainers.forEach((container) => {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 50}ms`;
    });
  });

  // ==========================================================================
  // Keyboard Navigation Enhancements
  // ==========================================================================

  // Focus visible polyfill-like behavior
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
  });

  // ==========================================================================
  // Reduced Motion Detection
  // ==========================================================================

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function handleReducedMotion() {
    if (prefersReducedMotion.matches) {
      // Disable scroll behavior smooth
      document.documentElement.style.scrollBehavior = 'auto';
    } else {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }

  prefersReducedMotion.addEventListener('change', handleReducedMotion);
  handleReducedMotion();

  // ==========================================================================
  // Theme Preview via URL Parameter (for testing)
  // Usage: ?theme=dark or ?theme=light
  // ==========================================================================

  const urlParams = new URLSearchParams(window.location.search);
  const themeParam = urlParams.get('theme');

  if (themeParam === 'dark' || themeParam === 'light') {
    setTheme(themeParam);
  }

})();
