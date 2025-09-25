import { App } from './types'; // Assuming you have a types file for TypeScript interfaces

const appContainer = document.getElementById('app-container') as HTMLElement; // The container for app cards
const searchInput = document.getElementById('search-input') as HTMLInputElement; // The search input field
const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement; // The category filter

async function fetchApps(): Promise<App[]> {
    const response = await fetch('/data/apps.json');
    if (!response.ok) {
        throw new Error('Failed to fetch apps data');
    }
    return response.json();
}

function renderAppCard(app: App): string {
    return `
        <div class="app-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="${app.icon}" alt="${app.name} icon" loading="lazy" decoding="async" class="app-icon" />
            <h3 class="app-title">${app.name}</h3>
            <p class="app-tagline">${app.tagline}</p>
            <div class="app-tags">
                ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="app-buttons">
                <a href="${app.appStoreUrl}" class="button">App Store</a>
                <a href="/apps/${app.slug}.html" class="button">Learn more →</a>
            </div>
        </div>
    `;
}

function filterApps(apps: App[]): App[] {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    return apps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchTerm) || app.tagline.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
}

function renderApps(apps: App[]): void {
    appContainer.innerHTML = apps.map(renderAppCard).join('');
}

async function init() {
    try {
        const apps = await fetchApps();
        renderApps(apps);

        searchInput.addEventListener('input', () => {
            const filteredApps = filterApps(apps);
            renderApps(filteredApps);
        });

        categoryFilter.addEventListener('change', () => {
            const filteredApps = filterApps(apps);
            renderApps(filteredApps);
        });
    } catch (error) {
        console.error(error);
        // Fallback HTML rendering for QuarCade if JS fails
        appContainer.innerHTML = `
            <div class="app-card rounded-2xl shadow-lg">
                <img src="/assets/logos/quarcade.svg" alt="QuarCade icon" loading="lazy" decoding="async" class="app-icon" />
                <h3 class="app-title">QuarCade</h3>
                <p class="app-tagline">Seven bite-size arcade games. Neon-fast. Offline friendly.</p>
                <div class="app-tags">
                    <span class="tag">Arcade</span>
                    <span class="tag">Offline</span>
                    <span class="tag">Single-player</span>
                </div>
                <div class="app-buttons">
                    <a href="https://apps.apple.com/app/id6752634023" class="button">App Store</a>
                    <a href="/apps/quarcade.html" class="button">Learn more →</a>
                </div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', init);