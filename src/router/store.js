import { reactive } from 'vue';

/**
 * A reactive store for managing cart products.
 * @type {Object}
 */
export const cartStore = reactive({
  products: [],

  /**
   * Adds a product to the cart. If the product already exists in the cart, it increments the quantity.
   * @param {Object} product - The product to add to the cart.
   * @param {number} product.id - The unique identifier for the product.
   * @param {string} product.name - The name of the product.
   * @param {number} product.price - The price of the product.
   */
  addToCart(product) {
    const existingProduct = this.products.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.products.push({ ...product, quantity: 1 });
    }
  },

  /**
   * Removes a product from the cart by its ID.
   * @param {number} productId - The unique identifier for the product to remove.
   */
  removeFromCart(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  },

  /**
   * Clears all products from the cart.
   */
  clearCart() {
    this.products.length = 0; // Clear the products array
  },
});

/**
 * A reactive store for managing wishlist products.
 * @type {Object}
 */
export const wishlistStore = reactive({
  wishlist: [],

  /**
   * Adds a product to the wishlist if it is not already present.
   * @param {Object} product - The product to add to the wishlist.
   * @param {number} product.id - The unique identifier for the product.
   * @param {string} product.name - The name of the product.
   * @param {number} product.price - The price of the product.
   */
  addToWishlist(product) {
    const existingProduct = this.wishlist.find((p) => p.id === product.id);
    if (!existingProduct) {
      this.wishlist.push(product);
    }
  },

  /**
   * Removes a product from the wishlist by its ID.
   * @param {number} productId - The unique identifier for the product to remove.
   */
  removeFromWishlist(productId) {
    this.wishlist = this.wishlist.filter((product) => product.id !== productId);
  },

  /**
   * Clears all products from the wishlist.
   */
  clearWishlist() {
    this.wishlist.length = 0;
  },
});

/**
 * A reactive store for managing comparison products.
 * @type {Object}
 */
export const comparisonStore = reactive({
  comparison: [],

  /**
   * Adds a product to the comparison list if it is not already present.
   * @param {Object} product - The product to add to the comparison list.
   * @param {number} product.id - The unique identifier for the product.
   * @param {string} product.name - The name of the product.
   * @param {number} product.price - The price of the product.
   */
  addToComparison(product) {
    const existingProduct = this.comparison.find((p) => p.id === product.id);
    if (!existingProduct) {
      this.comparison.push(product);
    }
  },

  /**
   * Removes a product from the comparison list by its ID.
   * @param {number} productId - The unique identifier for the product to remove.
   */
  removeFromComparison(productId) {
    this.comparison = this.comparison.filter((product) => product.id !== productId);
  },

  /**
   * Clears all products from the comparison list.
   */
  clearComparison() {
    this.comparison = [];
  },
});
