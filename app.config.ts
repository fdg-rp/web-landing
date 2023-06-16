export default defineAppConfig({
  docus: {
    title: "Fat Duck Gaming",
    description: "Australia's favourite FiveM community",
    url: "https://docs.fatduckgaming.com",
    image: "https://i.imgur.com/eKCrYP0.png",
    socials: {
      // twitter: "nuxtstudio",
      github: "fdg-rp/web-landing",
      discord: {
        label: "Discord",
        icon: "simple-icons:discord",
        href: "https://discord.gg/fatduckgaming",
        rel: "noopener noreferrer",
      },
      tiktok: "@officialfatduckgaming",
    },
    github: {
      dir: "/content",
      branch: "main",
      repo: "web-landing",
      owner: "fdg-rp",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: false,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false,
    },
    footer: {
      fluid: false,
      credits: false,
      iconLinks: [],
      textLinks: [
        {
          text: "Support",
          href: "https://support.fatduckgaming.com",
          target: "_blank",
          rel: "noopener",
        },
        {
          text: "Discord",
          href: "https://discord.gg/fatduckgaming",
          target: "_blank",
          rel: "noopener",
        },
      ],
    },
  },
});
