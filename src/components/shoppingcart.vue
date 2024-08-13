<template>
  <div>
    <navbar />
    <section class="py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div class="space-y-6">
              <div v-for="(product, index) in products" :key="index" class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" class="shrink-0 md:order-1">
                    <img :src="product.image" class="object-contain h-48 mt-3" :alt="product.title" />
                  </a>

                  <label for="counter-input" class="sr-only">Choose quantity:</label>
                  <div class="flex items-center justify-between md:order-3 md:justify-end">
                    <div class="flex items-center">
                      <button type="button" @click="decrement(index)" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" v-model="product.quantity" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" required />
                      <button type="button" @click="increment(index)" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                    <div class="text-end md:order-4 md:w-32">
                      <p class="text-base font-bold text-gray-900 dark:text-white">${{ (product.price * product.quantity).toFixed(2) }}</p>
                    </div>
                  </div>

                  <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{{ product.title }}</a>

                    <div class="flex items-center gap-4">
                      <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                        <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                        </svg>
                        Add to Favorites
                      </button>

                      <button type="button" @click="remove(index)" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div class="space-y-4">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">${{ originalPrice.toFixed(2) }}</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd class="text-base font-medium text-green-600">-${{ savings.toFixed(2) }}</dd>
                  </dl>
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">${{ tax.toFixed(2) }}</dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">${{ total.toFixed(2) }}</dd>
                </dl>
              </div>

              <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 112.75" fill="currentColor">
                  <path d="M19.78,16.38h47.97c-0.64,2.13-1.05,4.35-1.22,6.65l-4.71-0.01h0l4.81,19.99h5.34c1.28,1.85,2.76,3.55,4.4,5.08h-8.51l4.08,16.99l11.76-1.6h0l-2.86-11.92c2.39,1.52,5,2.73,7.77,3.56l1.79,7.44l0.85-0.12c5.31-0.76,4.95,0.45,5.37-4.55l0.12-1.48c0.27,0.01,0.55,0.01,0.83,0.01c2,0,3.95-0.19,5.84-0.55l-0.53,6.82c-0.52,6.16-0.08,4.67-6.61,5.6l-59.96,7.63l3.17,9.21c26.01,0,38.59,0,64.59,0c0.88,3.27,2.06,8.59,2.94,12.24H96.26l-1.03-3.73c-21.67,0-29.93,0-51.61,0c-11.84-0.2-10.65,3-13.49-7.22L9.77,12.46H0V5.37h17.13C17.93,8.35,19.04,13.37,19.78,16.38L19.78,16.38z M97.56,0c13.98,0,25.32,11.34,25.32,25.32c0,13.98-11.34,25.32-25.32,25.32c-13.98,0-25.32-11.34-25.32-25.32C72.24,11.34,83.58,0,97.56,0L97.56,0z M86.36,25.99c0.34-1.97,2.59-3.07,4.36-2c0.16,0.1,0.31,0.21,0.46,0.34l0.01,0.01c0.8,0.76,1.69,1.56,2.57,2.34l0.76,0.68l9-9.44c0.54-0.56,0.93-0.93,1.74-1.11c2.76-0.61,4.7,2.77,2.75,4.83L96.79,33.43c-1.06,1.13-2.95,1.23-4.08,0.15c-0.65-0.6-1.36-1.22-2.07-1.84c-1.24-1.08-2.5-2.18-3.53-3.26C86.48,27.86,86.21,26.84,86.36,25.99L86.36,25.99L86.36,25.99z M46.92,96.19c4.57,0,8.28,3.71,8.28,8.29c0,4.58-3.71,8.28-8.28,8.28c-4.58,0-8.29-3.71-8.29-8.28C38.63,99.9,42.34,96.19,46.92,96.19L46.92,96.19z M81.09,96.19c4.57,0,8.28,3.71,8.28,8.29c0,4.58-3.71,8.28-8.28,8.28c-4.58,0-8.29-3.71-8.29-8.28C72.8,99.9,76.51,96.19,81.09,96.19L81.09,96.19z M26.92,43.01h13.19l-4.79-20.02c-4.71,0-9.37-0.01-13.92-0.01l1.61,5.99l0.05-0.01L26.92,43.01L26.92,43.01L26.92,43.01z M42.22,23l4.79,20.01h12.71l-4.81-20L42.22,23L42.22,23L42.22,23z M65.24,66l-4.3-17.9l-12.71,0l4.69,19.59L65.24,66L65.24,66L65.24,66z M46.22,68.59l-4.9-20.5H28.32l6.08,22.11L46.22,68.59L46.22,68.59z"/>
                </svg>
                Proceed to Checkout
              </a>
              
              
              <div class="flex items-center justify-center gap-2">
                
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                <router-link to="/" class="text-lg font-bold">
                <div class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Continue Shopping
                  <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 13 4.293-4.293a1 1 0 0 0 0-1.414L6 3" />
                  </svg>
               
              </div>
            </router-link>
              </div>
              
            </div>
         
            <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p class="text-base font-medium text-gray-500 dark:text-gray-400">Shipping to <span class="font-bold text-gray-900 dark:text-white">United States</span></p>
              <p class="text-base font-medium text-gray-500 dark:text-gray-400">Arrives by <span class="font-bold text-gray-900 dark:text-white">Wednesday, Dec 25th</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import { cartStore } from '../router/store';

export default {
  components: {
    navbar
  },
  computed: {
    products() {
      return cartStore.products;
    },
    originalPrice() {
      return this.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    },
    savings() {
      return 0; 
    },
    tax() {
      return (this.originalPrice - this.savings) * 0.15; 
    },
    total() {
      return this.originalPrice - this.savings + this.tax; 
    }
  },
  methods: {
    increment(index) {
      this.products[index].quantity++;
    },
    decrement(index) {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      }
    },
    remove(index) {
      cartStore.removeFromCart(this.products[index].id);
    }
  }
};
</script>
