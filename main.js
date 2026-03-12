// Mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Smooth scroll & close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const href = a.getAttribute('href');
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Animated counters
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = target > 1000 ? 1200 : 1000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.counter-num').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const counterBanner = document.querySelector('.counter-banner');
if (counterBanner) counterObserver.observe(counterBanner);

// Form submit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    btn.textContent = 'Šaljem...';
    btn.disabled = true;

    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      contactForm.reset();
      document.getElementById('formSuccess').style.display = 'block';
      btn.textContent = 'Poslano!';
    } else {
      btn.textContent = 'Greška — pokušaj ponovno';
      btn.disabled = false;
    }
  });
}
