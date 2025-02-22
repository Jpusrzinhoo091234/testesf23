// Carrinho de compras
let cart = [];

// Importar a taxa adicional
import { TAXA_ADICIONAL } from './products.js';

// Função para adicionar produto ao carrinho
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price, // O preço já inclui a taxa
            emoji: product.emoji,
            quantity
        });
    }

    updateCartUI();
    showToast('Produto adicionado ao carrinho! 🛒');
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Produto removido do carrinho ❌');
}

// Função para atualizar quantidade no carrinho
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Função para atualizar a UI do carrinho
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');

    // Atualiza contador do carrinho
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Atualiza itens do carrinho
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <span class="cart-item-emoji">${item.emoji}</span>
                <span class="cart-item-name">${item.name}</span>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">×</button>
        </div>
    `).join('');

    // Atualiza total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;

    // Salva carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para mostrar/esconder o carrinho
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
}

// Função para finalizar compra via WhatsApp
function checkoutWhatsApp() {
    const phoneNumber = '5511999999999'; // Substitua pelo número correto
    const message = cart.map(item => 
        `${item.quantity}x ${item.name}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const finalMessage = encodeURIComponent(
        `Olá! Gostaria de fazer um pedido:\n\n${message}\n\nTotal: R$ ${total.toFixed(2)}`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${finalMessage}`);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carrega carrinho do localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }

    // Event listeners
    document.getElementById('cartIcon').addEventListener('click', toggleCart);
    document.getElementById('closeModal').addEventListener('click', toggleCart);
    document.getElementById('checkoutWhatsApp').addEventListener('click', checkoutWhatsApp);

    // Event listener para botões de adicionar ao carrinho
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.productId;
            const quantityElement = e.target.closest('.preview-content')?.querySelector('.quantity-value');
            const quantity = quantityElement ? parseInt(quantityElement.textContent) : 1;
            addToCart(productId, quantity);
        }
    });
});

// Função para mostrar toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const container = document.querySelector('.toast-container') || (() => {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    })();
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
        if (container.children.length === 0) {
            container.remove();
        }
    }, 3000);
} 