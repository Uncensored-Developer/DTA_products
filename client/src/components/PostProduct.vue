<template>
  <div class="hello">
    <div class="row">
      <h3 style="text-align: center;">ADD PRODUCT</h3>
      <form action="" class="col push-m3 m6" style="margin: auto;">
        <div class="row">
          <div class="input-field col m12">
            <input type="text" v-model="name" id="name" required>
            <label for="name" class="active">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12">
            <input type="text" v-model="price" id="price" required>
            <label for="price" class="active">Price</label>
          </div>
        </div>
        <div class="row">
          <label>Category</label>
          <select v-model="category" name="category" class="browser-default" required>
            <option value="" disabled selected>Choose your option</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="smartphone">Smartphone</option>
          </select>
        </div>
        <div class="row">
          <div class="input-field col m12">
            <input type="text" id="color" v-model="color" required>
            <label for="color" class="active">Color</label>
          </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" v-model="description" required></textarea>
          <label for="textarea1" class="active">Description</label>
        </div>
      </div>
        <div class="row">
          <div class="input-field col m12">
            <input type="file" name="image" @change="handleUpload($event)" accept="image/*" id="image">
          </div>
        </div>
        <div class="row">
          <button type="button" @click="addProduct" class="btn waves-effect waves-light">POST</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/ProductsService';

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      price: '',
      category: '',
      description: '',
      color: '',
      image: ''
    }
  },
  methods: {
    async addProduct() {
      let data = new FormData();
      data.append('name', this.name);
      data.append('price', this.price);
      data.append('category', this.category);
      data.append('description', this.description);
      data.append('color', this.color);
      data.append('image', this.image);

      let form_data = {
        name: this.name,
        price: this.price,
        category: this.category,
        color: this.color,
        description: this.description,
        image: this.image
      }

      let res = await ProductService.addProduct(data);
      this.$router.push({ name: 'ProductDetail', params: { id: res.data.product._id }})
    },
    handleUpload(event) {
      this.image = event.target.files[0]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
