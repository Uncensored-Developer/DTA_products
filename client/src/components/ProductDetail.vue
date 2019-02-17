<template>
  <div class="hello">
    <div class="row">
      <div class="col m6">
          <img class="img-resp" v-bind:src="src" alt="">
      </div>
      <div class="col m6">
          <h3>{{ product.name }}</h3>
          <h5>{{ product.category }}</h5>
          <hr>
          <p>
              {{ product.description }}
          </p>
          <h5>COLOR: {{ product.color }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/ProductsService';

export default {
  name: 'ProductDetail',
  data () {
    return {
      product: null,
      src: null
    }
  },
  mounted() {
      this.getProduct();
  },
  methods: {
      async getProduct () {
          const response = await ProductService.getProduct(this.$route.params.id);
          this.product = response.data.product;
          this.src = 'http://localhost:8081/images/' + this.product.image; 
          console.log(this.product)
      }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-resp {
    width: 100%;
    height: 100%;
}
.hello {
    min-height: 70vh;
}
</style>
