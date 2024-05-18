import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Images.PrimarySmall}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: <input type="number" value="${item.quantity}" min="1" class="cart-quantity-input" data-id="${item.Id}" /></p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
    this.total = 0;
  }

  async init() {
    const list = getLocalStorage(this.key);
    this.calculateListTotal(list);
    this.renderCartContents(list);
    this.addQuantityListeners();
  }

  calculateListTotal(list) {
    const amounts = list.map(item => item.FinalPrice * item.quantity);
    this.total = amounts.reduce((sum, item) => sum + item, 0);
  }

  renderCartContents(list) {
    const htmlItems = list.map(item => cartItemTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    document.querySelector(".list-total").innerText = ` $${this.total}`;
  }

  addQuantityListeners() {
    const quantityInputs = document.querySelectorAll(".cart-quantity-input");
    quantityInputs.forEach(input => {
      input.addEventListener('change', (event) => {
        this.updateQuantity(event.target);
      });
    }); 
  }

  updateQuantity(input) {
    const itemId = input.dataset.id;
    const newQuantity = parseInt(input.value);
    const cartItems = getLocalStorage(this.key);
    const item = cartItems.find(item => item.Id === itemId);
    item.quantity = newQuantity;
    setLocalStorage(this.key, cartItems);
    this.calculateListTotal(cartItems);
    this.renderCartContents(cartItems);
    this.addQuantityListeners(); // Re-add listeners after re-render
  }
}
