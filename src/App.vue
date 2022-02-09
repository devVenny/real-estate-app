<template>
  <!--  HEADER-->

  <div class="header">
    <a href="" v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { menus: ["Home", "Product", "Info", "Contact"] };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
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
</style>
