<template>
  <div style="padding-bottom: 128px;">
    <ContentSlot :use="$slots.default" />
    <ClientOnly>
      <MarqueeText :duration="40">
        <div style="display: flex">
          <div class="streamer-card" v-for="s in streamers" :key="s.href">
            <div>
              <img :src="s.img" class="streamer-card-img" />
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
import MarqueeText from "vue-marquee-text-component";

const streamers = [
  {
    title: "@DeverauxAus",
    subtitle: "Server Owner",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/05b54cca-0abf-4d09-9354-ba4816ecebd3-profile_image-150x150.png",
    href: "https://www.twitch.tv/deverauxaus",
  },
  {
    title: "@METRITIS_",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/49064db8-472d-4af5-af81-704ee67d2c45-profile_image-150x150.png",
    href: "https://www.twitch.tv/metritis_",
  },
  {
    title: "@brainlesstay",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/b539f252-67c2-44fe-a372-0d9f68fd55ec-profile_image-150x150.png",
    href: "https://www.twitch.tv/brainlesstay",
  },
  {
    title: "@MartiboRS",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/c9916860-cdac-48ef-9279-b15cf4d53685-profile_image-150x150.png",
    href: "https://www.twitch.tv/martibors",
  },
  {
    title: "@RichoPOV",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/8900a195-116b-4973-836e-7989d47b08ff-profile_image-70x70.png",
    href: "https://www.twitch.tv/richopov",
  },
  {
    title: "@azzablake",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/0a2eb4eb-19d4-4592-adb0-ff5af900487b-profile_image-70x70.png",
    href: "https://www.twitch.tv/azzablake",
  },
  {
    title: "@PureRiffery900",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/abccf441-c928-4c3c-9bc1-e455ba3cbd84-profile_image-70x70.png",
    href: "https://www.twitch.tv/pureriffery900",
  },
  {
    title: "@bentoto_au",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/8b39aaec-94ef-4afa-b0bd-2b1d8490d79f-profile_image-150x150.png",
    href: "https://www.twitch.tv/bentoto_au",
  },
  {
    title: "@f1zzydrinks",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/30e606b2-b3ea-4528-b601-798713218b93-profile_image-150x150.png",
    href: "https://www.twitch.tv/f1zzydrinks",
  },
  {
    title: "@cocoproteinshake",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/a2eef0f4-86ea-41ec-b227-590b3c31f5d7-profile_image-150x150.png",
    href: "https://www.twitch.tv/cocoproteinshake",
  },
  {
    title: "@Nick69Gaming",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/nick69gaming-profile_image-52366ded0a1b6f62-150x150.jpeg",
    href: "https://www.twitch.tv/nick69gaming",
  },
  {
    title: "@SoCRiiSPY",
    subtitle: "Endorsed Creator",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/b9f155ee-dafe-49a0-996a-4b951922d108-profile_image-70x70.png",
    href: "https://www.twitch.tv/socriispy",
  },
];
</script>

<style scoped lang="ts">
css({
    '.streamer-card': {
        position: 'relative',
        padding: '2rem',
        border: '1px solid #9146FF',
        background: '#9146FF33',
        borderRadius: '1rem',
        marginLeft: '2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    '.streamer-card-title': {
        marginBottom: '0.5rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        fontWeight: '600',
        color: '#FBFBFB'
    },
    '.streamer-card-subtitle': {
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: '500',
        color: '#ADA9A4'
    },
    '.streamer-card-img': {
        width: '50px',
        height: '50px',
        marginRight: '1rem',
        borderRadius: '50px'
    }
})
</style>
