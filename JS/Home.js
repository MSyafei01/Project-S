// Data Produk
const products = [
  {
    name: "Bouquet Mawar Merah",
    price: "Rp 250.000",
    image: "E:/KULIAH/PELATIHAN IT/Dicoding/Tahap3/css/img/bunga.jpg"
  },
  {
    name: "Bouquet Tulip",
    price: "Rp 350.000",
    image: "E:/KULIAH/PELATIHAN IT/Dicoding/Tahap3/css/img/bunga.jpg"
  },
  {
    name: "Bouquet Lily",
    price: "Rp 300.000",
    image: "E:/KULIAH/PELATIHAN IT/Dicoding/Tahap3/css/img/bunga.jpg"
  }
];

// Render Produk
function renderProducts() {
  const productGrid = document.querySelector('.product-grid');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="add-to-cart">+ Keranjang</button>
    `;
    
    productGrid.appendChild(productCard);
  });
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  
  // Tambahkan event listener untuk tombol keranjang
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const countElement = document.querySelector('.cart-count');
      let count = parseInt(countElement.textContent);
      countElement.textContent = count + 1;
      
      // Animasi
      this.textContent = '✓ Ditambahkan';
      setTimeout(() => {
        this.textContent = '+ Keranjang';
      }, 2000);
    });
  });
});