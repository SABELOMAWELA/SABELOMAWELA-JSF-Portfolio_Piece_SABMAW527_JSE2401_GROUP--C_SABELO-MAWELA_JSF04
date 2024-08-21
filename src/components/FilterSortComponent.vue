<template>
  <div class="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center">
    <form @submit.prevent>
      <div class="flex lg:w-[31.25rem] sm:w-[95%] md:w-full relative">
        <button 
          id="dropdown-button" 
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200" 
          type="button"
          @click="toggleDropdown"
        >
          <span>{{ filterItem }}</span>
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div v-if="dropdownOpen" id="dropdown" class="z-10 absolute top-[100%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
            <li class="inline-flex w-full px-4 py-2 hover:bg-gray-100" @click="handleFilter('')">
              All Categories
            </li>
            <li v-for="category in categories" :key="category" class="inline-flex w-full px-4 py-2 hover:bg-gray-100" @click="handleFilter(category)">
              {{ category }}
            </li>
          </ul>
        </div>
        <div class="relative w-full">
          <input 
            type="search" 
            id="search-dropdown" 
            v-model="searchTerm" 
            class="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search products..."
            @input="handleSearch"
          />
          <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form> 
    <div class="flex sm:w-[95%] max-w-[21rem] md:w-full">
      <label for="sort" class="w-20 my-auto font-semibold text-black">Sort by:</label>
      <select 
        id="sort" 
        v-model="sorting" 
        @change="handleSort" 
        class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Default</option>
        <option value="Price: low to high">Price: low to high</option>
        <option value="Price: high to low">Price: high to low</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSortComponent',
  props: {
    /**
     * An array of category names to display in the dropdown filter.
     * @type {Array<string>}
     * @required
     */
    categories: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      /**
       * The currently selected filter item.
       * @type {string}
       */
      filterItem: 'Select Category',
      
      /**
       * Boolean flag to control the visibility of the dropdown menu.
       * @type {boolean}
       */
      dropdownOpen: false,
      
      /**
       * The current search term entered by the user.
       * @type {string}
       */
      searchTerm: '',
      
      /**
       * The current sorting option selected by the user.
       * @type {string}
       */
      sorting: ''
    };
  },
  methods: {
    /**
     * Toggles the visibility of the dropdown menu.
     */
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    
    /**
     * Handles filtering by setting the selected category and emitting a filter event.
     * @param {string} category - The category to filter by.
     */
    handleFilter(category) {
      this.filterItem = category || 'All Categories';
      this.dropdownOpen = false;
      this.$emit('filter', category);
    },
    
    /**
     * Emits the current search term to the parent component.
     */
    handleSearch() {
      this.$emit('search', this.searchTerm);
    },
    
    /**
     * Emits the selected sorting option to the parent component.
     */
    handleSort() {
      this.$emit('sort', this.sorting);
    }
  }
};
</script>