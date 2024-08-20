import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetail from '../components/ProductDetail.vue';
import Login from '../components/Login.vue';
import ShoppingCart from '../components/shoppingcart.vue'; 
import Wishlist from '../components/Wishlist.vue';
import Comparison from '../components/comparison.vue';
import checkout from '../components/checkout.vue';
import Checkout from '../components/checkout.vue';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); 
};

const logout = () => {
  localStorage.removeItem('authToken');
  window.location.reload();
};

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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { isAuthenticated, logout }; 

export default router;
