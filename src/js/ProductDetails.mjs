import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import {findProductById} from "./ProductData.mjs";
import {qs, setContent} from "./utils.mjs";

function addProductToCart(product){
    const currentCart = getLocalStorage("so-cart") ||[];
    console.log(currentCart);
    currentCart.push(product);
    setLocalStorage("so-cart", currentCart);
  }
  
  export default async function productDetails(productId){
    const product = await findProductById(productId);
    renderProductDetails(product);
  }
  
  function renderProductDetails(product){
    setContent("#productName", product.Brand.Name);
    setContent("#productNameWithoutBrand", product.NameWithoutBrand);
    setContent("#productFinalPrice", product.FinalPrice);
    setContent("#productDescriptionHtmlSimple", product.DescriptionHtmlSimple);
    //image src
  qs("#productImage").setAttribute("src", product.Image);

  //add to cart
  qs("#addToCart").addEventListener("click", addProductToCart.bind(null, product));
}