<template>
  <div class="modal" v-if="modalOpen">
    <div class="black-bg">
      <div class="white-bg">
        <h2>{{ products[idx].title }}</h2>
        <div class="divider"></div>
        <h3>월세 {{ products[idx].price.toLocaleString() }}원</h3>
        <span class="modal-content">{{ products[idx].content }}</span>
        <div class="divider"></div>
        <h4>평점⭐️ : {{ products[idx].rate }} / 5</h4>
        <input
          class="modal-input"
          placeholder="얼마나 지내실 건가요?"
          v-model.number="month"
        />
        <label for="modal-input"> *최대 계약기간은 24개월 입니다. </label>
        <h4>
          {{ month }}개월 :
          {{ (products[idx].price * month).toLocaleString() }}원
        </h4>
        <div class="button-container">
          <button class="modal--contract button">계약 요청하기</button>
          <button
            class="modal--close-button button"
            @click="$emit('modalClose')"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: "",
    };
  },
  props: {
    products: Array,
    modalOpen: Boolean,
    idx: Number,
  },
  watch: {
    month() {
      if (isNaN(this.month)) {
        alert("숫자를 입력해주세요");
        this.month = 1;
      }
      if (this.month >= 25) {
        alert("24개월 이상은 계약할 수 없습니다.");
        this.month = 1;
      }
    },
  },
};
</script>

<style>
label {
  font-size: 10px;
  display: block;
  margin-bottom: 10px;
}

.modal-input {
  border: 1px solid #ccc;
  margin: 0 0 10px;
  max-width: 30%;
  padding: 10px;
}

.modal-content {
  color: var(--color-grey);
}

.button-container {
  display: flex;
}

.modal--contract {
  padding: 100px;
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

/* Modal transition effect */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
