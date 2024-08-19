<template>
    <navbar />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-6">
      <div class="flex flex-col">
        <div class="bg-blue-500 text-white text-xs font-semibold uppercase py-3 px-6">
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
              {{ product.category }}
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
      navbar,
    },
    setup() {
      const removeFromComparison = (productId) => {
        comparisonStore.removeFromComparison(productId);
      };
  
     
      const limitedComparison = computed(() =>
        comparisonStore.comparison.slice(0, 4)
      );
  
      return { comparisonStore, removeFromComparison, limitedComparison };
    },
  };
  </script>
  