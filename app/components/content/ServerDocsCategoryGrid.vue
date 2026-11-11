<!-- The server docs index: a card for each folder in content/0.server-docs. -->
<script setup lang="ts">
const { data: navigation } = await useAsyncData("server-docs-nav", () =>
  queryCollectionNavigation("docs", ["description"]),
);

const categories = computed(() => {
  const section = navigation.value?.find((item) => item.path === "/server-docs");
  return (section?.children ?? [])
    .filter((item) => item.children?.length)
    .map((item) => ({
      title: item.title,
      path: item.path,
      icon: (item.icon as string | undefined) || "noto:file-folder",
      description: (item.description as string | undefined) || "",
    }));
});
</script>

<template>
  <!-- The page header above already shows the title and description. -->
  <div class="mx-auto max-w-[1200px] py-4">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="category in categories"
        :key="category.path"
        :to="category.path"
        class="group relative flex flex-col items-center overflow-hidden rounded-lg border border-default bg-elevated/50 p-8 text-center no-underline transition hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgb(59_130_246_/_0.3)]"
      >
        <UIcon :name="category.icon" class="mb-4 size-12 transition group-hover:scale-110" />
        <h3 class="mb-2 text-xl font-semibold text-highlighted">{{ category.title }}</h3>
        <p v-if="category.description" class="text-sm text-muted">{{ category.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
