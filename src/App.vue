<template>
  <!--  HEADER-->

  <div class="header">
    <a href="" v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <!-- Card -->
  <div class="card">
    <div class="item" v-for="(product, i) in products" :key="i">
      <img :src="product.image" alt="" />
      <h3>{{ product.title }}</h3>
      <h4>{{ product.price.toLocaleString() }}원</h4>
    </div>
  </div>
</template>

<script>
import products from "./assets/products";

export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Product", "Info", "Contact"],
      products: products,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background-color: darkslateblue;
  width: 100%;
  padding: 20px;
}

.header a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 10px 5px;
  margin-right: 20px;
  border-radius: 2px;
  font-weight: 600;
}

.item {
  margin-top: 30px;
}

.item img {
  width: 100%;
}
</style>
