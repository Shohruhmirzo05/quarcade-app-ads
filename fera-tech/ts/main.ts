// ts/main.ts

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
const htmlElement = document.documentElement;

const setTheme = (theme: string) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
};

themeToggle?.addEventListener('click', toggleTheme);

// Set initial theme based on localStorage or prefers-color-scheme
const initialTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(initialTheme);

// Header shadow on scroll
const header = document.querySelector('header') as HTMLElement;

const handleScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
};

window.addEventListener('scroll', handleScroll);

// Scroll reveal helpers
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('reveal');
        }
    });
};

const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.1
});

revealElements.forEach(element => {
    observer.observe(element);
});

// Reduce motion guard
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable animations or reduce their intensity
    document.body.classList.add('reduce-motion');
} else {
    // Add GSAP or CSS animations here if needed
}