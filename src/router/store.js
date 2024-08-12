// store.js
import { reactive } from 'vue';

export const cartStore = reactive({
  products: [],
  addToCart(product) {
    const existingProduct = this.products.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.products.push({ ...product, quantity: 1 });
    }
  },
  removeFromCart(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  },
  clearCart() {
    this.products = [];
  }
});
