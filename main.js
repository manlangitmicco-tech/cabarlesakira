const milkTeaItems = [
  ["Classic Milk Tea", 120, "https://image2url.com/r2/default/images/1771072999492-9ae71989-480c-44bd-9552-a50eca6c25ac.jpg"],
  ["Taro Milk Tea", 150, "https://image2url.com/r2/default/images/1771074193311-89290b14-63a4-4bba-bec8-3966ebaf89d9.jpg"],
  ["Wintermelon Milk Tea", 140, "https://image2url.com/r2/default/images/1771075007218-34e9aea9-9e8b-4ed8-87b6-c1719fe233f9.jpg"],
  ["Matcha Milk Tea", 160, "https://image2url.com/r2/default/images/1771075058476-0497d5f1-cf67-4741-8e5f-a5a71bed2f36.jpg"],
  ["Red Velvet", 155, "https://image2url.com/r2/default/images/1771075232051-c44b19d1-d995-4f91-b1cf-ee1da357990e.jpeg"],
  ["Brown Sugar Milk Tea", 170, "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80"]
];

const snackItems = [
  ["French Fries", 80, "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"],
  ["Cheese Sticks", 95, "https://image2url.com/r2/default/images/1771075649329-88e522e7-dce5-4b2f-81bc-408548642781.jpeg"],
  ["Nachos", 120, "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=600&q=80"],
  ["Chicken Nuggets", 110, "https://image2url.com/r2/default/images/1771075753811-751ffb32-1f6d-4b3b-9119-38d5055aabba.jpeg"],
  ["Onion Rings", 100, "https://image2url.com/r2/default/images/1771075795378-a4acc6a5-12f4-49d2-af84-fed634ba25a5.webp"]
];

const dessertItems = [
  ["Chocolate Cake", 180, "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"],
  ["Cheesecake", 190, "https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=600&q=80"],
  ["Red Velvet Cake", 200, "https://image2url.com/r2/default/images/1771075860979-4c1b666f-96b7-403b-a512-6b01ffeaaeda.jpeg"],
  ["Ice Cream Sundae", 130, "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"],
  ["Burger", 150, "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=600&q=80"]
];

let cart = [];

// Render Function
function renderItems(items, containerId) {
  const container = document.getElementById(containerId);
  
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <img src="${item[2]}" alt="${item[0]}">
      <h3>${item[0]}</h3>
      <p>₱${item[1]}</p>
      <button onclick="addToCart('${item[0]}', ${item[1]})">
        Add to Cart
      </button>
    `;
    
    container.appendChild(card);
  });
}

// Render all categories
renderItems(milkTeaItems, "milktea");
renderItems(snackItems, "snacks");
renderItems(dessertsItems = dessertItems, "desserts");

// Add To Cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  
  displayCart();
}

// Display Cart
function displayCart() {
  const cartTable = document.getElementById("cart");
  cartTable.innerHTML = "";
  let total = 0;
  
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    
    cartTable.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>₱${item.price}</td>
        <td>₱${subtotal}</td>
      </tr>
    `;
  });
  
  document.getElementById("total").innerText = total;
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  
  alert("Order Successful!");
  cart = [];
  displayCart();
}
