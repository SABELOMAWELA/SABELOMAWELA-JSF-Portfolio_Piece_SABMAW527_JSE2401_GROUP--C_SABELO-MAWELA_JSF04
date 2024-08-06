
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
  
  const products = ref([]);
  const filteredProducts = ref([]);
  const categories = ref([]);
  const searchTerm = ref('');
  const selectedCategory = ref('');
  const sorting = ref('');
  const loading = ref(true);
  
  function fetchData() {
    axios.get('https://fakestoreapi.com/products')
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
  
  onMounted(() => fetchData());
  
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
  
  function handleFilter(category) {
    selectedCategory.value = category;
    filterProducts();
  }
  
  function handleSearch(term) {
    searchTerm.value = term;
    filterProducts();
  }
  
  function handleSort(order) {
    sorting.value = order;
    filterProducts();
  }
  </script>
  