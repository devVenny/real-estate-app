<template>
  <!-- Home  main -->
  <div class="home">
    <div class="bg-img"></div>

    <div class="input-wrapper">
      <div class="blur-wrapper">
        <h1 class="font-effect-shadow-multiple">원하는 동네로 검색해보세요.</h1>
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="지역명(동)을 입력하세요"
          aria-label="location"
          aria-describedby="button-addon2"
          @input="getInputValue($event.target.value)"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="
            moveToMap();
            sendInputValue();
          "
        >
          검색
        </button>
      </div>
    </div>
  </div>

  <banner />
  <info />

  <!-- Footer -->
  <footer class="footer">
    <div>
      <span>서비스 개발자. 이형섭</span><br />
      <span>이메일. hyungsup42134@gmail.com</span><br />
      <span>Copyright 2022. devVenny. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script>
import Banner from "./Banner.vue";
import Info from "./Info.vue";
import axios from "axios";

export default {
  components: { Banner, Info },
  name: "Home",
  data() {
    return {
      locationName: "",
      locationCode: null,
    };
  },
  methods: {
    getInputValue(val) {
      this.locationName = val;
    },
    moveToMap() {
      // this.$router.push("/product");
    },
    sendInputValue() {
      // console.log(this.locationName);
      // this.emitter.emit("sendInputValue", this.locationName);
    },
  },
  created() {
    const config = {
      API_KEY:
        "	gxzTp8PNaUIrpjNqKQhhCm956QVOTtPuMi1VFDpX9B1uBfU9Dl1yLPUpYM7m33l%2BkYKw4%2F%2FBAA2yiTV6ZKub9g%3D%3D",
      baseUrl: "http://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList",
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${config.baseUrl}?ServiceKey=${config.API_KEY}&type=xml&pageNo=1&numOfRows=3&flag=Y&locatadd_nm=서울특별시`
      )
      .then((res) => console.log(res));
  },
  // watch: {
  //   locationName: function (val) {
  //     console.log("change location name", val);
  //   },
  // },
};
</script>

<style lang="scss">
@import "../../assets/scss/home.scss";
</style>
