// global imports
import "../../toggleSidebar.js";
import "../../cart/toggleCart.js";
import "../../cart/setupCart.js";

//  filter imports
// specific imports
import {store, setupStore} from "../../store.js";
import display from "../../products/displayProducts.js";
import {getElement} from "../../utils/utils.js";
// import fetch products
import fetchProducts from "../../products/fetchProducts.js";

const searchBarEl = document.getElementById("search-bar");
const searchBarResultEl = document.getElementById("search-bar-text");
let products = [];

const init = async () => {
  const loading = getElement(".page-loading");
  if (store.length < 1) {
    products = await fetchProducts();
    setupStore(products);
  }
  display(store, getElement(".products-container"));

  loading.style.display = "none";
};

searchBarEl.addEventListener("change", (event) => {
  const value = event.target.value;

  const filteredStore = store.filter((item) =>
    item.name.includes(value.toLowerCase())
  );

  searchBarResultEl.innerHTML = value;

  display(filteredStore, getElement(".products-container"));

});

init();
