<template>
  <div class="card">
    <ContentSlot unwrap="p" :use="$slots.default"> </ContentSlot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="ts">
css({
  '.card': {
    display: 'block',
    position: 'relative',
    width: '100%',
    padding: '{space.8}',
    borderRadius: '{radii.xl}',
    border: '1px solid {elements.border.primary.static}',
    background: '{elements.backdrop.background}',
    backdropFilter: '{elements.backdrop.filter}',
    whiteSpace: 'pre-wrap'
  }
})
</style>
