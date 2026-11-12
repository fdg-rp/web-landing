<!-- The home page hero: ::block-hero with the big Play now button. -->
<script setup lang="ts">
withDefaults(
  defineProps<{ cta?: string[]; secondary?: string[]; playNowUrl?: string }>(),
  { cta: () => [], secondary: () => [], playNowUrl: "https://rp.fatduckgaming.com" },
);
</script>

<template>
  <BlockHero :cta="cta" :secondary="secondary" :play-now-url="playNowUrl">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </BlockHero>
</template>
