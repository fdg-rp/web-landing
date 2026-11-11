<template>
  <ClientOnly>
    <div v-for="(a, i) in data" :key="i">
      <div class="my-4">
        <AnnouncementCard>
          <UBadge variant="subtle">Community Announcement</UBadge>
          <div class="my-4">
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
              >
              {{ a.authorName }} on
              {{
                new Date(a.timestamp).toLocaleString("en-AU", {
                  dateStyle: "full",
                  timeStyle: "short",
                })
              }}
            </div>
          </div>
          <div class="my-4">
            {{ a.content }}
          </div>
          <ULink :to="a.url" target="_blank" class="inline-flex items-center font-medium text-primary">
            Open in Discord
            <UIcon name="i-simple-icons-discord" class="ml-1 size-4" />
          </ULink>
        </AnnouncementCard>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const { data } = await useAsyncData("fdg-announcements", () =>
  $fetch("https://api.fatduckgaming.com/announcements")
);
</script>
