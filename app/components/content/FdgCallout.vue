<!--
  ::callout{type} from Docus 1: a box whose #summary is always shown and
  whose #content opens when the summary is clicked.
-->
<script setup lang="ts">
withDefaults(defineProps<{ type?: string }>(), { type: "info" });
const open = ref(false);
</script>

<template>
  <Alert :type="type">
    <button type="button" class="flex w-full items-center justify-between gap-2 text-left" @click="open = !open">
      <span><slot name="summary" mdc-unwrap="p" /></span>
      <UIcon name="i-lucide-chevron-right" class="size-4 shrink-0 transition-transform" :class="open && 'rotate-90'" />
    </button>
    <div v-show="open" class="mt-3"><slot name="content" /></div>
  </Alert>
</template>
