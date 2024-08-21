<template>
    <navbar />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-6">
      <div class="flex flex-col">
        <div class="bg-gray-50 text-gray-700 text-xs font-semibold uppercase py-3 px-6">
          Product Details
        </div>
        <div class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
        
          <div class="flex">
            <div class="w-1/5 px-6 py-3 font-semibold">Image</div>
            <div v-for="product in limitedComparison" :key="product.id" class="w-1/5 px-6 py-4 border-l border-gray-200 dark:border-gray-700">
              <img :src="product.image" class="object-contain h-20 w-20 rounded-lg shadow-md" :alt="product.title" />
            </div>
          </div>
   
          <div class="flex">
            <div class="w-1/5 px-6 py-3 font-semibold">Title</div>
            <div v-for="product in limitedComparison" :key="product.id" class="w-1/5 px-6 py-4 border-l border-gray-200 dark:border-gray-700">
              {{ product.title }}
            </div>
          </div>
        
          <div class="flex">
            <div class="w-1/5 px-6 py-3 font-semibold">Category</div>
            <div v-for="product in limitedComparison" :key="product.id" class="w-1/5 px-6 py-4 border-l border-gray-200 dark:border-gray-700">
              {{ product.description}}
            </div>
          </div>
        
            <div class="flex">
              <div class="w-1/5 px-6 py-3 font-semibold">Ratings</div>
              <div v-for="product in limitedComparison" :key="product.id" class="w-1/5 px-6 py-4 border-l border-gray-200 dark:border-gray-700">
                <div class="flex items-center">
                  <svg v-for="star in 5" :key="star" class="w-4 h-4 fill-current" :class="star <= Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.852 1.428 8.287L12 18.897l-7.365 3.851 1.428-8.287-6.063-5.852 8.332-1.151z" />
                  </svg>
                  <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {{ product.rating.rate.toFixed(1) }} ({{ product.rating.count }} reviews)
                  </span>
                </div>
              </div>
            </div>
          
          <div class="flex">
            <div class="w-1/5 px-6 py-3 font-semibold">Price</div>
            <div v-for="product in limitedComparison" :key="product.id" class="w-1/5 px-6 py-4 border-l border-gray-200 dark:border-gray-700">
              ${{ product.price }}
            </div>
          </div>
       
          <div class="flex">
            <div class="w-1/5 px-6 py-3 font-semibold">Action</div>
            <div v-for="product in limitedComparison" :key="product.id" class="w-1/5 px-6 py-4 border-l border-gray-200 dark:border-gray-700">
              <button
                @click="removeFromComparison(product.id)"
                class="inline-flex justify-center whitespace-nowrap rounded-lg bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors"
              >
                Remove
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
  
  </template>
  
  <script>
  import { computed } from 'vue';
  import { comparisonStore } from '../router/store';
  import navbar from './navbar.vue';
  
  export default {
    name: 'ComparisonList',
    components: {
      /**
       * The navbar component imported from `navbar.vue`.
       */
      navbar,
    },
    setup() {
      /**
       * Removes a product from the comparison list.
       * @param {string} productId - The ID of the product to remove from the comparison list.
       */
      const removeFromComparison = (productId) => {
        comparisonStore.removeFromComparison(productId);
      };
  
      /**
       * A computed property that returns the first 4 products from the comparison list.
       * @returns {Array<Object>} The first 4 products in the comparison list.
       */
      const limitedComparison = computed(() =>
        comparisonStore.comparison.slice(0, 4)
      );
  
      return { comparisonStore, removeFromComparison, limitedComparison };
    },
  };
  </script>
  
  