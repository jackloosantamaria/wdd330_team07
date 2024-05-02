// import { setLocalStorage, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";


// const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

import {getParam} from "./utils.mjs";
import productDetails from "./ProductDetails.mjs";

const productId = getParam("product");
productDetails(productId);