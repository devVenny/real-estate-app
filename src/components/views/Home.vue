<template>
  <div class="home">
    <div class="home-container">
      <div class="blur-wrapper">
        <h1 class="font-effect-shadow-multiple">원하는 동네로 검색해보세요</h1>
      </div>
      <div class="input-wrapper">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="지역명(동)으로 검색"
            aria-label="location"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home-container {
  padding: 30px;
  width: 100%;
  height: 400px;
  display: Flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../../images/home-image.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.input-group {
  margin-top: 15px;
}

/* .blur-wrapper {
  background-color: #ffffff;
  width: 100%;
  filter: blur(10px);
  z-index: -10;
} */

.blur-wrapper h1 {
  backdrop-filter: blur(2px);
  padding: 25px;
  color: black;
}

.btn-outline-secondary {
  background-color: var(--color-dark-grass);
  color: white;
}

.input-group {
  backdrop-filter: blur(2px);
  padding: 25px;
}
</style>
