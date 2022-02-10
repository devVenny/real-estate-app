<template>
  <!-- Modal-->
  <transition name="fade">
    <Modal
      :products="products"
      :modalOpen="modalOpen"
      :idx="idx"
      @modalClose="modalOpen = false"
    />
  </transition>

  <!--  Header-->
  <div class="header">
    <a href="" v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <!-- Banner -->
  <Banner />

  <!-- Sort button -->
  <div class="sort-container">
    <button class="button" @click="descendingSort">가격 낮은 순</button>
    <button class="button" @click="ascendingSort">가격 높은 순</button>
    <button class="button" @click="alphabeticalSort">이름 순</button>
    <button class="button" @click="backSort">되돌리기</button>
  </div>

  <!-- Card -->
  <Card
    @modalOpen="
      modalOpen = true;
      idx = $event;
    "
    v-for="(product, i) in products"
    :key="i"
    :product="product"
  />
</template>

<script>
import Card from "./Card.vue";
import Modal from "./Modal.vue";
import Banner from "./Banner.vue";
import products from "./assets/products";

export default {
  name: "App",
  data() {
    return {
      idx: 0,
      modalOpen: false,
      initialProducts: [...products],
      products: [...products],
      menus: ["Home", "Product", "Info", "Contact"],
    };
  },
  methods: {
    descendingSort() {
      this.products.sort((a, b) => {
        return a.price - b.price;
      });
    },
    ascendingSort() {
      this.products.sort((a, b) => {
        return b.price - a.price;
      });
    },
    alphabeticalSort() {
      this.products.sort(function (a, b) {
        // 한글 오름차순
        return a.title.charAt(0) < b.title.charAt(0)
          ? -1
          : a.title.charAt(0) < b.title.charAt(0)
          ? 1
          : 0;
      });
    },
    backSort() {
      this.products = [...this.initialProducts];
    },
  },
  components: {
    Card,
    Modal,
    Banner,
  },
};
</script>

<style>
:root {
  /* color */
  --color-dark-grass: #00a05e;
  --color-light-grass: #79ffbc;
  --color-grey: rgb(138, 138, 138);
  --color-snow: #ffffff;
  --color-smoke: #e4e4e4;
  --color-grass: #3dd28d;
  --color-light-grey: #e1e2e1;
}

/* Global */
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

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-light-grey);
  margin: 7px 0;
}

/* Header */
.header {
  background-color: var(--color-dark-grass);
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
  background-color: var(--color-light-grey);
  padding: 10px;
  margin-top: 30px;
}

.item {
  margin-top: 30px;
}

.item img {
  width: 100%;
}

/* Sort buttons */
.sort-container {
  display: Flex;
  padding: 10px;
  width: 100%;
}

/* Modal */

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
/* modal close button */
.button {
  opacity: 0.8;
  transition: opacity 300ms linear;
  border-radius: 32px;

  display: flex;
  overflow: hidden;

  margin: 10px auto;
  padding: 10px 10px;
  width: 130px;

  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  border: 0 none;

  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;

  justify-content: center;
  align-items: center;

  box-shadow: 2px 5px 10px var(--color-smoke);

  color: var(--color-snow);
  background: var(--color-grass);
}

.button:hover {
  transition: all 150ms linear;
  opacity: 0.85;
}

.button:hover {
  color: #202129;
  background-color: #e1e2e2;
  opacity: 1;
}

.modal--close-button {
  color: #2c2d36;
  background-color: #e1e2e2;
}

.modal--close-button:hover {
  background-color: #c2c2c2;

  transition: all 150ms linear;
  opacity: 0.85;
}

.modal--contract {
  width: 60%;
}
</style>
