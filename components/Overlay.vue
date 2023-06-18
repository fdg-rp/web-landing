<script setup>
const { data } = await useAsyncData("home", () => queryContent("/").findOne());
const show = ref(true);
</script>

<template>
  <div v-if="show" class="overlay">
    <div class="overlay-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
}

.overlay-content {
}
</style>
