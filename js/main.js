/* ============================================
   ALMA — JavaScript Global
   ============================================ */

// Navigation scroll effect
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
})();

// Mobile menu toggle
(function() {
  const toggleBtn = document.getElementById('nav-mobile-toggle');
  const closeBtn = document.getElementById('nav-mobile-close');
  const mobileMenu = document.getElementById('nav-mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', function() {
    mobileMenu.classList.add('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
    });
  }

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
    });
  });
})();

// Intersection observer for fade-in animations
(function() {
  const elements = document.querySelectorAll('.observe');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

// Waitlist form
(function() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
      firstname: form.querySelector('[name="firstname"]').value,
      email: form.querySelector('[name="email"]').value,
      city: form.querySelector('[name="city"]').value,
      age: form.querySelector('[name="age"]').value,
      timestamp: new Date().toISOString()
    };

    // En production, remplacer par votre vraie API
    // Exemples : Brevo, Mailchimp, Airtable, Notion API
    console.log('Inscription liste d\'attente:', data);

    // Simulation de succès
    const successDiv = document.getElementById('waitlist-success');
    if (successDiv) {
      form.style.display = 'none';
      successDiv.classList.add('show');
    }

    // À implémenter en production :
    // try {
    //   const response = await fetch('/api/waitlist', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   });
    //   if (response.ok) { successDiv.classList.add('show'); }
    // } catch (error) { console.error(error); }
  });
})();

// FAQ accordion
(function() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('open');
    });
  });
})();

// Smooth scroll for anchor links
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
      }
    });
  });
})();

// Highlight current page in navigation
(function() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath ||
        (currentPath === '/' && linkPath === '/index.html') ||
        (currentPath.endsWith('/') && linkPath === currentPath.replace(/\/$/, ''))) {
      link.classList.add('active');
    }
  });
})();
