<!--
  ::alert{type="info|success|warning|danger"} from Docus 1, kept so the
  content needs no edits: a coloured box around its text.
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: string }>(), { type: "info" });
const colour = computed(() => ({
  info: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  danger: "border-red-500/30 bg-red-500/10 text-red-300",
}[props.type] ?? "border-sky-500/30 bg-sky-500/10 text-sky-300"));
</script>

<template>
  <div class="fdg-alert my-5 rounded-md border px-4 py-3 text-sm leading-6" :class="colour">
    <slot mdc-unwrap="p" />
  </div>
</template>

<style scoped>
.fdg-alert :deep(a) { color: inherit; font-weight: 500; text-decoration: underline; text-underline-offset: 3px; }
.fdg-alert :deep(strong) { color: inherit; }
</style>
