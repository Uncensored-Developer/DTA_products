import Vue from 'vue';
import Router from 'vue-router';
import PostProduct from '@/components/PostProduct';
import ProductDetail from '@/components/ProductDetail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostProduct',
      component: PostProduct
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
