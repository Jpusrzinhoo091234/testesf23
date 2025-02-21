// Adicionar taxa fixa aos preços
const TAXA_ADICIONAL = 2.00;

export const products = [
    {
        id: 'netflix1',
        name: 'NETFLIX 4K 30 DIAS | 1 TELA COM PIN',
        emoji: '📺',
        price: 16.90 + TAXA_ADICIONAL,
        oldPrice: 19.90 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `✨ CONTA PREMIUM 4K ULTRA HD
        
🔐 Características:
• Plano Premium 4K Ultra HD
• Duração: 30 dias
• Tela Privada com PIN
• Acesso Garantido
• Suporte 24/7
• Envio Automático

📱 Funciona em:
• Smart TVs
• Celulares
• Tablets
• Computadores
• Video Games

⚡ Entrega Imediata
🔒 Conta Privada
✅ Garantia de Funcionamento`,
        shortDescription: 'Netflix Premium 4K - 30 dias com PIN ✨',
        highlight: 'PREMIUM',
        stock: 146514,
        benefits: [
            '📺 4K Ultra HD Garantido',
            '🔒 PIN Exclusivo',
            '📱 Todos Dispositivos',
            '⚡ Entrega Automática',
            '🎮 Compatível c/ Games'
        ]
    },
    {
        id: 'netflix2',
        name: '[TV] NETFLIX 4K 30 DIAS | 1 TELA COM PIN',
        emoji: '🎬',
        price: 15.90 + TAXA_ADICIONAL,
        oldPrice: 18.90 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `✨ EXCLUSIVO PARA SMART TVs
        
📺 Características:
• Plano Premium 4K Ultra HD
• Duração: 30 dias
• PIN de Acesso Único
• Otimizado para TVs
• Suporte Especializado
• Envio Instantâneo

💡 Compatível com:
• Samsung Smart TV
• LG Smart TV
• Android TV
• TCL
• Philips Smart TV
• Todas Smart TVs

⚡ Ativação Imediata
🔒 Acesso Exclusivo
✅ Garantia de 30 dias`,
        shortDescription: 'Netflix TV Premium 4K - 30 dias com PIN 📺',
        highlight: 'TV ONLY',
        stock: 13622,
        benefits: [
            '📺 4K Ultra HD TV',
            '🔒 PIN Exclusivo',
            '🖥️ Smart TV Only',
            '⚡ Ativação Imediata',
            '✨ Qualidade Máxima'
        ]
    },
    {
        id: 'netflix3',
        name: 'NETFLIX 4K 10 DIAS COMPARTILHADA',
        emoji: '🎥',
        price: 5.89 + TAXA_ADICIONAL,
        oldPrice: 7.99 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `🎬 CONTA COMPARTILHADA 4K
        
📱 Detalhes do Plano:
• Qualidade 4K Ultra HD
• 10 Dias de Acesso
• Perfil Compartilhado
• Multi-dispositivos
• Suporte Básico
• Envio Automático

💻 Compatibilidade:
• Todos Dispositivos
• Smart TVs
• Smartphones
• PCs e Notebooks
• Tablets

⚡ Entrega em 1 minuto
👥 Acesso Compartilhado
✅ Garantia de Reposição`,
        shortDescription: 'Netflix 4K Compartilhada - 10 dias 🎬',
        highlight: 'PROMO',
        stock: 5154,
        benefits: [
            '📺 4K Garantido',
            '👥 Compartilhada',
            '📱 Multi-Device',
            '⚡ Entrega Rápida',
            '💰 Melhor Custo'
        ]
    },
    {
        id: 'netflix4',
        name: '[TV] NETFLIX 4K 7 DIAS COMPARTILHADA',
        emoji: '🎞️',
        price: 2.99 + TAXA_ADICIONAL,
        oldPrice: 4.99 + TAXA_ADICIONAL,
        category: 'netflix',
        description: `📺 ACESSO TV 7 DIAS
        
🎬 Informações:
• Qualidade 4K Ultra HD
• 7 Dias de Acesso
• Perfil Compartilhado
• Exclusivo Smart TVs
• Suporte via Chat
• Envio Automático

📺 Funciona em:
• Todas Smart TVs
• Android TV
• TV Box
• Apple TV
• Chromecast

⚡ Ativação Imediata
👥 Modo Compartilhado
✅ Garantia de 7 dias`,
        shortDescription: 'Netflix TV 4K Compartilhada - 7 dias 📺',
        highlight: 'BÁSICO',
        stock: 120,
        benefits: [
            '📺 4K Ultra HD',
            '👥 Compartilhada',
            '🖥️ TV Only',
            '⚡ Entrega Rápida',
            '💰 Menor Preço'
        ]
    }
];

// Adicionar array de ofertas relâmpago
export const flashDeals = [
    {
        id: 'flash1',
        name: 'Super Smartphone',
        emoji: '📱',
        price: 1499.99,
        oldPrice: 2999.99,
        description: 'Smartphone top de linha com 50% OFF!',
        discount: 50,
        stock: 5,
        endTime: new Date().getTime() + (24 * 60 * 60 * 1000) // 24 horas
    },
    {
        id: 'flash2',
        name: 'Fones Wireless',
        emoji: '🎧',
        price: 199.99,
        oldPrice: 499.99,
        description: 'Fones de ouvido com cancelamento de ruído',
        discount: 60,
        stock: 8,
        endTime: new Date().getTime() + (12 * 60 * 60 * 1000) // 12 horas
    },
    {
        id: 'flash3',
        name: 'Smartwatch Pro',
        emoji: '⌚',
        price: 599.99,
        oldPrice: 1299.99,
        description: 'Relógio inteligente com GPS e monitor cardíaco',
        discount: 55,
        stock: 3,
        endTime: new Date().getTime() + (8 * 60 * 60 * 1000) // 8 horas
    }
];

