   // Function to save order details to localStorage
   function saveOrderDetails(orderDetails) {
    // Retrieve existing orders from localStorage or initialize empty array
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    // Add new order details
    orders.push(orderDetails);
    // Save updated orders back to localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
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
    
    // Example: Simulate order submission (replace with actual logic)
    const orderDetails = {
        name: formData.get('name'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        paymentMethod: formData.get('paymentMethod'),
        timestamp: new Date().toLocaleString() // Add timestamp for reference
    };
    
    // Save order details to localStorage
    saveOrderDetails(orderDetails);

    // Show popup message
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';

    // Send SMS (simulated)
    const phoneNumber = formData.get('phone');
    sendSMS(phoneNumber);

    // Hide popup after 3 seconds (adjust as needed)
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
});

// Function to simulate sending SMS (replace with actual SMS API integration)
function sendSMS(phoneNumber) {
    console.log(`Sending SMS to ${phoneNumber}...`);
    // Simulated success message (replace with actual SMS API call)
    alert(`Message sent to ${phoneNumber}`);
}