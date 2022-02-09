<template>
  <!-- Modal -->
  <div class="madal" v-if="modalOpen">
    <div class="black-bg">
      <div class="white-bg">
        <img src="" alt="" />
        <h3>제목</h3>
        <h4>텍스트</h4>
      </div>
    </div>
  </div>

  <!--  HEADER-->
  <div class="header">
    <a href="" v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <!-- BANNER -->
  <div class="banner">
    <h3>지금 결제하면 30% 할인!</h3>
  </div>

  <!-- Card -->
  <div class="card">
    <div class="item" v-for="(product, i) in products" :key="i">
      <img :src="product.image" alt="" />
      <h3 @click="modalOpen = true">
        {{ product.title }}
      </h3>
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
      modalOpen: false,
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

.banner {
  background-color: lightpink;
  padding: 10px;
  margin-top: 30px;
}

.item {
  margin-top: 30px;
}

.item img {
  width: 100%;
}

.black-bg {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  padding: 100px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
