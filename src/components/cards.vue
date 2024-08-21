<template>
  <div :class="['grid justify-center', theme]">

    <div class="flex justify-end p-4">
      <button @click="toggleTheme" class="p-2 bg-gray-200 dark:bg-gray-700 rounded">
        <svg v-if="theme === 'light'" class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.485-4.485l-.707-.707M5.515 7.515l-.707-.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M7.515 5.515l-.707-.707M17 12a5 5 0 11-10 0 5 5 0 0110 0z"></path>
        </svg>
        <svg v-else class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.485-4.485l-.707-.707M5.515 7.515l-.707-.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M7.515 5.515l-.707-.707M17 12a5 5 0 11-10 0 5 5 0 0110 0z"></path>
        </svg>
      </button>
    </div>

    <div class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
      <div v-for="product in products" :key="product.id"
        @click="handleClick(product.id)"
        class="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white dark:bg-gray-800 border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden">
        <img :src="product.image" class="object-contain h-48 mt-3" :alt="product.title" />

        <div class="flex-1 flex flex-col p-6">
          <div class="flex-1">
            <header class="mb-2 flex-2">
              <h2 class="text-lg line-clamp-2 font-extrabold leading-snug">
                <div class="text-slate-600 dark:text-white focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                  {{ product.title }}
                </div>
              </h2>
            </header>
            <div class="flex items-center mt-2">
              <svg v-for="star in 5" :key="star" class="w-4 h-4 fill-current" :class="star <= Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z" />
              </svg>
              <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {{ product.rating.rate.toFixed(1) }} ({{ product.rating.count }} reviews)
              </span>
            </div>
            <div class="text-base line-clamp-2 font-extrabold text-slate-500 dark:text-white leading-snug">
              <h2>${{ product.price }}</h2>
            </div>
          </div>

          <div class="flex mt-1 space-x-2">
            <div class="justify-start flex-1">
              <span class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                {{ product.category }}
              </span>
            </div>
            <div class="justify-end space-x-2">
              <!-- <button @click.stop="addToFavourites(product)">
                <svg class="me-1.5 h-5 w-5 hover:fill-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" transform="scale(1.6)">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                </svg>
              </button> -->
              <botton @click.stop="addToFavourites(product) " class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                </svg>
              </botton>
              <button @click.stop="addToComparison(product)">
                <img src="../assets/plus-and-minus.png" alt="Compare Icon" class="h-6 w-6" />
            
              </button>                                  
              <button  @click.stop="addToCart(product)" class="text-gray-500 hover:text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="file: h-6 w-6 #a3e635 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { cartStore, wishlistStore, comparisonStore } from '../router/store';

export default {
  name: 'cards',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      theme: localStorage.getItem('theme') || 'light', // Default theme
    };
  },
  watch: {
    theme(newTheme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      this.updateBackgroundColor(newTheme);
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
    updateBackgroundColor(theme) {
      document.body.className = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    },
    handleClick(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    addToCart(product) {
      cartStore.addToCart(product);
    },
    addToFavourites(product) {
      wishlistStore.addToWishlist(product);
      console.log('Product added to wishlist:', product);
    },
    addToComparison(product) {
      comparisonStore.addToComparison(product);
    }
  },
  created() {
    document.documentElement.classList.add(this.theme);
    this.updateBackgroundColor(this.theme);
  }
};
</script>
