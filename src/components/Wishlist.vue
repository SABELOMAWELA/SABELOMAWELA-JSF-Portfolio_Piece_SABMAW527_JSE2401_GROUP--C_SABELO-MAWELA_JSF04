<template>
  <div>
    <navbar />
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 class="text-2xl font-bold mb-4">Wishlist</h1>
      <div v-if="wishlist.length === 0" class="text-gray-500">Your wishlist is empty.</div>
      <ul v-else>
        <li v-for="item in wishlist" :key="item.id" class="mb-4">
          <div class="flex justify-between items-center">
            <img :src="item.image" :alt="item.title" class="object-contain h-16 mr-4" />
            <span>{{ item.title }}</span>
            <span class="font-bold">${{ item.price }}</span>
            <button @click="removeFromWishlist(item.id)" class="text-red-500 hover:text-red-700">
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navbar from './navbar.vue';
import { wishlistStore } from '../router/store';

export default {
  components: {
    navbar
  },
  setup() {
    const wishlist = wishlistStore.wishlist;

    const removeFromWishlist = (productId) => {
      wishlistStore.removeFromWishlist(productId);
    };

    return { wishlist, removeFromWishlist };
  }
};
</script>
