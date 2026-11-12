<!-- ::card{icon} from Docus 1, used inside ::card-grid. -->
<script setup lang="ts">
defineProps<{ icon?: string }>();
</script>

<template>
  <div class="relative flex flex-col gap-4 rounded-xl border border-default bg-elevated/40 p-6 backdrop-blur">
    <UIcon v-if="icon" :name="icon" class="size-10" />
    <slot />
    <div>
      <h3 class="mb-2 text-lg font-semibold text-highlighted"><slot name="title" mdc-unwrap="p" /></h3>
      <div class="text-sm leading-6 text-muted [&_p]:my-0"><slot name="description" /></div>
    </div>
  </div>
</template>
