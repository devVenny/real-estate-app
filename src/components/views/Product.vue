<template>
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
  components: {
    KakaoMap,
  },
};
</script>

<style></style>
