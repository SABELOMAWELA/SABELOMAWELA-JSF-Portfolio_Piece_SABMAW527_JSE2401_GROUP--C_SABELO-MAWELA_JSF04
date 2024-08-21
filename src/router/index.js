import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetail from '../components/ProductDetail.vue';
import Login from '../components/Login.vue';
import ShoppingCart from '../components/shoppingcart.vue'; 
import Wishlist from '../components/Wishlist.vue';
import Comparison from '../components/comparison.vue';
import Checkout from '../components/checkout.vue';

/**
 * Checks if the user is authenticated by verifying the presence of an auth token in local storage.
 * @returns {boolean} True if the user is authenticated, false otherwise.
 */
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

/**
 * Logs out the user by removing the auth token from local storage and reloading the page.
 */
const logout = () => {
  localStorage.removeItem('authToken');
  window.location.reload();
};

/**
 * The list of route definitions for the application.
 * @type {Array<Object>}
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/comparison',
    name: 'Comparison',
    component: Comparison,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/login');
      } else {
        next();
      }
    }
  },
];

/**
 * Creates a Vue Router instance with history mode and the defined routes.
 * @type {Router}
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { isAuthenticated, logout };
export default router;