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
export default {
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

<style>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 465px;
}

.bg-img {
  width: 100%;
  flex-grow: 1;
  height: 100%;
  background-image: linear-gradient(
    134deg,
    #63c025 -5%,
    #218850 56%,
    #218850 56%
  );
  position: absolute;
  top: 0;
}

.input-wrapper {
  margin-top: 160px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  margin-top: 15px;
}

.blur-wrapper h1 {
  backdrop-filter: blur(2px);
  font-weight: 200;
  color: white;
  margin-bottom: 35px;
}

.btn-outline-secondary {
  background-color: #005a27;
  border: none;
  color: white;
}

.input-group {
  display: flex;
  backdrop-filter: blur(2px);
  width: 100%;
  height: 72px;
  padding: 0 40px;
}

.form-control {
  padding-left: 30px;
}

/* Footer */
.footer {
  background-color: var(--color-dark-grass);
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px;
  color: white;
}
</style>
