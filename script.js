/*query all add to cart buttons*/
const addToCartButton = document.querySelectorAll(".addCart");

/* query all remove from cart buttons*/
const removeFromCartButton = document.querySelectorAll(".remove");

//create cart-counter element
const cartCounterElement = document.getElementById("cart-counter");

//create cart-price element 
const cartPriceElement =
      document.getElementById("cart-price");

//start cart-counter with number 0 and incremeent by 1
let cartCounter = 0;

//start cart-price with number 0 and incremeent by 1
let cartPrice = 0;

let cartItems = [];

// for each loop which adds event listener of click to each button
addToCartButton.forEach(button => {
  button.addEventListener("click", (addCart) => {
    const productPrice = parseFloat(button.dataset.price);
    
    const productName = button.parentNode.querySelector('.name').textContent;
    
    console.log(productName);
    
    const existingProduct = cartItems.find(item => item.name === productName);
    
    // Add the product to the cart array
    cartItems.push({ name: productName, price: productPrice });

   // Update the cart count and total price
    let cartItemCount = cartItems.length;
    let cartTotalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // Update the display, formatting the price to two decimal places
    cartCounterElement.textContent = cartItemCount;
    cartPriceElement.textContent = `$${cartTotalPrice.toFixed(2)}`;
  });
});


removeFromCartButton.forEach((button) => {
  button.addEventListener("click", (remove) => {
    let productPrice = parseFloat(button.dataset.price);
    let productName = button.parentNode.querySelector('.name').textContent;

   // Create a new array to store the filtered items
  let filteredCartItems = cartItems.filter(item => item.name !== productName);

  // Update the cart items with the filtered version
  cartItems = filteredCartItems;

    // Update the cart count and total price
    let cartItemCount = cartItems.length;
    let cartTotalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    cartCounterElement.textContent = cartItemCount;
    cartPriceElement.textContent = `$${cartTotalPrice.toFixed(2)}`;
  });
});