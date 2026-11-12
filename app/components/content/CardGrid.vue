<!-- ::card-grid from Docus 1: a section title over a grid of ::card. -->
<template>
  <UContainer as="section" class="relative py-16 sm:py-20">
    <slot name="root" />
    <h2 class="mb-10 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
      <slot name="title" mdc-unwrap="p" />
    </h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <slot />
    </div>
  </UContainer>
</template>
