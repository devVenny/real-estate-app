<template>
  <h1>Home 화면 입니다.</h1>
  <!-- Modal-->
  <!-- <transition name="fade">
    <Modal
      :products="products"
      :modalOpen="modalOpen"
      :idx="idx"
      @modalClose="modalOpen = false"
    />
  </transition> -->

  <!-- Banner -->
  <!-- <Banner /> -->

  <!-- Sort button -->
  <!-- <div class="sort-container">
    <button class="button" @click="descendingSort">가격 낮은 순</button>
    <button class="button" @click="ascendingSort">가격 높은 순</button>
    <button class="button" @click="alphabeticalSort">이름 순</button>
    <button class="button" @click="backSort">되돌리기</button>
  </div> -->

  <!-- Card -->
  <!-- <Card
    @modalOpen="
      modalOpen = true;
      idx = $event;
    "
    v-for="(product, i) in products"
    :key="i"
    :product="product"
  /> -->
</template>

<script>
// import Card from "./Card.vue";
// import Modal from "./Modal.vue";
// import Banner from "./Banner.vue";
// import products from "../../assets/products";

export default {
  name: "Home",
  data() {
    return {
      // idx: 0,
      // modalOpen: true,
      // initialProducts: [...products],
      // products: [...products],
      // menus: ["Home", "Product", "Info", "Contact"],
    };
  },
  // methods: {
  //   descendingSort() {
  //     this.products.sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //   },
  //   ascendingSort() {
  //     this.products.sort((a, b) => {
  //       return b.price - a.price;
  //     });
  //   },
  //   alphabeticalSort() {
  //     this.products.sort(function (a, b) {
  //       return a.title.charAt(0) < b.title.charAt(0)
  //         ? -1
  //         : a.title.charAt(0) < b.title.charAt(0)
  //         ? 1
  //         : 0;
  //     });
  //   },
  //   backSort() {
  //     this.products = [...this.initialProducts];
  //   },
  // },
  // components: {
  //   Card,
  //   Modal,
  //   Banner,
  // },
};
</script>

<style></style>
