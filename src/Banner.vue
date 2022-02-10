<template>
  <div class="banner" v-if="popUp === true">
    <h3>지금 결제하면 {{ discountPer }}% 할인!</h3>
    <span>고민하실 수록 혜택이 줄어들어요🥲 서두르세요!</span>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      discountPer: 30,
      popUp: true,
    };
  },
  mounted() {
    const intervalID = setInterval(() => {
      this.discountPer--;
      if (this.discountPer === 0) {
        this.popUp = false;
        clearInterval(intervalID);
      }
    }, 1000);
  },
};
</script>

<style></style>
