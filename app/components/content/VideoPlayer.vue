<!--
  :video-player{src} from Docus 1: a YouTube video shown as its thumbnail,
  loading the player only when clicked. `title` names the video for screen
  readers and search engines.
-->
<script setup lang="ts">
const props = defineProps<{ src: string; title?: string }>();
const loaded = ref(false);
const id = computed(() => props.src.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)?.[1]);
</script>

<template>
  <div v-if="id" class="relative my-4 aspect-video w-full overflow-hidden rounded-lg bg-black">
    <iframe
      v-if="loaded"
      class="absolute inset-0 size-full"
      :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      :title="title || 'YouTube video'"
      allowfullscreen
    />
    <button v-else type="button" class="group absolute inset-0" :aria-label="title ? `Play video: ${title}` : 'Play video'" @click="loaded = true">
      <img :src="`https://i.ytimg.com/vi/${id}/hqdefault.jpg`" alt="" :title="title" class="size-full object-cover" loading="lazy">
      <span class="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-black/60 transition group-hover:bg-black/80">
        <UIcon name="i-lucide-play" class="size-8 text-white" />
      </span>
    </button>
  </div>
</template>
