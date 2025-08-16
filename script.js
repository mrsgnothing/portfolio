// ===== Dynamic Age & Year =====
(function(){
  const bday = new Date('2008-07-19T00:00:00');
  const now = new Date();
  let age = now.getFullYear() - bday.getFullYear();
  const m = now.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < bday.getDate())) age--;
  const ageEl = document.getElementById('age');
  if (ageEl) ageEl.textContent = age.toString();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = now.getFullYear().toString();
})();

// ===== Mobile Menu =====
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ===== Smooth Scroll (close menu on click) =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => menu && menu.classList.remove('open'));
});

// ===== Reveal on Scroll =====
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
