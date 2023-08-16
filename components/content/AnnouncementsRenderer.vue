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
        <Icon name="ic:round-announcement"></Icon> By
        <ProseEm class="author">
          <img :src="a.authorImg" alt="PFP">
          {{ a.authorName }} 
        </ProseEm> in
        <ProseStrong> Community Announcements </ProseStrong>
      </ProseP>
      <ProseP class="announcement">
        <a :href="a.url"> {{ a.content }} </a>
      </ProseP>
    </div>
  </ClientOnly>
</template>

<script setup>
const { data } = await useAsyncData("fdg-announcements", () =>
  $fetch("https://api.fatduckgaming.com/announcements")
);
</script>

<style>
.announcement {
  position: relative;
  background-color: #7289da33;
  border-radius: 10px;
  border: solid 2px;
  border-color: #7289da;
  padding: 15px;
  width: fit-content;
  height: fit-content;
  box-shadow: inset 0 0 0 0 #7289da;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
} 

.announcement:hover {
  box-shadow: inset 1920px 0 0 0 #7289da;
  cursor: pointer;
}

.author {
  background-color: #7289da;
  border-radius: 10px;
  padding: 2px;
  width: fit-content;
  height: 35px;
  color: #1e2124;
  display: flex;
  align-items: center;
}

.author img {
  margin-right: 1px;
  border-radius: 50px;
  height: 40px;
  width: 40px;
}
</style>
