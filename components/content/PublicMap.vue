<template>
  <div class="map_wrapper">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="generateLatLong(0, 0)"
      style="background-color: #12a7d2"
      :csr="crs"
      :maxBounds="bounds"
      :bounds="bounds"
      :minZoom="0"
      :maxZoom="7"
      :crs="'Simple'"
    >
      <LTileLayer
        url="https://app.fatduckgaming.com/assets/maps/Atlas/{z}_{x}_{y}.jpg"
        layer-type="base"
        name="FDG Atlas"
        :options="{ maxBounds: bounds, bounds: bounds }"
      />
      \
      <!-- <LMarker :lat-lng="generateLatLong(0, 0)"></LMarker> -->
      <LMarker v-for="poi in poiList" :lat-lng="generateLatLong(poi.X, poi.Y)">
        <LIcon
          :icon-url="`/img/sprites/tile${String(poi.sprite).padStart(
            3,
            '0'
          )}.png`"
          :icon-size="[32, 32]"
        />
      </LMarker>
    </LMap>
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import poiList from "@/plugins/map_pois.json";

const zoom = ref(3);

function convertX(x: number) {
  if (x < 0) {
    return 121.51 - Math.abs(x) / 79.56;
  } else {
    return 121.51 + Math.abs(x) / 79.56;
  }
}

function convertY(y: number) {
  if (y < 0) {
    return (155.33 + Math.abs(y) / 79.56) * -1;
  } else {
    return (155.33 - Math.abs(y) / 79.56) * -1;
  }
}
function generateLatLong(x: number, y: number) {
  return [convertY(y), convertX(x)];
}

const crs = ref<any>(null);

const bounds = [
  [0, 255],
  [-255, 0],
];
</script>

<style scoped>
body {
  margin: 0;
}
.map_wrapper {
  height: calc(100vh - 64px);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #12a7d2 !important;
}
</style>
