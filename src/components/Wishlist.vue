<template>
  <div>
    <navbar />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-2xl mx-auto mt-6">
      <h1 class="text-2xl font-bold mb-4 p-6 bg-white flex justify-between items-center">
        Wishlist
        <button 
          v-if="wishlist.length > 0" 
          @click="clearWishlist" 
          class="text-red-600 hover:text-red-800 text-sm">
          Clear All
        </button>
      </h1>
      <div v-if="wishlist.length === 0" class="text-gray-500 p-6 bg-white">Your wishlist is empty.</div>
      <table v-else class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-16 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Qty
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in wishlist" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="p-4">
              <img :src="item.image" class="w-16 md:w-32 max-w-full max-h-full" :alt="item.title" />
            </td>
            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              {{ item.title }}
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <button @click="decreaseQuantity(item)" class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span class="sr-only">Decrease quantity</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                  </svg>
                </button>
                <div>
                  <input type="number" :value="item.quantity" @input="updateQuantity(item, $event.target.value)" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button @click="increaseQuantity(item)" class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span class="sr-only">Increase quantity</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
                </button>
              </div>
            </td>
            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              ${{ item.price }}
            </td>
            <td class="px-6 py-0 flex mt-[70px] space-x-2">
              <button @click="addToCart(item)" class="text-green-600 hover:text-green-800">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="file: h-6 w-6 #a3e635 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
              </button>
              <button @click="removeFromWishlist(item.id)" class="text-red-600 hover:text-red-800">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import navbar from './navbar.vue';
import { wishlistStore } from '../router/store';

export default {
  components: {
    navbar
  },
  setup() {
    const wishlist = wishlistStore.wishlist;

    const removeFromWishlist = (productId) => {
      wishlistStore.removeFromWishlist(productId);
    };

    const updateQuantity = (item, quantity) => {
      const parsedQuantity = parseInt(quantity, 10);
      if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
        item.quantity = parsedQuantity;
      }
    };

    const increaseQuantity = (item) => {
      item.quantity++;
    };

    const decreaseQuantity = (item) => {
      if (item.quantity > 1) {
        item.quantity--;
      }
    };

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };


    return { wishlist, removeFromWishlist, updateQuantity, increaseQuantity, decreaseQuantity, addToCart };
  }
};
</script>
