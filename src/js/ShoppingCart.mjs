import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {



  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>

</li>`;

console.log(item);

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");

    if (cartItems.length > 0) {
      const total = calculateTotal(cartItems);
      showTotal(total);
    }    
  }
}

function calculateTotal(cartItems) {
  let total = 0;
  for (const item of cartItems) {
  total += item.FinalPrice;
  }
  return total.toFixed(2); // Round the total to two decimal places
}

function showTotal(total) {
  const cartFooter = document.querySelector('.cart-footer');
  cartFooter.classList.remove('hide'); // Show the total if there are items in the cart
  const cartTotalElement = document.querySelector('.cart-total');
  cartTotalElement.textContent = `Total: $${total}`;
}
  