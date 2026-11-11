<template>
  <UContainer class="pb-24">
    <h1 id="contributors" class="mb-6 text-4xl font-bold tracking-tight text-highlighted">Without you, FDG wouldn't be here.</h1>
    <div class="text-lg text-muted">
      <slot />
    </div>
    <ClientOnly>
      <p class="mt-6 text-muted">
        A special shoutout to the
        <strong class="text-highlighted">{{ data ? data.length : "" }}</strong> contributors
        of this site on
        <ULink to="https://github.com/fdg-rp/web-landing" target="_blank" class="text-primary">GitHub</ULink>.
      </p>
      <div class="contributors">
        <div v-for="i in data" :key="i.html_url">
          <a :href="i.html_url" target="_blank" rel="noopener noreferrer">
            <img :src="i.avatar_url" >
          </a>
        </div>
      </div>
    </ClientOnly>
  </UContainer>
</template>

<script setup>
const { data } = await useAsyncData("fdg-contributors", () =>
  $fetch("https://api.github.com/repos/fdg-rp/web-landing/contributors")
);
</script>

<style>
.contributors {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 1rem;
}

.contributors img {
  border-radius: 50%;
}
</style>
