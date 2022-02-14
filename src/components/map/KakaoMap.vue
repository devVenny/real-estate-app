<template>
  <div id="map" ref="map"></div>
</template>

<script>
const kakao = window.kakao;

export default {
  name: "KakaoMap",
  data() {
    return {
      mapInstance: null,
    };
  },
  props: {
    options: Object,
  },
  mounted() {
    const kakao = kakao || window.kakao;

    var container = this.$refs.map;

    const { center, level } = this.options;
    this.mapInstance = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level: level,
    });
  },
  watch: {
    "options.level"(cur) {
      this.mapInstance.setLevel(cur);
    },
    "options.center"(cur) {
      this.mapInstance.setCenter(new kakao.maps.LatLng(cur.lat, cur.lng));
    },
  },
};
</script>

<style></style>
