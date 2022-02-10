<template>
  <div class="item">
    <img :src="product.image" alt="" />
    <h3 class="product-title" @click="$emit('modalOpen', product.id)">
      {{ product.title }}
    </h3>
    <h4>{{ product.price.toLocaleString() }}원</h4>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
  },
};
</script>

<style>
.product-title {
  cursor: pointer;
  margin: 0;
  padding: 20px;
}

.product-title:hover {
  background-color: var(--color-light-grey);
}

.item {
  margin-top: 30px;
}

.item img {
  width: 100%;
}
</style>
