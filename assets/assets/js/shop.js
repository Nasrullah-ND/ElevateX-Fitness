document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const cartCountElement = document.getElementById('cartCount');
    const cartItemsElement = document.getElementById('cartItems');
    const checkoutLink = document.getElementById('checkoutLink');

    // Update Cart UI
    function updateCartUI() {
        cartItemsElement.innerHTML = '';
        if (cartItems.length === 0) {
            cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
            checkoutLink.classList.add('disabled');
        } else {
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price}`;
                li.classList.add('dropdown-item');
                cartItemsElement.appendChild(li);
            });
            checkoutLink.classList.remove('disabled');
        }
        cartCountElement.textContent = cartItems.length;
    }

    // Add to Cart Button Click Event
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const itemName = this.closest('.card').querySelector('.card-title').textContent;
            const itemPrice = this.closest('.card').querySelector('.card-text').textContent;
            
            cartItems.push({ name: itemName, price: itemPrice });
            updateCartUI();
        });
    });
});
$(document).ready(function () {
    let cart = [];

    // Function to update cart display
    function updateCart() {
        let cartItems = $('#cartItems');
        let cartCount = $('#cartCount');
        let checkoutLink = $('#checkoutLink');

        cartItems.empty();
        if (cart.length === 0) {
            cartItems.html('<p>Your cart is empty.</p>');
            cartCount.text('0');
            checkoutLink.addClass('disabled').attr('href', '#');
        } else {
            cartCount.text(cart.length);
            cart.forEach(item => {
                cartItems.append('<p>' + item.name + ' - $' + item.price + '</p>');
            });
            checkoutLink.removeClass('disabled').attr('href', 'buynow.html');
        }
    }

    // Add to Cart button click event
    $('.add-to-cart').click(function () {
        let productName = $(this).data('product-name');
        let productPrice = $(this).data('product-price');
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

$(document).ready(function () {
    let cart = [];

    // Function to update cart display
    function updateCart() {
        let cartItems = $('#cartItems');
        let cartCount = $('#cartCount');
        let checkoutLink = $('#checkoutLink');

        cartItems.empty();
        if (cart.length === 0) {
            cartItems.html('<p>Your cart is empty.</p>');
            cartCount.text('0');
            checkoutLink.addClass('disabled').attr('href', '#');
        } else {
            cartCount.text(cart.length);
            cartItems.empty(); // Clear any existing cart items
            cart.forEach(item => {
                cartItems.append('<p>' + item.name + ' - $' + item.price + '</p>');
            });
            checkoutLink.removeClass('disabled').attr('href', 'buynow.html');
        }
    }

    // Add to Cart button click event
    $('.add-to-cart').click(function () {
        let productName = $(this).data('product-name');
        let productPrice = $(this).data('product-price');
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});
