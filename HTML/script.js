// Using jQuery for fitting text
jQuery("#content1-headline1").fitText(1.0);
jQuery("#content1-headline2").fitText(1.0);
jQuery("#content1-headline3").fitText(1.0);
jQuery("#content2-1").fitText(2.0);
jQuery("#content2-2").fitText(2.0);
jQuery("#footer1").fitText(1.2);
jQuery("#footer2").fitText(1.2);
jQuery("#footer3").fitText(1.2);
jQuery("#footer4").fitText(1.2);

// Using jQuery for handling window resize
$(window).resize(function() {
  if (document.documentElement.clientWidth <= 430) {
    $(".navbar-brand").html("<img src='log.jpg'>");
  } else {
    $(".navbar-brand").html("<img src='log.jpg'>");
  }
});

 // Cart data structure
 const cartItems = [];

 // Function to add item to cart
 function addToCart(name, price) {
     cartItems.push({ name, price });
     updateCartDisplay();
 }

 // Function to update cart display
 function updateCartDisplay() {
     const cartList = document.getElementById('cart-items');
     cartList.innerHTML = '';
     cartItems.forEach(item => {
         const li = document.createElement('li');
         li.textContent = `${item.name} - AED ${item.price}`;
         cartList.appendChild(li);
     });
 }

 // Add click event listener to all add-to-cart buttons
 const addToCartButtons = document.querySelectorAll('.add-to-cart');
 addToCartButtons.forEach(button => {
     button.addEventListener('click', function() {
         const itemName = this.getAttribute('data-name');
         const itemPrice = parseFloat(this.getAttribute('data-price'));
         addToCart(itemName, itemPrice);
     });
 });