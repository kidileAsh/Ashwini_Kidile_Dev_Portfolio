
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const year = document.querySelector('#year');

  // Mobile navigation
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu when a navigation link is selected
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close the menu with the Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Close the menu when clicking outside the navigation
    document.addEventListener('click', (event) => {
      if (
        navLinks.classList.contains('open') &&
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        closeMenu();
      }
    });
  }

  // Update the copyright year automatically
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
