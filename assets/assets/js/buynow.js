// Function to save order details to localStorage
function saveOrderDetails(orderDetails) {
    // Retrieve existing orders from localStorage or initialize empty array
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    // Add new order details
    orders.push(orderDetails);
    // Save updated orders back to localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Function to calculate total price
function calculateTotalPrice() {
    let totalPrice = 0;
    const items = document.querySelectorAll('#cartItems .row');
    
    items.forEach(item => {
        const quantity = item.querySelector('input[id^="quantity"]').value;
        const price = item.querySelector('input[id^="price"]').value;
        totalPrice += quantity * price;
    });
    
    return totalPrice.toFixed(2); // Return as string with two decimal points
}

// Function to calculate delivery date
function calculateDeliveryDate() {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7); // Example: 7 days for delivery
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return deliveryDate.toLocaleDateString(undefined, options);
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form
    if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
    }
    
    // Collect form data
    const formData = new FormData(this);
    
    // Collect cart items
    const items = [];
    document.querySelectorAll('#cartItems .row').forEach(item => {
        const itemName = item.querySelector('input[id^="item"]').value;
        const quantity = item.querySelector('input[id^="quantity"]').value;
        const price = item.querySelector('input[id^="price"]').value;
        items.push({ itemName, quantity, price });
    });

    // Calculate total price and delivery date
    const totalPrice = calculateTotalPrice();
    const deliveryDate = calculateDeliveryDate();

    // Create order details object
    const orderDetails = {
        name: formData.get('name'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        paymentMethod: formData.get('paymentMethod'),
        items: items,
        totalPrice: `$${totalPrice}`,
        deliveryDate: deliveryDate,
        timestamp: new Date().toLocaleString() // Add timestamp for reference
    };
    
    // Save order details to localStorage
    saveOrderDetails(orderDetails);

    // Show popup message
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';

    // Send SMS with order summary
    sendSMS(orderDetails.phone, orderDetails);

    // Hide popup after 3 seconds (adjust as needed)
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
});

// Function to simulate sending SMS (replace with actual SMS API integration)
function sendSMS(phoneNumber, orderDetails) {
    console.log(`Sending SMS to ${phoneNumber}...`);
    
    // Simulated SMS content
    const smsContent = `
        Order Confirmation:
        Name: ${orderDetails.name}
        Total Price: ${orderDetails.totalPrice}
        Delivery Date: ${orderDetails.deliveryDate}
        Thank you for your order!
    `;
    
    // Simulated success message (replace with actual SMS API call)
    alert(`Message sent to ${phoneNumber}:\n${smsContent}`);
}
