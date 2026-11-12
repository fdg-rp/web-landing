export default defineAppConfig({
  seo: {
    title: "Fat Duck Gaming",
    titleTemplate: "%s · Fat Duck Gaming",
    description: "Australia's favourite FiveM community",
    // JSON-LD on the home page: FDG as an organisation, with its profiles,
    // so search engines and AI tools know what the site is about.
    schema: {
      type: "Organization",
      organization: {
        name: "Fat Duck Gaming",
        url: "https://fatduckgaming.com",
        logo: "https://fatduckgaming.com/img/fdg_logo.png",
        sameAs: [
          "https://discord.gg/fatduckgaming",
          "https://tiktok.com/@officialfatduckgaming",
          "https://www.youtube.com/@fatduckgamingloadscreens6344",
          "https://github.com/fdg-rp",
        ],
      },
    },
  },
  header: {
    title: "Fat Duck Gaming",
    logo: {
      light: "/img/fdg_text.png",
      dark: "/img/fdg_text.png",
      alt: "Fat Duck Gaming",
    },
  },
  // The top-level folders of content/ (Guides & Docs, News, Lore, Racing)
  // as tabs under the header; the left menu shows the current one.
  navigation: {
    sub: "header",
  },
  socials: {
    discord: "https://discord.gg/fatduckgaming",
    tiktok: "https://tiktok.com/@officialfatduckgaming",
  },
  github: {
    url: "https://github.com/fdg-rp/web-landing",
    branch: "main",
    rootDir: "",
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "FDG",
      links: [
        { icon: "i-lucide-life-buoy", label: "Support Portal", to: "https://support.fatduckgaming.com", target: "_blank" },
        { icon: "i-simple-icons-discord", label: "Discord", to: "https://discord.gg/fatduckgaming", target: "_blank" },
        { icon: "i-lucide-heart", label: "Donate", to: "https://donate.fatduckgaming.com", target: "_blank" },
        { icon: "i-lucide-shield", label: "Privacy Policy", to: "/privacy-policy" },
      ],
    },
  },
  ui: {
    colors: {
      primary: "cyan",
      neutral: "zinc",
    },
  },
});
