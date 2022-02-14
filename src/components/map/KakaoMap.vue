<template>
  <div id="map" ref="map"></div>
</template>

<script>
export default {
  name: "KakaoMap",
  props: {
    options: Object,
  },
  mounted() {
    const kakao = window.kakao;

    var container = this.$refs.map;

    const { center, level } = this.options;
    const mapInstance = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level: level,
    });
    console.log(mapInstance);
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
