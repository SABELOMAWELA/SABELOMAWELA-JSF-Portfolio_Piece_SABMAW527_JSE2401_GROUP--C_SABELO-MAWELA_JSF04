<script setup>
import axios from 'axios';
import navbar from './components/navbar.vue';
import cards from './components/cards.vue';
import { ref, onMounted } from 'vue';

const products = ref([]);

function fetchData() {
  axios.get('https://fakestoreapi.com/products')
    .then(res => {
      products.value = res.data;
    })
    .catch(error => {
      console.error("There was an error fetching the data:", error);
    });
}

onMounted(() => fetchData());
</script>

<template>
  <div id="app">
    <navbar />
    <cards :products="products" />
  </div>
</template>
