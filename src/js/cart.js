// import { getLocalStorage } from "./utils.mjs";

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   console.log(cartItems);
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//   return newItem;
// }

// renderCartContents();

//second method

// import { getLocalStorage } from "./utils.mjs";

// function renderCartContents() {
//     const cartItems = getLocalStorage("so-cart");
//     console.log(cartItems);
//     const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//     document.querySelector(".product-list").innerHTML = htmlItems.join("");

//     // Calculate and display the total cart amount if it's not empty
//     if (cartItems.length > 0) {
//         const total = calculateTotal(cartItems);
//         showTotal(total);
//     }
// }

// function cartItemTemplate(item) {
//     const newItem = `<li class="cart-card divider">
//     <a href="#" class="cart-card__image">
//         <img src="${item.Image}" alt="${item.Name}" />
//     </a>
//     <a href="#">
//         <h2 class="card__name">${item.Name}</h2>
//     </a>
//     <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//     <p class="cart-card__quantity">qty: 1</p>
//     <p class="cart-card__price">$${item.FinalPrice}</p>
//     </li>`;

//     return newItem;
// }

// function calculateTotal(cartItems) {
//     let total = 0;
//     for (const item of cartItems) {
//         total += item.FinalPrice;
//     }
//     return total.toFixed(2); // Round the total to two decimal places
// }

// function showTotal(total) {
//     const cartFooter = document.querySelector('.cart-footer');
//     cartFooter.classList.remove('hide'); // Show the total if there are items in the cart
//     const cartTotalElement = document.querySelector('.cart-total');
//     cartTotalElement.textContent = `Total: $${total}`;
// }

// renderCartContents();


//third method

import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();