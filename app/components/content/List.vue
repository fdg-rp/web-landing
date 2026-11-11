<!--
  ::list{type="primary|info|success|warning|danger"} from Docus 1: a
  bullet list with an icon in place of each bullet.
-->
<script setup lang="ts">
withDefaults(defineProps<{ type?: string }>(), { type: "primary" });
</script>

<template>
  <div class="fdg-list" :class="`fdg-list-${type}`">
    <slot />
  </div>
</template>

<style scoped>
.fdg-list :deep(ul) { list-style: none; padding-left: 0; margin: 1.25rem 0; }
.fdg-list :deep(li) { position: relative; padding-left: 2rem; margin: 0.75rem 0; }
.fdg-list :deep(li)::before {
  content: ""; position: absolute; left: 0; top: 0.2em; width: 1.25rem; height: 1.25rem;
  background: currentColor; -webkit-mask: var(--icon) center / contain no-repeat; mask: var(--icon) center / contain no-repeat;
  color: var(--colour);
}
.fdg-list-primary { --colour: var(--ui-primary); --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/%3E%3C/svg%3E"); }
.fdg-list-success { --colour: #10b981; --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"); }
.fdg-list-info { --colour: #0ea5e9; --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"); }
.fdg-list-warning { --colour: #f59e0b; --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'/%3E%3C/svg%3E"); }
.fdg-list-danger { --colour: #ef4444; --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"); }
</style>
