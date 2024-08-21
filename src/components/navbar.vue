<template>
  <div>
    <header class="sticky z-50 top-0">
      <nav class="bg-gray-900 border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <router-link to="/" class="text-lg font-bold text-white"> 
            <span> 
              <button class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../assets/online-shop.png" class="h-8" alt="SwiftCart Logo" />
                
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  SwiftCart
                </span>
              </button>
            </span>
          </router-link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col top-10 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <router-link to="/Wishlist" class="text-lg font-bold text-white"> 
                <li class="flex items-center">
                  <span class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 flex items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="h-6 w-6 ml-2 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    <!-- Badge for Wishlist Count -->
                    <div v-if="wishlistCount > 0" class="absolute top-0 left-6 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {{ wishlistCount }}
                    </div>
                  </span>
                </li>
              </router-link>
            <router-link to="/Comparison" class="text-lg font-bold text-white"> 
              <li>
                <span class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 stroke-white cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                </span>
              </li>
            </router-link>
              <li class="hidden lg:block md:block relative">
                <div class="t-0 absolute left-3 -top-4" v-if="cartCount > 0">
                  <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {{ cartCount }}
                  </p>
                </div>
                <router-link
                  to="/cart"
                  class="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="h-6 w-6 stroke-white cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </router-link>
              </li>
              <li>
                <span class="lg:hidden md:hidden py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Cart
                </span>
              </li>
              <li v-if="!isAuthenticated">
                <router-link
                  to="/login"
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </router-link>
              </li>
              <li v-else>
                <button
                  @click="logout"
                  class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32" 
                    class="h-6 w-6 stroke-white"
                  >
                    <path 
                      d="M29.71,16.71l-4,4-1.42-1.42L26.59,17H21a3,3,0,0,1-3-3V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V27a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V20h2v7a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H17a3,3,0,0,1,3,3v9a1,1,0,0,0,1,1h5.6l-2.26-2.28,1.42-1.41,3.95,4A1,1,0,0,1,29.71,16.71Z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { cartStore, wishlistStore } from '../router/store';

export default {
  computed: {
    cartCount() {
      return cartStore.products.reduce((sum, product) => sum + product.quantity, 0);
    },
    wishlistCount() {
      return wishlistStore.wishlist.length; // Calculate the total number of items in the wishlist
    },
    isAuthenticated() {
      return !!localStorage.getItem('authToken'); 
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken'); 
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

