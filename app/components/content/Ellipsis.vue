<!-- :ellipsis from Docus 1: a blurred glow behind a section. -->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{ width?: string; height?: string; zIndex?: string; top?: string; left?: string; right?: string; blur?: string; colors?: string[] }>(),
  { width: "10rem", height: "10rem", zIndex: "10", top: "0", left: "auto", right: "auto", blur: "50px",
    colors: () => ["rgba(0, 71, 225, 0.22)", "rgba(26, 214, 255, 0.22)", "rgba(0, 220, 130, 0.22)"] },
);
const style = computed(() => ({
  top: props.top, left: props.left, right: props.right, zIndex: props.zIndex, maxWidth: props.width, height: props.height,
  filter: `blur(${props.blur})`,
  background: `linear-gradient(97.62deg, ${props.colors.join(", ")})`,
}));
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 mx-auto w-full rounded-full" :style="style" />
</template>
