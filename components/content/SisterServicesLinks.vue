<template>
  <!-- <div class="wrapper">
    <h4>Looking for our apps?</h4>
    <div class="links-wrapper">
      <a href="/v1/getting-started/introduction" :transparent="true" color="false" size="large">
        Support Portal
      </a>
      <a href="/v1/getting-started/introduction" :transparent="true" color="false" size="large">
        COPS
      </a>
      <a href="/fr/v1/getting-started/introduction" :transparent="true" color="false" class="ml-2" size="large">
        Register of Law
      </a>
      <a href="/ja/v1/getting-started/introduction" :transparent="true" color="false" class="ml-2" size="large">
        Jobs Manager
      </a>
    </div>
  </div> -->
  <section class="sister-links">
    <ContentSlot :use="$slots.default" />
  </section>
</template>

<style scoped lang="ts">
css({
  '.sister-links': {
    textAlign: 'center',
    paddingBottom: '128px'
  },
})
</style>
