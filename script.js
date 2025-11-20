// ===== Dynamic Age & Year =====
(() => {
  const bday = new Date('2008-07-19T00:00:00');
  const now = new Date();

  let age = now.getFullYear() - bday.getFullYear();
  const month = now.getMonth() - bday.getMonth();

  if (month < 0 || (month === 0 && now.getDate() < bday.getDate())) {
    age--;
  }

  const ageEl = document.getElementById('age');
  if (ageEl) ageEl.textContent = age;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = now.getFullYear();
})();

// ===== Mobile Menu =====
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
}

// ===== Smooth Scroll (Close Menu) =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (menu) menu.classList.remove('open');
  });
});

// ===== Reveal on Scroll =====
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
