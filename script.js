document.addEventListener('DOMContentLoaded', function () {
  // Domain highlight
  const domainElements = document.querySelectorAll('.domain-highlight');
  domainElements.forEach(el => {
    el.innerHTML = 'utix<span class="text-accent">.com</span>';
  });

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Modal detail produk
  const detailButtons = document.querySelectorAll('.product-detail-button');
  const modal = document.getElementById('product-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close-button');

  if (detailButtons.length && modal && modalContent && modalClose) {
    detailButtons.forEach(button => {
      button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const icon = button.getAttribute('data-icon');
        const color = button.getAttribute('data-color');
        const description = button.getAttribute('data-description');
        const price = parseInt(button.getAttribute('data-price')) || 0;

        modalContent.innerHTML = `
          <div class="flex justify-center items-center">
            <div class="text-6xl ${color}">
              <i class="fas ${icon}"></i>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">${title}</h2>
            <p class="text-gray-700 text-justify mb-4">${description}</p>
            <p class="font-semibold text-dark mb-6">Harga: <span class="text-primary">Rp ${price.toLocaleString('id-ID')}</span></p>
            <button id="checkout-button" class="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition font-semibold">
              Checkout Tiket
            </button>
          </div>
        `;

        modal.classList.remove('hidden');
        document.addEventListener('DOMContentLoaded', function () {
  // ... (kode modal produk & menu tetap)

  // --- LOGO KERANJANG + BADGE JUMLAH ---
  const cartIcon = document.getElementById('cart-icon');
  const cartCount = document.getElementById('cart-count');
  const cart = JSON.parse(localStorage.getItem('utix_cart')) || [];

  if (cartIcon && cartCount) {
    if (cart.length > 0) {
      cartCount.textContent = cart.length;
      cartCount.classList.remove('hidden');
    } else {
      cartCount.classList.add('hidden');
    }
  }
});


        // Tombol checkout dalam modal
        document.getElementById('checkout-button').addEventListener('click', () => {
          const cart = JSON.parse(localStorage.getItem('utix_cart')) || [];
          cart.push({ title, icon, color, description, price });
          localStorage.setItem('utix_cart', JSON.stringify(cart));
          window.location.href = 'checkout.html';
        });
      });
    });

    modalClose.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
});
