<template>
  <navbar />
  <div v-if="loading">Loading...</div>
  <div v-else class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
    <div class="flex justify-between items-center">
      <img :src="product.image" :alt="product.title" class="object-contain h-48 mt-3 mx-auto" />
      <router-link to="/" class="text-gray-600 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </router-link>
    </div>
    <h1 class="text-2xl font-bold mt-4">{{ product.title }}</h1>
    <div class="flex items-center mt-2">
      <svg v-for="star in 5" :key="star" class="w-4 h-4 fill-current" :class="star <= Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z" />
      </svg>
      <span class="ml-2 text-sm text-gray-500">
        {{ product.rating.rate.toFixed(1) }} ({{ product.rating.count }} reviews)
      </span>
    </div>
    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-2">
      {{ product.category }}
    </span>
    <h3 class="text-xl font-bold mt-4">${{ product.price }}</h3>

    <div class="flex justify-between mt-4 space-x-4">
    <button @click.stop="addToCart(product)" class="flex items-center justify-center flex-1 bg-cyan-700 hover:bg-cyan-900 hover:text-white font-bold py-2 px-4 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="file: h-6 w-6 #a3e635 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
      </svg>Add To Cart
    </button>

    <button @click="addToWishlist(product)" class="flex items-center justify-center flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
      </svg>
      <span class="ml-2">Add to Favorites</span>
    </button>
  </div>

    <h2 class="text-lg font-bold mt-4">Description</h2>
    <p class="mt-2">{{ product.description }}</p>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { cartStore, wishlistStore } from '../router/store'; 

export default {
  name: 'ProductDetail',
  components: {
    navbar
  },
  props: {
    /**
     * The ID of the product to display.
     * @type {String}
     */
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const product = ref({});
    const loading = ref(true);

    /**
     * Fetch the product details from the API.
     * Sets `product` and `loading` based on the API response.
     * Catches and logs any errors encountered during the fetch.
     * @async
     */
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${props.id}`);
        product.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error("There was an error fetching the product:", error);
        loading.value = false;
      }
    };

    /**
     * Add a product to the cart.
     * @param {Object} product - The product to add to the cart.
     */
    const addToCart = (product) => {
      cartStore.addToCart(product); 
    };

    /**
     * Add a product to the wishlist.
     * Logs a message to the console after adding.
     * @param {Object} product - The product to add to the wishlist.
     */
    const addToWishlist = (product) => {
      wishlistStore.addToWishlist(product);
      console.log(`${product.title} added to wishlist!`);  
    };

    onMounted(fetchProduct);

    return { product, loading, addToWishlist, addToCart };
  }
};
</script>