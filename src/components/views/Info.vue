<template>
  <div class="info">
    <div class="info-column">
      <h5 class="column_top">뉴스<button>더보기</button></h5>
      <div class="column_board">
        <div class="post">게시글1입니다</div>
        <div class="post">게시글2입니다 안녕하세요</div>
        <div class="post">게시글3입니다 3월8일이에요!</div>
      </div>
    </div>

    <div class="info-column">
      <h5 class="column_top">공지<button>더보기</button></h5>
      <div class="column_board">
        <div class="post">게시글1입니다 헬로헬로</div>
        <div class="post">게시글2입니다 좋은 아침</div>
        <div class="post">게시글3일까요?</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style lang="scss">
@import "../../assets/scss/home.scss";
</style>
