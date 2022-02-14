<template>
  <div id="map" ref="map"></div>
</template>

<script>
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
    const kakao = window.kakao;

    var container = this.$refs.map;

    const { center, level } = this.options;
    this.mapInstance = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level: level,
    });
  },
  watch: {
    "options.level"(cur, prev) {
      this.mapInstance.setLevel(cur);
      console.log(`[data changed] : ${prev} => ${cur}`); // test
    },
  },
};
</script>

<style>
#map {
  height: 60vh;
  width: 60%;
  margin: 0 auto;
}
</style>
