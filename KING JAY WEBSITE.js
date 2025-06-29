<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>King Jay’s Tech • Website Empire</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --gold: #FFD700;
      --dark: #0a0a0a;
      --frost: rgba(255, 255, 255, 0.08);
      --red: #FF4444; /* Added for delete button */
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--dark);
      color: #fff;
      line-height: 1.6;
      padding-top: 80px;
    }
    header {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 1rem 2rem;
      background: var(--frost);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid #ffffff12;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 999;
    }
    header h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
      color: var(--gold);
    }
    header nav {
      display: flex;
      align-items: center; /* Align items for cart icon */
    }
    header a {
      color: #fff;
      margin-left: 1.5rem;
      text-decoration: none;
      font-weight: 600;
      position: relative; /* For cart badge */
    }
    .cart-icon {
        cursor: pointer;
        font-size: 1.2rem;
        margin-left: 1.5rem;
        position: relative;
    }
    .cart-badge {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: var(--red);
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 0.7rem;
        font-weight: bold;
        line-height: 1;
        min-width: 20px; /* Ensure badge is circular */
        text-align: center;
        transform: translate(50%, -50%);
        pointer-events: none; /* Allows clicks to pass through to the icon */
    }
    section {
      padding: 2rem;
      max-width: 1200px;
      margin: auto;
    }
    .hero {
      text-align: center;
      padding-bottom: 3rem; /* Add some space below the hero */
    }
    .hero img {
      max-width: 100%;
      border-radius: 16px;
      box-shadow: 0 0 30px rgba(255,255,255,0.15);
      animation: fadeIn 2s ease;
    }
    .hero h2 {
      font-size: 2rem;
      margin-top: 1.5rem; /* Increased margin for better spacing */
      color: var(--gold);
      animation: slideUp 1s ease;
    }
    .services ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .services li {
      background: #111;
      padding: 1rem;
      border-left: 4px solid var(--gold);
      border-radius: 5px; /* Added slight border radius */
    }
    .catalog {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
      gap: 1.5rem;
    }
    .card {
      background: #181818;
      border: 1px solid #ffffff10;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 0 10px rgba(255,255,255,0.05);
      display: flex; /* Flexbox for button alignment */
      flex-direction: column; /* Stack content vertically */
      justify-content: space-between; /* Push buttons to bottom */
    }
    .card h3 { color: var(--gold); margin-bottom: 0.5rem; font-size: 1.3rem; }
    .card p { font-size: 0.9rem; margin-bottom: 1rem; } /* Added margin */
    .card .price { font-weight: bold; margin: 1rem 0; color: #eee; font-size: 1.1rem; }
    .card button {
      background: var(--gold);
      border: none;
      color: #000;
      padding: 0.75rem;
      width: 100%;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 0.5rem; /* Space between buttons if multiple */
    }
    .card button:hover {
      background-color: #e6c200; /* Darker gold on hover */
    }
    .card .add-to-cart-btn {
      background: #333;
      color: white;
      border: 1px solid #555;
    }
    .card .add-to-cart-btn:hover {
      background: #444;
    }

    .floating-whatsapp {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      color: white;
      border-radius: 50%;
      padding: 0.8rem 1rem;
      font-size: 1.5rem;
      text-align: center;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      z-index: 1000;
      text-decoration: none; /* Remove underline for links */
    }
    .back-to-top {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: #444;
      color: white;
      border-radius: 50%;
      padding: 0.6rem 0.8rem;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none; /* Remove underline for links */
      display: none; /* Hidden by default, shown with JS */
      z-index: 1000;
    }

    /* Cart Modal Styles */
    .cart-modal {
        display: none; /* Hidden by default */
        position: fixed;
        z-index: 1001; /* Above other content */
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.7); /* Dark semi-transparent background */
        justify-content: center;
        align-items: center;
    }

    .cart-modal-content {
        background-color: #1a1a1a;
        margin: auto;
        padding: 25px;
        border: 1px solid #333;
        width: 90%;
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        position: relative;
        transform: translateY(-20px);
        opacity: 0;
        animation: modalFadeIn 0.3s forwards;
    }

    .cart-modal-content h2 {
        color: var(--gold);
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .cart-items {
        list-style: none;
        max-height: 300px; /* Scrollable if many items */
        overflow-y: auto;
        margin-bottom: 1.5rem;
        padding-right: 10px; /* Space for scrollbar */
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 0;
        border-bottom: 1px dashed #222;
    }
    .cart-item:last-child {
        border-bottom: none;
    }
    .cart-item-info {
        flex-grow: 1;
    }
    .cart-item-info h4 {
        margin: 0;
        color: #eee;
        font-size: 1rem;
    }
    .cart-item-info span {
        font-size: 0.85rem;
        color: #bbb;
    }
    .cart-item .remove-item-btn {
        background-color: var(--red);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.4rem 0.7rem;
        cursor: pointer;
        font-size: 0.8rem;
        transition: background-color 0.3s ease;
    }
    .cart-item .remove-item-btn:hover {
        background-color: #cc0000;
    }

    .cart-total {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: right;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #333;
        color: var(--gold);
    }

    .cart-actions {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .cart-actions button {
        flex: 1;
        padding: 0.9rem;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        transition: background-color 0.3s ease;
    }
    .cart-actions .checkout-btn {
        background: var(--gold);
        color: #000;
    }
    .cart-actions .checkout-btn:hover {
        background: #e6c200;
    }
    .cart-actions .close-modal-btn {
        background: #333;
        color: white;
    }
    .cart-actions .close-modal-btn:hover {
        background: #555;
    }
    .cart-empty-message {
      text-align: center;
      padding: 2rem 0;
      color: #aaa;
    }

    @keyframes fadeIn {
      from {opacity: 0;} to {opacity: 1;}
    }
    @keyframes slideUp {
      from {opacity: 0; transform: translateY(20px);}
      to {opacity: 1; transform: translateY(0);}
    }
    @keyframes modalFadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Media Queries for Responsiveness */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
            position: static; /* Make header static on small screens */
            padding-top: 1rem; /* Adjust padding if fixed top is removed */
        }
        header h1 {
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }
        header nav {
            width: 100%;
            justify-content: space-around;
            margin-top: 0.5rem;
        }
        header nav a {
            margin: 0 0.5rem;
            font-size: 0.9rem;
        }
        .cart-icon {
            margin-left: 0.5rem; /* Adjust margin for smaller screens */
            font-size: 1.1rem;
        }
        body {
            padding-top: 0; /* Remove top padding if header is static */
        }
        section {
            padding: 1rem;
        }
        .hero h2 {
            font-size: 1.6rem;
        }
        .services ul, .catalog {
            grid-template-columns: 1fr;
        }
        .card {
            padding: 1rem;
        }
        .floating-whatsapp, .back-to-top {
            bottom: 10px;
            right: 10px;
            padding: 0.6rem 0.8rem;
            font-size: 1.2rem;
        }
        .back-to-top {
            left: 10px;
        }
        .cart-modal-content {
            width: 95%;
            padding: 15px;
        }
    }
  </style>
