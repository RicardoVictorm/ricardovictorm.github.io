(() => {
  const root = document.documentElement;
  const isEnglish = root.lang.toLowerCase().startsWith('en');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.primary-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const themeToggle = document.querySelector('.theme-toggle');
  const toast = document.querySelector('.toast');
  const year = document.querySelector('#current-year');

  const labels = isEnglish
    ? { openMenu: 'Open menu', closeMenu: 'Close menu' }
    : { openMenu: 'Abrir menu', closeMenu: 'Fechar menu' };

  if (year) year.textContent = new Date().getFullYear();

  try {
    const storedTheme = localStorage.getItem('rv-theme');
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = storedTheme || (preferredDark ? 'dark' : 'light');
  } catch {
    root.dataset.theme = 'light';
  }

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('rv-theme', next); } catch { /* no persistence */ }
  });

  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('rv-language', link.dataset.language); } catch { /* no persistence */ }
    });
  });

  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? labels.closeMenu : labels.openMenu);
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', labels.openMenu);
    });
  });

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
  }

  document.querySelector('.copy-email')?.addEventListener('click', async event => {
    const email = event.currentTarget.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      toast?.classList.add('show');
      setTimeout(() => toast?.classList.remove('show'), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
})();
