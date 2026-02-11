// Cart variables
let cart = [];
let total = 0;

// Function to add items to cart
function addToCart(item, price) {
  const coneSizePrice = parseFloat(document.getElementById('cone-size').value);
  const fullPrice = price + coneSizePrice; // Add cone price to flavor/topping price
  cart.push({ item: item + ' (Cone)', price: fullPrice });
  total += fullPrice;
  updateCart();
}

// Function to update cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<span>${item.item}</span><span>₱${item.price.toFixed(2)}</span>`;
    cartItems.appendChild(div);
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

// Function to toggle payment input visibility
function togglePaymentInput() {
  const method = document.getElementById('payment-method').value;
  const input = document.getElementById('payment-number');
  if (method === 'GCash' || method === 'GoTyme') {
    input.style.display = 'block';
  } else {
    input.style.display = 'none';
  }
}

// Function to handle checkout
function checkout() {
  const paymentMethod = document.getElementById('payment-method').value;
  const paymentNumber = document.getElementById('payment-number').value;
  if ((paymentMethod === 'GCash' || paymentMethod === 'GoTyme') && !paymentNumber) {
    alert('Please enter your number for ' + paymentMethod + '.');
    return;
  }
  alert(`Payment processed via ${paymentMethod}! Total: ₱${total.toFixed(2)}${paymentNumber ? ' (Number: ' + paymentNumber + ')' : ''}`);
  // Reset cart after checkout
  cart = [];
  total = 0;
  updateCart();
}

// Initialize input visibility on page load
document.addEventListener('DOMContentLoaded', function() {
  togglePaymentInput();
});
