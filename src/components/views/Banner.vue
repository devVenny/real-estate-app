<template>
  <div class="banner">
    <div class="description">
      <h3>간편한 부동산 계약, 죽방</h3>
      <h6>지금 가입하면 10가지 혜택이? 서두르세요!</h6>
    </div>
    <button class="banner-button">혜택 받으러 가기</button>
  </div>
  <!-- <div class="banner" v-if="popUp === true">
    <h3>지금 결제하면 {{ discountPer }}% 할인!</h3>
    <span>앗 혜택이 줄어들어요🥲 서두르세요!</span>
  </div> -->
</template>

<script>
export default {
  name: "Banner",
  // data() {
  //   return {
  //     discountPer: 30,
  //     popUp: true,
  //   };
  // },
  // mounted() {
  //   const intervalID = setInterval(() => {
  //     this.discountPer--;
  //     if (this.discountPer === 0) {
  //       this.popUp = false;
  //       clearInterval(intervalID);
  //     }
  //   }, 2000);
  // },
};
</script>

<style lang="scss">
@import "../../assets/scss/home.scss";
</style>
