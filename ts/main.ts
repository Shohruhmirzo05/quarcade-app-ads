import '../styles.css';
import appsData from '../data/apps.json';

type App = {
  id: string;
  name: string;
  category: string;
  tagline?: string;
  blurb: string;
  description?: string;
  tags?: string[];
  icon: string;
  screenshots?: string[];
  link: string;
  appStoreUrl?: string;
  privacyUrl?: string;
  supportUrl?: string;
  featured?: boolean;
};

const apps: App[] = appsData as App[];

// Theme management
const htmlElement = document.documentElement;
const THEME_STORAGE_KEY = 'fera-tech-theme';

const applyTheme = (theme: 'light' | 'dark') => {
  htmlElement.dataset.theme = theme;
  htmlElement.classList.toggle('dark', theme === 'dark');
};

const getInitialTheme = (): 'light' | 'dark' => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const initThemeToggle = () => {
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!toggle) return;

  const setToggleLabel = (theme: 'light' | 'dark') => {
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.setAttribute('aria-label', label);
    toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  };

  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  setToggleLabel(initialTheme);

  toggle.addEventListener('click', () => {
    const nextTheme = htmlElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setToggleLabel(nextTheme);
  });
};

const highlightActiveNav = () => {
  const currentPath = window.location.pathname.replace(/index\.html$/, '');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav [data-nav]');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') ?? '';
    if (!href) return;
    const normalized = href.replace(/index\.html$/, '');
    if (normalized === currentPath) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('text-fx-blue');
    }
  });
};

const prefersReducedMotionQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
const shouldReduceMotion = prefersReducedMotionQuery?.matches ?? false;

const revealOnScroll = () => {
  if (shouldReduceMotion || typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('reveal-ready');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
};

const createAppCard = (app: App) => {
  const tagMarkup = (app.tags ?? []).map((tag) => `<span class="app-tag">${tag}</span>`).join('');
  return `
    <article class="app-card" data-reveal>
      <a href="${app.link}" class="app-card__body" aria-label="View ${app.name}">
        <img src="${app.icon}" alt="${app.name} icon" class="app-card__icon" loading="lazy" width="64" height="64" />
        <div>
          <h3 class="app-card__title">${app.name}</h3>
          <p class="app-card__blurb">${app.blurb}</p>
          <p class="app-card__category">${app.category}</p>
          <div class="app-card__tags" aria-hidden="true">${tagMarkup}</div>
        </div>
      </a>
    </article>
  `;
  revealOnScroll();
};

const renderFeaturedApps = () => {
  const container = document.querySelector<HTMLElement>('[data-featured-apps]');
  if (!container) return;

  const featured = apps.filter((app) => app.featured).slice(0, 3);
  if (!featured.length) {
    container.innerHTML = '<p class="text-muted">New apps are coming soon. Stay tuned!</p>';
    return;
  }

  container.innerHTML = featured.map(createAppCard).join('');
  revealOnScroll();
};

const renderAppGrid = () => {
  const grid = document.querySelector<HTMLElement>('[data-app-grid]');
  const searchInput = document.querySelector<HTMLInputElement>('[data-app-search]');
  if (!grid) return;

  const render = (items: App[]) => {
    if (!items.length) {
      grid.innerHTML = '<p class="text-muted text-center">No apps match your search yet. Try another keyword.</p>';
      return;
    }
    grid.innerHTML = items.map(createAppCard).join('');
    revealOnScroll();
  };

  render(apps);

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      const filtered = apps.filter((app) => {
        const haystack = [app.name, app.category, app.tagline, app.blurb, ...(app.tags ?? [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(query);
      });
      render(filtered);
    });
  }
};

const renderAppDetail = () => {
  const detail = document.querySelector<HTMLElement>('[data-app-detail]');
  if (!detail) return;

  const appId = detail.dataset.appDetail;
  const app = apps.find((item) => item.id === appId);
  if (!app) return;

  const tagsMarkup = (app.tags ?? []).map((tag) => `<span class="pill">${tag}</span>`).join('');
  const shots = (app.screenshots ?? []).map(
    (src, index) => `
      <figure class="screenshot">
        <img src="${src}" alt="${app.name} screenshot ${index + 1}" loading="lazy" width="960" height="540" />
      </figure>
    `
  ).join('');

  detail.innerHTML = `
    <header class="app-hero">
      <img src="${app.icon}" alt="${app.name} icon" width="96" height="96" class="app-hero__icon" />
      <div>
        <p class="app-hero__category">${app.category}</p>
        <h1 class="app-hero__title">${app.name}</h1>
        <p class="app-hero__tagline">${app.tagline ?? app.blurb}</p>
        <div class="app-hero__actions">
          ${app.appStoreUrl ? `<a class="btn btn-primary" href="${app.appStoreUrl}" target="_blank" rel="noopener">Get on the App Store</a>` : ''}
          <a class="btn btn-secondary" href="/apps/">Back to all apps</a>
        </div>
      </div>
    </header>
    <section class="app-body prose dark:prose-invert">
      <p>${app.description ?? app.blurb}</p>
      ${tagsMarkup ? `<div class="pill-group" aria-label="App tags">${tagsMarkup}</div>` : ''}
      ${shots ? `<div class="screenshot-grid" data-reveal>${shots}</div>` : ''}
      <div class="support-links">
        ${app.privacyUrl ? `<a href="${app.privacyUrl}">Privacy policy</a>` : ''}
        ${app.supportUrl ? `<a href="${app.supportUrl}">Support</a>` : ''}
      </div>
    </section>
  `;
  revealOnScroll();
};

const setCurrentYear = () => {
  const year = new Date().getFullYear().toString();
  document.querySelectorAll<HTMLElement>("[data-year]").forEach((node) => {
    node.textContent = year;
  });
};

const initNewsletterForm = () => {
  const form = document.querySelector<HTMLFormElement>('[data-newsletter-form]');
  if (!form) return;
  form.addEventListener('submit', () => {
    form.setAttribute('data-submitted', 'true');
  });
};

initThemeToggle();
highlightActiveNav();
renderFeaturedApps();
renderAppGrid();
renderAppDetail();
initNewsletterForm();
setCurrentYear();
revealOnScroll();

if (prefersReducedMotionQuery) {
  const handleMotionChange = () => window.location.reload();
  if ('addEventListener' in prefersReducedMotionQuery) {
    prefersReducedMotionQuery.addEventListener('change', handleMotionChange);
  } else if ('addListener' in prefersReducedMotionQuery) {
    // @ts-expect-error legacy Safari support
    prefersReducedMotionQuery.addListener(handleMotionChange);
  }
}
