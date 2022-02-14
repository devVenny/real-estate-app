<template>
  <!-- Zoom button -->
  <button @click="zoom(-1)" class="btn btn-outline-success">
    <span class="material-icons"> zoom_in </span>
  </button>
  <button @click="zoom(1)" class="btn btn-outline-success">
    <span class="material-icons"> zoom_out </span>
  </button>

  <!-- Map -->
  <KakaoMap :options="mapOption" />
</template>

<script>
import KakaoMap from "../map/KakaoMap.vue";

export default {
  name: "Product",
  data() {
    return {
      mapOption: {
        center: {
          lat: 33.450701,
          lng: 126.570667,
        },
        level: 8,
      },
    };
  },
  methods: {
    zoom(measure) {
      const zoom = Math.max(3, this.mapOption.level + measure);
      this.mapOption.level = zoom;
    },
  },
  components: {
    KakaoMap,
  },
};
</script>

<style></style>
