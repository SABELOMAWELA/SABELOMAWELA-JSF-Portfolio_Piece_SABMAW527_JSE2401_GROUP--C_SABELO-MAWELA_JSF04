<script>
import axios from 'axios';
import navbar from './components/navbar.vue'
import cards from './components/cards.vue';
export default {
  components: {
  navbar,
  cards
  },
  mounted() {
    this.fetchData();
  },
  
  methods: {
    fetchData() {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.error("There was an error fetching the data:", error);
        });
    }
  }
};



</script>
<template>
  <div id="app">
    <navbar />
    <cards />
    <!-- Other content of your app -->
  </div>
</template>
