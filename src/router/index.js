import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetail from '../components/ProductDetail.vue';
import Login from '../components/Login.vue';
import ShoppingCart from '../components/shoppingcart.vue'; 
import Wishlist from '../components/Wishlist.vue';
import Comparison from '../components/comparison.vue';

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
    path: '/cart', 
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/wishlist', 
    name: 'Wishlist',
    component: Wishlist,
  },
  {
    path: '/comparison', 
    name: 'Comparison',
    component: Comparison,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
