<!-- Docus footer, left side: FDG's own links in place of the copyright line. -->
<script setup lang="ts">
const links = [
  { label: "Support Portal", to: "https://support.fatduckgaming.com", target: "_blank" },
  { label: "Discord", to: "https://discord.gg/fatduckgaming", target: "_blank" },
  { label: "Donate", to: "https://donate.fatduckgaming.com", target: "_blank" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];
</script>

<template>
  <nav class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
    <ULink v-for="link in links" :key="link.label" v-bind="link" class="hover:text-default">{{ link.label }}</ULink>
  </nav>
</template>