</head>
<body>

<header>
  <h1>KING JAY’S TECH</h1>
  <nav>
    <a href="#services">Services</a>
    <a href="#shop">Shop</a>
    <a href="#why">Why Us</a>
    <a href="#faq">FAQ</a>
    <a href="#" class="cart-icon" id="cart-icon">🛒<span class="cart-badge" id="cart-badge">0</span></a>
  </nav>
</header>

<section class="hero">
  <img src="https://via.placeholder.com/1200x400/0a0a0a/FFD700?text=Your+Dream+Website+Banner" alt="King Jay's Tech Banner">
  <h2>Your Dream Website, Built by the King</h2>
</section>

<section id="services" class="services">
  <h2>What We Build</h2>
  <ul>
    <li>Landing Pages & Business Sites</li>
    <li>E-commerce Platforms</li>
    <li>Portfolios & Personal Brands</li>
    <li>Booking & Real Estate Sites</li>
    <li>Church, NGO & Event Websites</li>
  </ul>
</section>

<section id="why">
  <h2>Why Choose King Jay’s Tech</h2>
  <p>✔ Fast Delivery<br>✔ Secure & Mobile-Friendly<br>✔ Free Consultations<br>✔ Royal Quality, Every Time</p>
</section>

<section id="shop">
  <h2>Our Website Packages</h2>
  <div class="catalog" id="website-list"></div>
</section>

<section id="faq">
  <h2>FAQs</h2>
  <p><strong>Q:</strong> How long does it take?<br><strong>A:</strong> Most sites are done in 3–7 days.</p>
  <p><strong>Q:</strong> What payment do you accept?<br><strong>A:</strong> Mobile Money, bank transfer, and PayPal by request.</p>
</section>

<a href="https://wa.me/233538858495" target="_blank" class="floating-whatsapp">💬</a>

<a href="#" class="back-to-top" id="back-to-top">↑</a>

<div id="cart-modal" class="cart-modal">
  <div class="cart-modal-content">
    <h2>Your Cart</h2>
    <ul id="cart-items" class="cart-items">
      </ul>
    <p id="cart-empty-message" class="cart-empty-message" style="display: none;">Your cart is empty.</p>
    <div class="cart-total">
      Total: <span id="cart-total-price">GHS 0</span>
    </div>
    <div class="cart-actions">
      <button class="checkout-btn" id="checkout-btn">Proceed to Checkout</button>
      <button class="close-modal-btn" id="close-cart-modal">Continue Shopping</button>
    </div>
  </div>
