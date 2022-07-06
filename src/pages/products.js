// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
// specific imports
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
// import fetch products
import fetchProducts from '../fetchProducts.js';

const init = async () => {
  const loading = getElement('.page-loading');
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, getElement('.products-container'));

  loading.style.display = 'none';
};

init();
