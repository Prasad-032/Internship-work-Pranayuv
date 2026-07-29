// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.intro-text, .intro-visual, .feature-text, .feature-cards, .overview-inner, .contact-inner'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Contact form submit
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#2a9d8f';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// 3D Modal
const modal3D = document.getElementById('modal3D');
const open3D  = document.getElementById('open3D');
const close3D = document.getElementById('close3D');

open3D.addEventListener('click', () => {
  modal3D.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  modal3D.classList.remove('active');
  document.body.style.overflow = '';
}

close3D.addEventListener('click', closeModal);

// Close on backdrop click
modal3D.addEventListener('click', (e) => {
  if (e.target === modal3D) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
