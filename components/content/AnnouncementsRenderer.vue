<template>
  <ClientOnly>
    <div v-for="(a, i) in data" :key="i">
      <ProseP>
        <AnnouncementCard>
          <Badge>Community Annoucement</Badge>
          <ProseP>
            <div style="color: rgb(173, 169, 164); font-size: 14px">
              <img
                :src="a.authorImg"
                style="
                  display: inline-block;
                  max-width: 35px;
                  max-height: 35px;
                  border-radius: 50%;
                  margin-right: 2px;
                "
              />
              {{ a.authorName }} on
              {{
                new Date(a.timestamp).toLocaleString("en-AU", {
                  dateStyle: "full",
                  timeStyle: "short",
                })
              }}
            </div>
          </ProseP>
          <ProseP>
            {{ a.content }}
          </ProseP>
          <ProseA :href="a.url">
            Open in Discord
            <Icon style="margin-left: 2px" name="line-md:discord" />
          </ProseA>
        </AnnouncementCard>
      </ProseP>
    </div>
  </ClientOnly>
</template>

<script setup>
const { data } = await useAsyncData("fdg-announcements", () =>
  $fetch("https://api.fatduckgaming.com/announcements")
);
</script>
