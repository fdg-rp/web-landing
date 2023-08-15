<template>
  <ClientOnly>
    <div v-for="(a, i) in data" :key="i">
      <ProseH3
        :id="
          new Date(a.timestamp)
            .toLocaleString('en-AU', {
              dateStyle: 'medium',
              timeStyle: 'long',
            })
            .replaceAll(' ', '-')
        "
      >
        {{
          new Date(a.timestamp).toLocaleString("en-AU", {
            dateStyle: "medium",
            timeStyle: "long",
          })
        }}
      </ProseH3>
      <ProseP>
        <Icon name="noto:loudspeaker"></Icon> By
        <ProseEm> {{ a.authorName }} </ProseEm> in
        <ProseStrong> Community Announcements </ProseStrong>
      </ProseP>
      <ProseP>
        {{ a.content }}
      </ProseP>
    </div>
  </ClientOnly>
</template>

<script setup>
const { data } = await useAsyncData("fdg-announcements", () =>
  $fetch("https://api.fatduckgaming.com/announcements")
);
</script>
