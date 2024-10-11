// Daftar produk
const products = [
    {
        name: 'Kopi Hitam',
        description: 'Kopi hitam asli dengan rasa yang kaya.',
        price: 15000,
        image: 'images/kopi_hitam.jpg.webp'
    },
    {
        name: 'Teh Tarik',
        description: 'Teh tarik segar dan manis.',
        price: 12000,
        image: 'images/teh_tarik.jpg,webp'
    }
];

// Menampilkan produk di halaman
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">Harga: Rp${product.price.toLocaleString()}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Panggil fungsi untuk menampilkan produk
displayProducts();
