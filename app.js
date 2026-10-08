const menuToggle = document.querySelector('#menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    primaryNav.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    primaryNav.classList.toggle('is-open', !isOpen);
  });

  primaryNav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!primaryNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const workVideo = document.querySelector('#work-video-player');
if (workVideo) {
  const startVideoWithSound = () => {
    if (!workVideo.paused) return;
    const playback = workVideo.play();
    if (playback && typeof playback.catch === 'function') playback.catch(() => {});
  };

  workVideo.addEventListener('click', startVideoWithSound);
  workVideo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      startVideoWithSound();
    }
  });

  if ('IntersectionObserver' in window) {
    const videoVisibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const visibleEnough = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        if (visibleEnough) startVideoWithSound();
        else workVideo.pause();
      });
    }, { threshold: [0, 0.35] });

    videoVisibilityObserver.observe(workVideo);
  }
}
