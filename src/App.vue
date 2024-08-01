<script>
import axios from 'axios';

export default {
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
