<!--
  Docus header, centre: the search button, and on pages without the docs
  tabs (the home page) the site's sections, as the old header had.
-->
<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const route = useRoute();
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

function firstPage(item: ContentNavigationItem): string {
  let current = item;
  while (current.children?.length) current = current.children[0]!;
  return current.path;
}

const sections = computed(() =>
  route.meta.layout === "docs"
    ? []
    : (navigation?.value ?? [])
        .filter((item) => item.children?.length)
        .map((item) => ({ label: item.title, icon: item.icon as string | undefined, to: firstPage(item) })),
);
</script>

<template>
  <div class="flex w-full items-center gap-4">
    <UNavigationMenu v-if="sections.length" :items="sections" variant="link" class="hidden shrink-0 lg:flex" />
    <UContentSearchButton :collapsed="false" class="w-full" variant="soft" :ui="{ leadingIcon: 'size-4 mx-0.5' }" />
  </div>
</template>
