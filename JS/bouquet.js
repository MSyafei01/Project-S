// Fungsi untuk inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    // Animasi hover pada kartu produk
    const cards = document.querySelectorAll('.bouquet-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // Fungsi keranjang belanja sederhana
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    // Simulasi penambahan ke keranjang (bisa dikembangkan lebih lanjut)
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.href.includes('whatsapp')) {
                e.preventDefault();
                count++;
                cartCount.textContent = count;
                
                // Animasi feedback
                this.textContent = 'Added!';
                this.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    this.textContent = 'Buy Now';
                    this.style.backgroundColor = '';
                }, 2000);
            }
        });
    });
});