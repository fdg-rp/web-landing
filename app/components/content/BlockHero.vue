<!--
  ::block-hero from Docus 1 (also the base of ::block-hero-with-play-now):
  title, description and #extra on the left two thirds, #support on the
  right, then the call-to-action links. `cta` and `secondary` are
  [label, url] pairs from the front matter.
-->
<script setup lang="ts">
withDefaults(
  defineProps<{ cta?: string[]; secondary?: string[]; playNowUrl?: string }>(),
  { cta: () => [], secondary: () => [], playNowUrl: "" },
);
</script>

<template>
  <section class="py-20 sm:py-24 lg:py-32">
    <div class="grid gap-16 lg:grid-cols-3 lg:gap-8">
      <div class="lg:col-span-2">
        <h1 class="mb-8 px-8 text-center text-4xl font-bold tracking-tight text-highlighted sm:text-5xl lg:px-0 lg:text-start lg:text-6xl">
          <slot name="title" mdc-unwrap="p" />
        </h1>
        <p class="mb-12 px-2 text-center text-lg text-muted lg:text-start">
          <slot name="description" mdc-unwrap="p" />
        </p>
        <div v-if="$slots.extra" class="mb-16 flex justify-center lg:justify-start">
          <slot name="extra" mdc-unwrap="p" />
        </div>
        <div class="flex flex-col items-center gap-6 lg:items-start">
          <a
            v-if="playNowUrl"
            :href="playNowUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="play-now inline-flex items-center justify-center gap-3 rounded-lg border-[3px] border-primary-400 bg-primary-500 px-12 py-5 text-2xl font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-600 sm:px-16 sm:py-6 sm:text-3xl"
          >
            <span class="text-xl sm:text-2xl">▶</span>
            <span>Play now</span>
          </a>
          <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <UButton v-if="cta[0]" :to="cta[1]" size="xl" class="font-bold">{{ cta[0] }}</UButton>
            <a v-if="secondary[0]" :href="secondary[1]" class="font-medium text-muted hover:text-default">{{ secondary[0] }}</a>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <slot name="support" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.play-now { box-shadow: 0 10px 30px -5px rgb(0 0 0 / 0.5), 0 0 20px 0 rgb(59 130 246 / 0.3); }
.play-now:hover { box-shadow: 0 15px 40px -5px rgb(0 0 0 / 0.6), 0 0 30px 0 rgb(59 130 246 / 0.5); }
</style>
