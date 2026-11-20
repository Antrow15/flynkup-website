export const siteConfig = {
  name: "Flynk Up",
  shortName: "Flynkup",
  tagline: "Play · Share · Discover",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://flynkup.com",
  email: "flynkup@gmail.com",
  description:
    "Flynk Up is a social network for games — an endless feed of playable experiences with friends, chat, challenges, leaderboards, and a studio for creators.",
  keywords: [
    "Flynk Up",
    "Flynkup",
    "social gaming",
    "playable feed",
    "mobile games social network",
    "challenge friends",
    "game leaderboards",
    "game studio",
    "HTML5 games",
    "play share discover",
  ],
} as const;
