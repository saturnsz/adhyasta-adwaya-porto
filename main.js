// Navbar: no scroll class needed for floating pill (stays same styling)
// But we can add a slight shadow on scroll for extra polish
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.transform = 'translateX(-50%)';
    }
  });
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => observer.observe(el));
}

// Active nav highlight based on current page
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Lightbox for certificate page
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  if (!lightbox) return;

  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox');
      lightboxImg.src = src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

// Subtle parallax on hero bg number
function initHeroParallax() {
  const bgNum = document.querySelector('.hero-bg-number');
  if (!bgNum) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    bgNum.style.transform = `translateY(calc(-50% + ${scrolled * 0.15}px))`;
  }, { passive: true });
}



document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  setActiveNav();
  initLightbox();
  initHeroParallax();
});
