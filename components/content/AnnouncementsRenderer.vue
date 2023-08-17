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
// const { data } = await useAsyncData("fdg-announcements", () =>
//   $fetch("https://api.fatduckgaming.com/announcements")
// );
const data = [
  {
    content:
      "Happiest of Birthdays to our overly gorgeous Emergency Vehicle modeller @​stevieg \n\nHave a good day! Remember we love you (except for the fucking Volvo @​pumparn drives, we’ll never forgive you for that)",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1691633992737,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1139020263271444500",
  },
  {
    content: "",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1690971237434,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1136240466053042226",
  },
  {
    content:
      "Hi Everyone,\n\nExcuse the tag but very exciting times ahead!\n\nI'd like to officially introduce @​chriso_88 to you in a more official setting - Chris is the Product Manager at Mwave.com.au - Australias Largest online tech retailer. \n\nMWAVE and Logitech have partnered with myself for some streaming fun and giveaways which will expand to not only my stream community but the FDG Community as a whole. We've never partnered with anyone previously given that often brands that have approached us don't share our values, however a brand like Logitech and a business like Mwave is obviously a no brainer that our values align. We all want one thing, to game more and businesses like mwave and Logitech facilitate that.\n\nSo for anyone who is looking to upgrade there PC head to <#1135373432230531183> and have a chat with Chris, he'll hook you up with anything from basic advice to full quotes for systems.\n\nTo kick off our partnership tonight we're giving away a Logitech G915 TKL LIGHTSPEED Keyboard on stream, we'll be live shortly after this message. Give away opens and is drawn tonight!\n\nhttps://streamelements.com/deveraux/giveaway/64ca2bed82bdc956d849ad40\n\n@here @Fat Duck Family @Tier 2 Supporter @Tier 2 Supporter @Team Deveraux Subscriber",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1690971228664,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1136240429269008404",
  },
  {
    content:
      "Good news!\n\nWe have identified the cause of the last couple of crashes over the past few weeks and will rectify shortly! \n\nI know they're annoying but should cease shortly ❤️",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1690551428714,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1134479660659519520",
  },
  {
    content: "",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1689167121963,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1128673457316573324",
  },
  {
    content:
      ".\n📢 **Introducing FDG's New Home: Early Access at https://preview.fatduckgaming.com/** 📢\n\nWe are thrilled to unveil our latest web service, crafted by our amazing community. Say goodbye to scattered information and embrace a centralised hub for all things FDG!\n\nPart of operation *Kill the Forums*, FDG Docs aims to provide a centralised place for all FDG information. You'll find things like:\n\n- In-depth Job Guides\n- Clear Setup & Installation instructions\n- Easy-to-follow Administrative guides\n- Enlightening Tutorials\n- Exciting News\n\nSoon, FDG Docs will be accessible in-game for quick access to FDG info (especially useful for new players) and some of our auto Discord Bot responses will be updated to include links to the site for more information. \n\nWe are proud to announce that FDG Docs is an **open-source project**, allowing you to contribute your expertise and help shape the future of FDG. Explore how you can get involved at https://preview.fatduckgaming.com/server-docs/administrative/contribute-to-docs. \n\n*Note, the contents of FDG Docs is a work-in-progress.*\n\n@everyone",
    authorName: "snakey420",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/179110013191716865/a_308c82f5968c1c3ff150c2da3a9cb3c9.webp",
    timestamp: 1688974467729,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1127865406892277843",
  },
  {
    content:
      "@everyone Don’t forget to enter the Giveaway for a Brand New Logitech X2 Wireless Headset valued at $449. It will be drawn tomorrow night!\n\nTo enter Follow DerverauxAus on Twitch and follow the instructions on the giveaway page 😘 \n\nhttps://streamelements.com/deverauxaus/giveaway/64a3d0f0b984e20a89789271",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1688896251976,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1127537346246615080",
  },
  {
    content:
      "Jeeze looks like it’s the month of Birthdays!\n\nShoutout to the bloke in the Pink Shirt, he goes my many names, Nafan, Chang, OzNat or as the ladies call him “Hey you in the bushes!”\n\nHappy Birthday @​oznat ! Our Community wouldn’t be what it is without your constant banter and I guess your contributions also. I would say more but you’ll simply bully me when I join a Voice channel if I say anything too nice. (Yeah you’d like that wouldn’t y….)\n\nIn typical Birthday fashion tagging rules do not apply therefore @​oznat can be tagged all day up until 2359 to wish him a Happy Birthday 😘 \n\nThanks for all you do 👍 ♥️\n\nPs. You can pick a bank robbery to breach this weekend and regardless of the situation we will follow you blindly.",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1687480691333,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1121600054579429416",
  },
  {
    content:
      "A massive Happy Birthday to our very own Chief Visionary Officer @​_bungle_ \n\nBungle is one of the (many) quiet achievers of our Community I genuinely find it hard to remember when he hasn’t been around helping in some way. Bungle is always looking for ways we can improve your experience with his ideas on things such as Racing, Cyberbar, Area 51 and now most recently and coming soon the Bungtastic Themepark.\n\nYou may recognise his roleplay as the cop who pulled you over but then felt bad about giving you a ticket or arresting you so let you off with a warning for the hostage in the boot and AR on your chest 🤦‍♂️ but we love him anyway.\n\nDiscord tagging rules don’t apply on your Birthday so tag away to wish him a happy birthday throughout the day.\n\nBungle - Genuinely thank you for all you continue to do to support FDG. If it wasn’t for your continued bullying each time I crashed the server to put in some new exclusive car or other stupid reason I would do it more 😘 \n\nLastly, we love you and thanks for being older than me… really takes the pressure off… old man.",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1686700199110,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1118326432926543974",
  },
  {
    content: "@everyone BAN APPEALS PANEL LIVE NOW",
    authorName: "deveraux",
    authorDiscriminator: "0",
    authorImg:
      "https://cdn.discordapp.com/avatars/258457693419732992/ffc71772d531d9d0df21139c53cbb4c5.webp",
    timestamp: 1685697738927,
    url: "https://discord.com/channels/343265479302971402/989350009742962780/1114121810171138058",
  },
];
</script>
