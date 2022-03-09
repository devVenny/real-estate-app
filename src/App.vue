<template>
  <!--  Header -->
  <div class="header">
    <div class="header-nav">
      <button @click="$router.push('/')">홈</button>
      <button @click="$router.push('/product')">지도</button>
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
  created() {
    console.log("hi");
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
