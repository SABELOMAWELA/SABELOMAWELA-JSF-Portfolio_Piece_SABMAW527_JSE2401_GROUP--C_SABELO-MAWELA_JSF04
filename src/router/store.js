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
});

export const wishlistStore = reactive({
  wishlist: [],
  addToWishlist(product) {
    const existingProduct = this.wishlist.find((p) => p.id === product.id);
    if (!existingProduct) {
      this.wishlist.push(product);
    }
  },
  removeFromWishlist(productId) {
    this.wishlist = this.wishlist.filter((product) => product.id !== productId);
  },
  clearWishlist() {
    this.wishlist.length = 0;
  },
});

export const comparisonStore = reactive({
  comparison: [],
  addToComparison(product) {
    const existingProduct = this.comparison.find((p) => p.id === product.id);
    if (!existingProduct) {
      this.comparison.push(product);
    }
  },
  removeFromComparison(productId) {
    this.comparison = this.comparison.filter((product) => product.id !== productId);
  },
  clearComparison() {
    this.comparison = [];
  },
});