// Adicionar função de loading
function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
}

// Função para abrir o modal de pré-visualização
function openPreviewModal(product) {
    const modal = document.getElementById('previewModal');
    const previewBody = document.getElementById('previewBody');
    
    modal.classList.add('active');
    
    const discount = ((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0);
    const savings = (product.oldPrice - product.price).toFixed(2);
    
    previewBody.innerHTML = `
        <div class="preview-emoji">${product.emoji}</div>
        ${product.highlight ? `<span class="product-highlight">${product.highlight}</span>` : ''}
        <div class="preview-details">
            <div class="preview-header-info">
                <h3 class="preview-title">${product.name}</h3>
                <div class="preview-price-container">
                    <p class="preview-old-price">De R$ ${product.oldPrice.toFixed(2)}</p>
                    <p class="preview-price">Por R$ ${product.price.toFixed(2)}</p>
                    <p class="preview-savings">Economia de R$ ${savings} (${discount}% OFF)</p>
                </div>
            </div>
            
            <div class="preview-benefits">
                <h4>✨ Principais Benefícios:</h4>
                <ul>
                    ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>

            <div class="preview-stock">
                <p class="stock-warning">🔥 Apenas ${product.stock} unidades em estoque!</p>
                <div class="stock-bar">
                    <div class="stock-progress" style="width: ${(product.stock / 10) * 100}%"></div>
                </div>
            </div>

            <p class="preview-description">${product.description}</p>
            
            <div class="preview-actions">
                <div class="preview-quantity">
                    <button class="quantity-decrease">-</button>
                    <span class="quantity-value">1</span>
                    <button class="quantity-increase">+</button>
                </div>
                <button class="add-to-cart-btn pulse-animation" data-product-id="${product.id}">
                    Comprar Agora 
                </button>
                <p class="secure-purchase">🔒 Compra 100% Segura</p>
            </div>
        </div>
    `;
    
    setupQuantityControls(previewBody);
}

// Separar setup dos controles de quantidade
function setupQuantityControls(previewBody) {
    const quantityValue = previewBody.querySelector('.quantity-value');
    const decreaseBtn = previewBody.querySelector('.quantity-decrease');
    const increaseBtn = previewBody.querySelector('.quantity-increase');
    
    if (decreaseBtn && increaseBtn && quantityValue) {
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityValue.textContent);
            if (currentValue > 1) {
                quantityValue.textContent = currentValue - 1;
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityValue.textContent);
            quantityValue.textContent = currentValue + 1;
        });
    }
}

// Modificar a função renderProducts para incluir loading
export function renderProducts(categoryFilter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    showLoading(productsGrid);
    
    setTimeout(() => {
        productsGrid.innerHTML = '';
        const filteredProducts = categoryFilter === 'all' 
            ? products 
            : products.filter(product => product.category === categoryFilter);
        
        const fragment = document.createDocumentFragment();
        
        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animation = `fadeIn 0.2s ease-out forwards ${index * 0.05}s`;
            card.innerHTML = `
                <div class="product-emoji">${product.emoji}</div>
                ${product.highlight ? `<span class="product-highlight">${product.highlight}</span>` : ''}
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <p class="product-description">${product.shortDescription}</p>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    Adicionar ao Carrinho 🛒
                </button>
            `;
            
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('add-to-cart-btn')) {
                    openPreviewModal(product);
                }
            });
            
            fragment.appendChild(card);
        });
        
        productsGrid.appendChild(fragment);
    }, 100);
}

// Função para buscar produtos
export function searchProducts(query) {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (!normalizedQuery) {
        renderProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery)
    );
    
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <p>Nenhum produto encontrado 😕</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-emoji">${product.emoji}</div>
            ${product.highlight ? `<span class="product-highlight">${product.highlight}</span>` : ''}
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart-btn" data-product-id="${product.id}">
                Adicionar ao Carrinho 🛒
            </button>
        `;
        productsGrid.appendChild(card);
    });
}

// Função para renderizar ofertas relâmpago
export function renderFlashDeals() {
    const flashDealsGrid = document.getElementById('flashDealsGrid');
    flashDealsGrid.innerHTML = '';

    flashDeals.forEach(deal => {
        const card = document.createElement('div');
        card.className = 'flash-deal-card';
        
        const discount = ((deal.oldPrice - deal.price) / deal.oldPrice * 100).toFixed(0);
        
        card.innerHTML = `
            <div class="flash-deal-badge">${discount}% OFF</div>
            <div class="product-emoji">${deal.emoji}</div>
            <h3 class="product-title">${deal.name}</h3>
            <div class="product-price-container">
                <p class="product-old-price">De R$ ${deal.oldPrice.toFixed(2)}</p>
                <p class="product-price">Por R$ ${deal.price.toFixed(2)}</p>
            </div>
            <p class="product-description">${deal.description}</p>
            <div class="stock-warning">
                Apenas ${deal.stock} unidades disponíveis!
            </div>
            <button class="add-to-cart-btn pulse-animation" data-product-id="${deal.id}">
                Comprar Agora 🔥
            </button>
        `;
        
        flashDealsGrid.appendChild(card);
    });
} 