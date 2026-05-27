// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .service-card, .mission-item, .nav-logo').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
});

// ===== NAV SCROLL EFFECT =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ===== HERO TYPEWRITER =====
const h1Text = "Bad rental\nhistory?";
const pText = "We help when the banks say no. Whether you've been rejected for a mortgage, missed past payments, or struggled with rental issues, we provide alternative pathways to get you approved. Our team understands that life happens — and we're here to help you move forward.";
const h1Elem = document.getElementById('heroLine1');
const pElem = document.getElementById('heroP');
const heroCtaWrap = document.querySelector('.hero-cta');
let h1i = 0, pi = 0;

function typeH1() {
  if (h1i < h1Text.length) {
    const char = h1Text.charAt(h1i);
    if (char === '\n') {
      h1Elem.innerHTML += '<br>';
    } else {
      h1Elem.innerHTML = h1Elem.innerHTML.replace('<span class="cursor-char">|</span>', '') + char + '<span class="cursor-char">|</span>';
    }
    h1i++;
    setTimeout(typeH1, 65);
  } else {
    h1Elem.innerHTML = h1Elem.innerHTML.replace('<span class="cursor-char">|</span>', '');
    setTimeout(typeP, 400);
  }
}

function typeP() {
  if (pi < pText.length) {
    pElem.textContent += pText.charAt(pi);
    pi++;
    setTimeout(typeP, 18);
  } else {
    heroCtaWrap.classList.add('show');
  }
}

window.addEventListener('DOMContentLoaded', () => setTimeout(typeH1, 600));

// ===== LEARN MORE BUTTON =====
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ===== REVEAL ON SCROLL =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
      setTimeout(() => el.classList.add('visible'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ===== CHAR COUNTER =====
const msgEl = document.getElementById('message');
const counterEl = document.getElementById('charCount');
if (msgEl && counterEl) {
  msgEl.addEventListener('input', () => {
    counterEl.textContent = `${msgEl.value.length} / 500`;
  });
}

// ===== PARALLAX HERO BG =====
window.addEventListener('scroll', () => {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;
  const scrolled = window.scrollY;
  const heroBg = heroSection.querySelector('.hero-bg');
  if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
}, { passive: true });

// Block ctrl+scroll zoom
document.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', e => e.preventDefault());
