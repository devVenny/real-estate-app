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
          Button
        </button>
      </div>
    </div>
  </div>

  <banner />

  <!-- Footer -->
  <!-- <div class="footer">
    <p>
      <span>서비스 개발자. 이형섭</span><br />
      <span>이메일. hyungsup42134@gmail.com</span><br />
      <span>Copyright 2022. devVenny. All Rights Reserved.</span>
    </p>
  </div> -->
</template>

<script>
import Banner from "./Banner.vue";
export default {
  components: { Banner },
  name: "Home",
  data() {
    return {
      locationName: "",
    };
  },
  methods: {
    getInputValue(val) {
      this.locationName = val;
    },
    moveToMap() {
      this.$router.push("/product");
    },
    sendInputValue() {
      this.emitter.emit("sendInputValue", this.locationName);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/home.scss";
</style>
