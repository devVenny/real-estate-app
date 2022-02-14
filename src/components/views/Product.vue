<template>
  <!-- Zoom button -->
  <button @click="zoom(-1)" class="btn btn-outline-success">
    <span class="material-icons"> zoom_in </span>
  </button>
  <button @click="zoom(1)" class="btn btn-outline-success">
    <span class="material-icons"> zoom_out </span>
  </button>
  .
  <div class="map-area">
    <!-- Harbor List -->
    <div class="harbors">
      <div
        class="harbor"
        @click="showOnMap(harbor)"
        v-for="(harbor, i) in harbors"
        :key="i"
      >
        {{ harbor.place }}
      </div>
    </div>

    <!-- Map -->
    <KakaoMap :options="mapOption" />
  </div>
</template>

<script>
import KakaoMap from "../map/KakaoMap.vue";
import api from "../../service/api";

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
      harbors: [],
    };
  },
  methods: {
    zoom(measure) {
      const zoom = Math.max(3, this.mapOption.level + measure);
      this.mapOption.level = zoom;
    },
    showOnMap(harbor) {
      this.mapOption.center = {
        lat: harbor.lat,
        lng: harbor.lng,
      };
    },
  },
  mounted() {
    console.log(
      api.harbor.all((res) => {
        this.harbors = res.harbors;
      })
    );
  },
  components: {
    KakaoMap,
  },
};
</script>

<style>
:root {
  /* color */
  --color-dark-grass: #00a05e;
  --color-light-grass: #79ffbc;
  --color-grey: rgb(138, 138, 138);
  --color-snow: #ffffff;
  --color-smoke: #e4e4e4;
  --color-grass: #3dd28d;
  --color-light-grey: #e1e2e1;
}

.map-area {
  display: flex;
}
#map {
  height: 60vh;
  width: 60%;
  margin: 0 auto;
  flex: 1 1 auto;
}

.harbors {
  padding: 10px;
}

.harbors .harbor {
  border: 1px solid transparent;
  margin: 10px 0;
  cursor: pointer;
  padding: 4px;
}

.harbors .harbor:hover,
.harbors .harbor:active {
  background-color: var(--color-light-grass);
  border: 1px solid var(--color-dark-grass);
}
</style>
