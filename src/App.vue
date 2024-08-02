<script>
import axios from 'axios';
import navbar from './components/navbar.vue';
import cards from './components/cards.vue';

export default {
  components: {
    navbar,
    cards,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          this.products = res.data;
        })
        .catch(error => {
          console.error("There was an error fetching the data:", error);
        });
    },
  },
};
</script>

<template>
  <div id="app">
    <navbar />
    <cards :products="products" />
  </div>
</template>
