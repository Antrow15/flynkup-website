import Image from "next/image";
import Navbar from "@/components/Navbar";

const features = [
  {
    title: "Endless game feed",
    description:
      "Scroll through an indefinite stream of playable games — not photos or videos. Discover, play, and keep going.",
  },
  {
    title: "Friends & requests",
    description:
      "Add friends, manage requests, and build a circle of players you actually want to compete with.",
  },
  {
    title: "Chat",
    description:
      "Talk while you play. Message friends, share wins, and coordinate your next challenge.",
  },
  {
    title: "Challenge friends",
    description:
      "Pick a game, send a challenge, and settle it head-to-head — social competition built in.",
  },
  {
    title: "Leaderboards",
    description:
      "Climb the ranks on competitive games. See where you stand among friends and the wider community.",
  },
  {
    title: "Game Engine Studio",
    description:
      "Coming later: create and publish your own games. More details will be shared as we roll it out.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="hero-glow relative flex min-h-screen scroll-mt-16 flex-col items-center justify-center px-5 pt-20 pb-16 sm:px-8"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <Image
              src="/flynk-up-logo.png"
              alt="Flynk Up"
              width={120}
              height={120}
              className="mb-8 h-24 w-24 sm:h-28 sm:w-28"
              priority
            />
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-muted uppercase">
              Social gaming
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Play together.{" "}
              <span className="brand-gradient-text">Scroll forever.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Flynk Up is a social network built around games — an endless feed
              of playable experiences, with friends, chat, challenges, and
              leaderboards at the center.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#features"
                className="brand-gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:opacity-95"
              >
                Explore features
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-blue/40"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.18em] text-brand-blue uppercase">
                Features
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything social — built for games
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                The same social rhythm you know, reimagined around playable
                content instead of posts and clips.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium tracking-[0.18em] text-brand-violet uppercase">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              About Flynk Up
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Founder details will be shared here soon.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium tracking-[0.18em] text-brand-indigo uppercase">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Say hello
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Questions, ideas, or partnerships — reach us at{" "}
              <a
                href="mailto:flynkup@gmail.com"
                className="font-medium text-brand-blue underline-offset-4 hover:underline"
              >
                flynkup@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Flynk Up
          </p>
          <a
            href="mailto:flynkup@gmail.com"
            className="text-sm text-muted transition hover:text-foreground"
          >
            flynkup@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}
