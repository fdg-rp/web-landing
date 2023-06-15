<template>
  <section class="fdg-center-block">
    <ContentSlot :use="$slots.default" />
  </section>
</template>

<style scoped lang="ts">
css({
  '.fdg-center-block': {
    textAlign: 'center',
    paddingBottom: '128px'
  },
})
</style>
