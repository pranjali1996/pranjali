/**
 * Antigravity Personal Academic Website JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initThemeToggle();
  initMobileMenu();
  initPublications();
  initBibtexModal();
  initContactForm();
  initTiltEffects();
  initScrollObserver();
  initActivityFilters();
});

/* ==========================================================================
   1. Interactive Generative Particle Canvas
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#6366f1' : '#06b6d4';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let angle = Math.atan2(dy, dx);
          let force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((width * height) / 14000);
    for (let i = 0; i < Math.min(count, 90); i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          let opacity = (1 - dist / 130) * 0.25;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  resize();
  animate();
}

/* ==========================================================================
   2. Dark / Light Theme Controller
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  }
}

/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

/* ==========================================================================
   4. Publication Showcase Engine
   ========================================================================== */
let activeCategory = 'all';
let searchQuery = '';

function initPublications() {
  renderPublications();

  // Category Filters
  const filterBtns = document.querySelectorAll('.pub-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-filter');
      renderPublications();
    });
  });

  // Search Bar
  const searchInput = document.getElementById('pub-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPublications();
    });
  }
}

function renderPublications() {
  const container = document.getElementById('pub-list-container');
  if (!container || typeof PUBLICATIONS === 'undefined') return;

  const filtered = PUBLICATIONS.filter(pub => {
    const matchesCategory = activeCategory === 'all' || pub.category === activeCategory;
    const matchesSearch = !searchQuery ||
      pub.title.toLowerCase().includes(searchQuery) ||
      pub.authors.toLowerCase().includes(searchQuery) ||
      pub.venue.toLowerCase().includes(searchQuery) ||
      pub.abstract.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align: center; padding: 3rem;">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="margin-bottom: 0.5rem;">No publications found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or category filter.</p>
      </div>
    `;
    return;
  }

  // Highlight author name "Pranjali Singh" in author string
  container.innerHTML = filtered.map(pub => {
    const highlightedAuthors = pub.authors.replace(
      /Pranjali Singh/g,
      '<strong>Pranjali Singh</strong>'
    );

    return `
      <article class="pub-card" id="${pub.id}">
        <div class="pub-card-header">
          <h3 class="pub-title">${pub.title}</h3>
          <span class="pub-badge ${pub.badgeType}">${pub.badge}</span>
        </div>
        <div class="pub-authors">${highlightedAuthors}</div>
        <div class="pub-venue">
          <i class="fas fa-graduation-cap"></i> ${pub.venue} (${pub.year})
        </div>
        <div class="pub-abstract-toggle" onclick="toggleAbstract('${pub.id}')">
          <i class="fas fa-chevron-down" id="arrow-${pub.id}"></i> Read Abstract
        </div>
        <div class="pub-abstract-content" id="abstract-${pub.id}">
          ${pub.abstract}
        </div>
        <div class="pub-actions">
          
          <a href="${pub.codeUrl}" class="pub-btn" target="_blank" rel="noopener">
            <i class="fab fa-github"></i> Code
          </a>
          <button class="pub-btn" onclick="openBibtexModal('${pub.id}')">
            <i class="fas fa-quote-left"></i> BibTeX
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function toggleAbstract(pubId) {
  const abstractEl = document.getElementById(`abstract-${pubId}`);
  const arrowEl = document.getElementById(`arrow-${pubId}`);
  if (abstractEl) {
    abstractEl.classList.toggle('open');
    if (arrowEl) {
      arrowEl.style.transform = abstractEl.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  }
}

/* ==========================================================================
   5. BibTeX Modal Dialog & Copy Handler
   ========================================================================== */
function initBibtexModal() {
  const modal = document.getElementById('bibtex-modal');
  const closeBtn = document.getElementById('modal-close');
  const copyBtn = document.getElementById('copy-bibtex-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeBibtexModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBibtexModal();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.getElementById('bibtex-code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        showToast('BibTeX copied to clipboard!');
      }).catch(err => {
        showToast('Failed to copy BibTeX');
      });
    });
  }
}

function openBibtexModal(pubId) {
  const pub = PUBLICATIONS.find(p => p.id === pubId);
  if (!pub) return;

  const modal = document.getElementById('bibtex-modal');
  const codeEl = document.getElementById('bibtex-code');
  if (modal && codeEl) {
    codeEl.innerText = pub.bibtex;
    modal.classList.add('active');
  }
}

function closeBibtexModal() {
  const modal = document.getElementById('bibtex-modal');
  if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   6. Contact Form & Toast Alerts
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast('Thank you! Your message has been sent successfully.');
    }, 1200);
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-secondary);"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ==========================================================================
   7. 3D Tilt Card Perspective Effect
   ========================================================================== */
function initTiltEffects() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   8. Scroll Observer for Active Navbar Links
   ========================================================================== */
function initScrollObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   9. Activity & Certification Filters
   ========================================================================== */
function initActivityFilters() {
  const filterBtns = document.querySelectorAll('.activity-filter-btn');
  const cards = document.querySelectorAll('.activity-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            if (btn.classList.contains('active') && btn.getAttribute('data-filter') !== 'all' && card.getAttribute('data-category') !== btn.getAttribute('data-filter')) {
              card.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });
}