</div>

<script>
  const WA_PHONE = '233538858495';  
  const SMS_PHONE = '0538858495';
  const WA_GREETING = "Hello King Jay's Tech, I'm interested in your website services.";

  const websites = [
    { id: 1, name: "Starter Portfolio", description: "Sleek 5-page portfolio site.", price: 500, displayPrice: "GHS 500" },
    { id: 2, name: "E-Commerce Bundle", description: "Shop + Payments + Admin Panel.", price: 1500, displayPrice: "GHS 1500" },
    { id: 3, name: "Blog Pro", description: "SEO blog with comments.", price: 800, displayPrice: "GHS 800" },
    { id: 4, name: "Corporate Site", description: "Multi-section business site.", price: 1200, displayPrice: "GHS 1200" }
  ];

  let cart = []; // Stores objects like { id: 1, name: "Starter Portfolio", price: 500 }

  const cartBadge = document.getElementById('cart-badge');
  const cartIcon = document.getElementById('cart-icon');
  const cartModal = document.getElementById('cart-modal');
  const closeCartModalBtn = document.getElementById('close-cart-modal');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalPriceElement = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('checkout-btn');
  const cartEmptyMessage = document.getElementById('cart-empty-message');
  const backToTopBtn = document.getElementById('back-to-top');

  function renderList() {
    const container = document.getElementById('website-list');
    container.innerHTML = ''; // Clear existing content
    websites.forEach(site => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${site.name}</h3>
        <p>${site.description}</p>
        <div class="price">${site.displayPrice}</div>
        <button class="add-to-cart-btn" data-id="${site.id}">Add to Cart</button>
        <button class="contact-buy-btn" data-id="${site.id}">Contact to Buy</button>
      `;
      // Attach event listeners using delegation or directly
      card.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(site));
      card.querySelector('.contact-buy-btn').addEventListener('click', () => contactSeller([site])); // Pass as array for single item
      container.appendChild(card);
    });
  }

  function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // Optional: If you want quantity, increment it here. For unique items, do nothing.
      // existingItem.quantity++;
      alert(${product.name} is already in your cart!);
    } else {
      cart.push({ ...product, quantity: 1 }); // Add quantity property
      updateCartDisplay();
      alert(${product.name} added to cart!);
    }
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
  }

  function updateCartDisplay() {
    cartBadge.textContent = cart.length;
    cartItemsContainer.innerHTML = ''; // Clear current cart items

    if (cart.length === 0) {
      cartEmptyMessage.style.display = 'block';
      cartItemsContainer.style.display = 'none';
      checkoutBtn.disabled = true;
    } else {
      cartEmptyMessage.style.display = 'none';
      cartItemsContainer.style.display = 'block';
      checkoutBtn.disabled = false;
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span>${item.displayPrice}</span>
          </div>
          <button class="remove-item-btn" data-id="${item.id}">Remove</button>
        `;
        li.querySelector('.remove-item-btn').addEventListener('click', () => removeFromCart(item.id));
        cartItemsContainer.appendChild(li);
        total += item.price;
      });
      cartTotalPriceElement.textContent = GHS ${total};
    }
  }

  function contactSeller(items = [], type = 'single') {
    let message;
    if (type === 'single' && items.length === 1) {
      message = Hi, I’m interested in buying the "${items[0].name}" package.;
    } else if (type === 'checkout' && items.length > 0) {
      const itemNames = items.map(item => item.name).join(', ');
      const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
      message = Hi, I'd like to purchase the following website packages:\n\n;
      items.forEach(item => {
        message += - ${item.name} (${item.displayPrice})\n;
      });
      message += \nTotal: GHS ${totalPrice}\n\nPlease let me know the next steps.;
    } else {
      message = WA_GREETING; // General inquiry if no specific items
    }

    const waLink = https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)};
    const smsLink = sms:${SMS_PHONE}?&body=${encodeURIComponent(message)};

    // Try opening WhatsApp first, fallback to SMS
    window.open(waLink, '_blank') || window.open(smsLink, '_blank');
  }

  // Event Listeners
  cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    updateCartDisplay(); // Refresh cart content when modal opens
  });

  closeCartModalBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  // Close modal if user clicks outside of the content
  cartModal.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      contactSeller(cart, 'checkout');
      cartModal.style.display = 'none'; // Close modal after checkout
      cart = []; // Clear cart after checkout (optional, depends on flow)
      updateCartDisplay(); // Update display for empty cart
    } else {
      alert("Your cart is empty. Please add items before checking out.");
    }
  });

  // Back to top button visibility
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show after scrolling 300px down
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    renderList();
    updateCartDisplay(); // Initialize cart badge on load
  });
</script>

</body>
</html>