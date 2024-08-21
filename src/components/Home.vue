<template>
  <div id="app">
    <navbar />
    <FilterSortComponent 
      :categories="categories" 
      @filter="handleFilter" 
      @search="handleSearch" 
      @sort="handleSort" 
    />
    <div v-if="loading">Loading...</div>
    <cards v-else :products="filteredProducts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import navbar from '../components/navbar.vue';
import cards from '../components/cards.vue';
import FilterSortComponent from '../components/FilterSortComponent.vue';

/**
 * A reactive reference to store the list of products.
 * @type {import('vue').Ref<Array<Object>>}
 */
const products = ref([]);

/**
 * A reactive reference to store the filtered list of products.
 * @type {import('vue').Ref<Array<Object>>}
 */
const filteredProducts = ref([]);

/**
 * A reactive reference to store the list of categories.
 * @type {import('vue').Ref<Array<string>>}
 */
const categories = ref([]);

/**
 * A reactive reference to store the current search term.
 * @type {import('vue').Ref<string>}
 */
const searchTerm = ref('');

/**
 * A reactive reference to store the currently selected category.
 * @type {import('vue').Ref<string>}
 */
const selectedCategory = ref('');

/**
 * A reactive reference to store the selected sorting option.
 * @type {import('vue').Ref<string>}
 */
const sorting = ref('');

/**
 * A reactive reference to indicate whether data is being loaded.
 * @type {import('vue').Ref<boolean>}
 */
const loading = ref(true);

/**
 * Fetches product data from the API and sets the products, categories, and loading state.
 * @returns {Promise<void>}
 */
function fetchData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(res => {
      products.value = res.data;
      filteredProducts.value = res.data;
      categories.value = [...new Set(res.data.map(product => product.category))];
      loading.value = false; 
    })
    .catch(error => {
      console.error("There was an error fetching the data:", error);
      loading.value = false;
    });
}

/**
 * Filters and sorts the products based on the current search term, category, and sorting option.
 */
function filterProducts() {
  let tempProducts = [...products.value];

  if (selectedCategory.value) {
    tempProducts = tempProducts.filter(product => product.category === selectedCategory.value);
  }

  if (searchTerm.value) {
    tempProducts = tempProducts.filter(product => product.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
  }

  if (sorting.value) {
    if (sorting.value === 'Price: low to high') {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sorting.value === 'Price: high to low') {
      tempProducts.sort((a, b) => b.price - a.price);
    }
  }

  filteredProducts.value = tempProducts;
}

/**
 * Handles the filter event from the FilterSortComponent.
 * @param {string} category - The category to filter products by.
 */
function handleFilter(category) {
  selectedCategory.value = category;
  filterProducts();
}

/**
 * Handles the search event from the FilterSortComponent.
 * @param {string} term - The search term to filter products by.
 */
function handleSearch(term) {
  searchTerm.value = term;
  filterProducts();
}

/**
 * Handles the sort event from the FilterSortComponent.
 * @param {string} order - The sorting option to sort products by.
 */
function handleSort(order) {
  sorting.value = order;
  filterProducts();
}

/**
 * Lifecycle hook that fetches data when the component is mounted.
 */
onMounted(() => fetchData());
</script>
