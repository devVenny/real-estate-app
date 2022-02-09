<template>
  <div class="item">
    <img :src="product.image" alt="" />
    <h3 @click="$emit('modalOpen')">
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

<style></style>
