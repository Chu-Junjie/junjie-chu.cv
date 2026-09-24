/* Subtle, optional motion. Content is visible even if this file never runs. */
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const revealed = new WeakSet();
  const running = new Set();
  let observer;
  let frame = 0;
  let progress = document.getElementById('reading-progress');
  if (!progress) {
    progress = document.createElement('div');
    progress.id = 'reading-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.append(progress);
  }

  function enter(element, delay = 0, distance = 12) {
    if (revealed.has(element)) return;
    revealed.add(element);
    if (preference.matches || !element.animate || element.contains(document.activeElement)) return;
    const animation = element.animate([
      { opacity: 0.45, transform: `translateY(${distance}px)` },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 460, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'none' });
    running.add(animation);
    animation.finished.catch(() => {}).finally(() => running.delete(animation));
  }

  function updateProgress() {
    frame = 0;
    const range = document.documentElement.scrollHeight - innerHeight;
    const value = range > 0 ? Math.max(0, Math.min(1, scrollY / range)) : 0;
    progress.style.transform = `scaleX(${value})`;
  }
  function scheduleProgress() {
    if (!frame) frame = requestAnimationFrame(updateProgress);
  }

  function observeContent() {
    observer?.disconnect();
    // A language change can detach elements while an entrance is still running.
    running.forEach(animation => {
      if (!animation.effect?.target?.isConnected) animation.cancel();
    });
    scheduleProgress();
    if (preference.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // Anchor targets should settle immediately, with no entrance offset.
        const targetId = location.hash.slice(1);
        const containsTarget = targetId && [...entry.target.querySelectorAll('[id]')].some(el => el.id === targetId);
        if (entry.target.id !== targetId && !containsTarget) enter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.section-heading, .project, .timeline-item, .skill-group, .lead-item, .contact-section')
      .forEach(element => observer.observe(element));
  }

  function stopAnimations() {
    running.forEach(animation => animation.cancel());
    running.clear();
  }
  preference.addEventListener('change', () => {
    stopAnimations();
    observeContent();
  });
  document.addEventListener('portfolio:render', observeContent);
  document.addEventListener('focusin', event => {
    running.forEach(animation => {
      if (animation.effect?.target?.contains(event.target)) animation.cancel();
    });
  });
  document.addEventListener('toggle', event => {
    if (event.target.matches?.('.case-details') && event.target.open) {
      const body = event.target.querySelector('.detail-body');
      if (body && !location.hash.includes(event.target.id.replace('-details', '-quality'))) {
        enter(body, 0, 4);
      }
    }
    scheduleProgress();
  }, true);
  addEventListener('scroll', scheduleProgress, { passive: true });
  addEventListener('resize', scheduleProgress);
  addEventListener('load', scheduleProgress);
  addEventListener('hashchange', stopAnimations);
  addEventListener('beforeprint', stopAnimations);
  if ('ResizeObserver' in window) new ResizeObserver(scheduleProgress).observe(document.querySelector('main'));

  // Intro runs once per page load; language changes do not replay the hero.
  if (!location.hash && scrollY < 40) {
    document.querySelectorAll('.hero > .eyebrow, #hero-title, #summary-text, .hero-actions, .feature-card')
      .forEach((element, index) => enter(element, Math.min(index * 35, 175)));
  }
  observeContent();
})();
