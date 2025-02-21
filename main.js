import { renderCategories } from './categories.js';
import { renderProducts, searchProducts } from './products.js';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza categorias e produtos
    renderCategories();
    renderProducts();
    
    // Event Listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Filtro de categorias
    document.getElementById('categories').addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            // Remove active class de todos os botões
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Adiciona active class ao botão clicado
            e.target.classList.add('active');
            
            // Filtra os produtos
            renderProducts(e.target.dataset.category);
        }
    });
    
    // Busca de produtos
    const searchInput = document.getElementById('search');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        // Debounce para a busca
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProducts(e.target.value);
        }, 300);
    });
    
    // Fechar modal de pré-visualização
    document.getElementById('closePreviewModal').addEventListener('click', () => {
        document.getElementById('previewModal').classList.remove('active');
    });
    
    // Fechar modal ao clicar fora
    document.getElementById('previewModal').addEventListener('click', (e) => {
        if (e.target.id === 'previewModal') {
            e.target.classList.remove('active');
        }
    });

    // Adicionar feedback visual ao clicar nos botões
    document.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 100);
        }
    });
}

// Função para mostrar notificações
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-emoji">${type === 'success' ? '✨' : '⚠️'}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Remover toast após 3 segundos
    setTimeout(() => {
        toast.style.animation = 'slideOutToast 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
} 