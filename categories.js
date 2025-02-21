export const categories = [
    {
        id: 'subscriptions',
        name: 'Assinaturas',
        emoji: '📦'
    },
    {
        id: 'blue-locks',
        name: 'Blue Lock: Rivals',
        emoji: '⚽',
        highlight: '🔥 NOVO!'
    }
];

export function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category.id === 'subscriptions' ? 'active' : ''}" data-category="${category.id}">
            ${category.emoji} ${category.name}
            ${category.highlight ? `<span class="category-highlight">${category.highlight}</span>` : ''}
        </button>
    `).join('');
} 