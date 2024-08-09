// scripts.js
$(document).ready(function(){
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
let cart = [];

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = cart.length;

    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `
            ${item}
            <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(listItem);
    });

    $('.remove-from-cart').click(function () {
        const index = $(this).data('index');
        const item = cart.splice(index, 1);
        updateCart();
        showMessage(`${item} removed from cart`);
    });

    if (cart.length > 0) {
        $('#checkoutLink').removeClass('disabled');
    } else {
        $('#checkoutLink').addClass('disabled');
    }
}

function showMessage(message) {
    const messageModal = $('#messageModal');
    messageModal.find('.modal-body').text(message);
    messageModal.modal('show');
    messageModal.addClass('animate__animated animate__bounceIn');
    setTimeout(function() {
        messageModal.modal('hide');
        messageModal.removeClass('animate__animated animate__bounceIn');
    }, 2000);
}

$(document).ready(function () {
    $('.add-to-cart').click(function () {
        const service = $(this).data('service');
        cart.push(service);
        updateCart();
        showMessage(`${service} added to cart`);
    });

    $('#cartButton').click(function () {
        $('#cartModal').modal('show');
    });

    $('#checkoutLink').click(function () {
        if (!$(this).hasClass('disabled')) {
            // Proceed to checkout functionality
            window.location.href = 'checkout.html';
        }
    });
});
$(document).ready(function () {
$('.add-to-cart').click(function () {
const service = $(this).data('service');
cart.push(service);
updateCart();
showMessage(`${service} added to cart`);
});

$('.buy-now').click(function () {
const service = $(this).data('service');
showMessage(`You have purchased ${service}. Thank you!`);
});

$('#cartButton').click(function () {
$('#cartModal').modal('show');
});

$('#checkoutLink').click(function () {
if (!$(this).hasClass('disabled')) {
    // Proceed to checkout functionality
    window.location.href = 'checkout.html';
}
});
});
$(document).ready(function() {
// Handle Buy Now button click
$('.buy-now').click(function() {
// Get the data-service attribute value (e.g., 'Group Classes')
var service = $(this).data('service');

// Store the selected service in localStorage for use in the Buy Now page
localStorage.setItem('selectedService', service);

// Redirect to the Buy Now page
window.location.href = 'buynow.html';
});
});

$(document).ready(function () {
let cart = []; // Initialize cart array

// Function to update cart count and items display
function updateCart() {
const cartCount = document.getElementById('cartCount');
cartCount.innerText = cart.length; // Update cart count

const cartItems = document.getElementById('cartItems');
cartItems.innerHTML = ''; // Clear previous items

// Loop through cart items and display them
cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.innerHTML = `
        ${item}
        <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remove</button>
    `;
    cartItems.appendChild(listItem);
});

// Attach click event to remove buttons
$('.remove-from-cart').click(function () {
    const index = $(this).data('index');
    cart.splice(index, 1); // Remove item from cart
    updateCart(); // Update cart display
    showMessage(`${item} removed from cart`);
});

// Enable/disable checkout link based on cart items
if (cart.length > 0) {
    $('#checkoutLink').removeClass('disabled');
} else {
    $('#checkoutLink').addClass('disabled');
}
}

// Add to Cart Button Click Handler
$('.add-to-cart').click(function () {
const service = $(this).data('service');
cart.push(service); // Add selected service to cart
updateCart(); // Update cart display
showMessage(`${service} added to cart`); // Show success message
});

// Buy Now Button Click Handler
$('.buy-now').click(function () {
const service = $(this).data('service');
showMessage(`You have purchased ${service}. Thank you!`); // Show purchase message
});

// Cart Modal Show Event
$('#cartButton').click(function () {
$('#cartModal').modal('show'); // Show cart modal
});

// Checkout Link Click Handler
$('#checkoutLink').click(function () {
if (!$(this).hasClass('disabled')) {
    // Proceed to checkout functionality
    window.location.href = 'checkout.html';
}
});
});