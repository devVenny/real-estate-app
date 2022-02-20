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
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      datas: [],
    };
  },
  created() {
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = () => {
    //   const month = date.getMonth();
    //   return month < 10 ? `0${month}` : `${month}`;
    // };
    // const DEAL_YMD = year + month();
    // axios
    //   .get(
    //     `https://cors-anywhere.herokuapp.com/http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade?LAWD_CD=11110&DEAL_YMD=${DEAL_YMD}&serviceKey=gxzTp8PNaUIrpjNqKQhhCm956QVOTtPuMi1VFDpX9B1uBfU9Dl1yLPUpYM7m33l%2BkYKw4%2F%2FBAA2yiTV6ZKub9g%3D%3D`
    //   )
    //   .then((res) => {
    //     this.datas = res.data.response;
    //   })
    //   .catch((err) => console.log(err));
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
  text-align: center;
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

.button {
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

/* Header */
.header {
  background-color: var(--color-dark-grass);
  width: 100%;
  padding: 20px;
  display: flex;
}

.header .header-nav {
  display: flex;
  gap: 10px;
}

.header .header-nav button {
  all: unset;
  color: white;
  text-decoration: none;
  padding: 10px 5px;
  margin-right: 20px;
  border-radius: 2px;
  font-weight: 600;
  cursor: pointer;
}

/* Banner */
.banner {
  background-color: var(--color-light-grey);
  padding: 10px;
  margin-top: 30px;
}

/* Modal */

.black-bg {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  padding: 100px;
  display: flex;
  justify-content: center;
}

.white-bg {
  min-width: 500px;
  max-width: 700px;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

/* Sort buttons */
.sort-container {
  display: Flex;
  padding: 10px;
  width: 100%;
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
