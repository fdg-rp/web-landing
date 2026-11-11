<template>
  <div style="padding-bottom: 128px">
    <slot />
    <ClientOnly>
      <MarqueeText :duration="40" :paused="isPaused" @mouseenter="isPaused = !isPaused" @mouseleave="isPaused = false">
        <div style="display: flex">
          <div v-for="s in streamers" :key="s.href" class="streamer-card" @click="gotoStreamer(s.href)">
            <div>
              <img :src="s.img" class="streamer-card-img" >
            </div>
            <div>
              <div class="streamer-card-title">
                <a :href="s.href"> {{ s.title }} </a>
              </div>
              <div class="streamer-card-subtitle">{{ s.subtitle }}</div>
            </div>
          </div>
        </div>
      </MarqueeText>
    </ClientOnly>
  </div>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component';

const isPaused = ref(false);

function gotoStreamer(href) {
  window.open(href);
}

const streamers = [
  {
    title: '@Deveraux',
    subtitle: 'Server Owner',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b2fd776a-6805-4c96-a348-df90ae1657f6-profile_image-70x70.png',
    href: 'https://www.twitch.tv/deveraux'
  },
  {
    title: '@METRITIS',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/49064db8-472d-4af5-af81-704ee67d2c45-profile_image-150x150.png',
    href: 'https://www.twitch.tv/metritis'
  },
  {
    title: '@brainlesstay',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b539f252-67c2-44fe-a372-0d9f68fd55ec-profile_image-150x150.png',
    href: 'https://www.twitch.tv/brainlesstay'
  },
  {
    title: '@MartiboRS',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c9916860-cdac-48ef-9279-b15cf4d53685-profile_image-150x150.png',
    href: 'https://www.twitch.tv/martibors'
  },
  {
    title: '@OzNat1',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3115ceb6-98bc-4fd4-b86e-2d88713570d0-profile_image-70x70.png',
    href: 'https://www.twitch.tv/oznat1'
  },
  {
    title: '@Kaiium_',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f404ad2e-ddbf-40b8-8608-186505827000-profile_image-70x70.png',
    href: 'https://www.twitch.tv/kaiium_'
  },
  {
    title: '@Deveraux',
    subtitle: 'Server Owner',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b2fd776a-6805-4c96-a348-df90ae1657f6-profile_image-70x70.png',
    href: 'https://www.twitch.tv/deveraux'
  },
  {
    title: '@f1zzydrinks',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/30e606b2-b3ea-4528-b601-798713218b93-profile_image-150x150.png',
    href: 'https://www.twitch.tv/f1zzydrinks'
  },
  {
    title: '@SoCRiiSPY',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b9f155ee-dafe-49a0-996a-4b951922d108-profile_image-70x70.png',
    href: 'https://www.twitch.tv/socriispy'
  },
  {
    title: '@Denzlle',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1e567c55-3b37-4939-a805-667b04963d01-profile_image-70x70.png',
    href: 'https://www.twitch.tv/denzlle'
  },
  {
    title: '@suttoGT',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b935644d-2575-442e-81e4-5ee25da28863-profile_image-70x70.png',
    href: 'https://www.twitch.tv/suttogt'
  }
];
</script>

<style scoped>
.streamer-card {
  position: relative;
  padding: 2rem;
  border: 1px solid #9146ff;
  background: #9146ff33;
  border-radius: 1rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.streamer-card:hover { background: #9146ff88; cursor: pointer; transition: background 0.25s; }
.streamer-card-title { margin-bottom: 0.5rem; font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; }
.streamer-card-subtitle { margin-bottom: 0.5rem; font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; color: #ada9a4; }
.streamer-card-img { width: 50px; height: 50px; margin-right: 1rem; border-radius: 50px; }
</style>
