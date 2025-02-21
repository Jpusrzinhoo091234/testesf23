export const categories = [
    {
        id: 'netflix',
        name: 'Netflix',
        emoji: '📺'
    }
];

export function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    
    // Botão "Todos"
    const allButton = document.createElement('button');
    allButton.className = 'category-btn active';
    allButton.dataset.category = 'all';
    allButton.innerHTML = '🏪 Todos';
    categoriesContainer.appendChild(allButton);
    
    // Categoria Netflix
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.dataset.category = category.id;
        button.innerHTML = `${category.emoji} ${category.name}`;
        categoriesContainer.appendChild(button);
    });
} 