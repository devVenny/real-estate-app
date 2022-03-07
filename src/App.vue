<template>
  <!--  Header -->
  <div class="header">
    <div class="header-nav">
      <button @click="$router.push('/')">Home</button>
      <button @click="$router.push('/product')">Product</button>
    </div>
  </div>

  <!-- Map -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      datas: [],
    };
  },
  computed: {
    myProps() {
      if (this.$route.name === "/") {
        return { datas: this.datas };
      }
      return { datas: this.datas };
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
