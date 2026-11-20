import BrandLogo from "@/components/BrandLogo";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const features = [
  {
    title: "Endless game feed",
    description:
      "Scroll an infinite stream of playable games — not photos or clips. Tap in, play instantly, swipe to the next.",
  },
  {
    title: "Friends & requests",
    description:
      "Build a circle of players you actually want to compete with. Send and manage friend requests in one place.",
  },
  {
    title: "Chat while you play",
    description:
      "Message friends, share wins, and talk through the next challenge without leaving the moment.",
  },
  {
    title: "Head-to-head challenges",
    description:
      "Pick a game, send a challenge, and settle it against friends — social competition built into every session.",
  },
  {
    title: "Leaderboards",
    description:
      "Climb the ranks on competitive titles. See where you stand among friends and the wider Flynk Up community.",
  },
  {
    title: "Game Engine Studio",
    description:
      "Create and publish your own games for the feed. Studio tools for makers are rolling out next.",
  },
];

const steps = [
  {
    title: "Discover",
    description:
      "Open the feed and find games curated for play — casual classics, competitive score-chasers, and new drops from creators.",
  },
  {
    title: "Play",
    description:
      "Jump straight into the game. No long installs for feed titles — open, play, and move on when you’re ready.",
  },
  {
    title: "Share & compete",
    description:
      "Challenge friends, chat about the run, and climb leaderboards so every session stays social.",
  },
];

const faqs = [
  {
    question: "What is Flynk Up?",
    answer:
      "Flynk Up is a social network built around games. Instead of a feed of photos or videos, you get an endless stream of playable experiences — plus friends, chat, challenges, and leaderboards.",
  },
  {
    question: "How is Flynk Up different from other social apps?",
    answer:
      "Most social apps make you watch. Flynk Up makes you play. The product centers on a playable feed so discovery, competition, and conversation all happen around games.",
  },
  {
    question: "Can I create games for Flynk Up?",
    answer:
      "Yes — Game Engine Studio is designed for creators to build and publish games into the Flynk Up feed. More studio details will be shared as the rollout continues.",
  },
  {
    question: "How do I get in touch?",
    answer: `For partnerships, press, or product questions, email ${siteConfig.email}.`,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="hero-glow relative flex min-h-screen scroll-mt-16 flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-16 sm:px-8"
        >
          <div
            aria-hidden
            className="hero-orb pointer-events-none absolute -left-24 top-28 h-56 w-56 rounded-full bg-brand-red/10 blur-3xl"
          />
          <div
            aria-hidden
            className="hero-orb pointer-events-none absolute -right-16 bottom-24 h-64 w-64 rounded-full bg-brand-red-bright/10 blur-3xl"
            style={{ animationDelay: "1.4s" }}
          />

          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <div className="animate-rise mb-10 w-full max-w-xl px-2 sm:mb-12 sm:max-w-2xl">
              <BrandLogo
                variant="tagline"
                className="mx-auto h-auto w-full max-w-[34rem]"
                priority
                alt="Flynk Up — Play · Share · Discover"
              />
            </div>

            <h1 className="animate-rise-delay font-display max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              The social network{" "}
              <span className="brand-gradient-text">built for games.</span>
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="animate-rise-delay-2 mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#features"
                className="brand-gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:opacity-95"
              >
                Explore features
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-red/45"
              >
                How it works
              </a>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
                How it works
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Play. Share. Discover.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Flynk Up turns the familiar social loop into a gaming loop —
                find something new, play it together, and keep the streak going.
              </p>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title}>
                  <p className="font-display text-sm font-semibold tracking-[0.2em] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
                Features
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything social — built for games
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Friends, chat, challenges, and ranks sit around a playable feed
                so competition and conversation never feel bolted on.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="border-t border-border pt-6">
                  <div className="feature-mark mb-4 h-1 w-10 rounded-full" />
                  <h3 className="font-display text-lg font-semibold tracking-tight">
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
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
            <BrandLogo
              variant="icon"
              className="h-24 w-24 sm:h-28 sm:w-28"
              alt="Flynk Up icon"
            />
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
                About
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                About Flynk Up
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Flynk Up (also written Flynkup) is building the place where
                  people meet around play — a mobile-first social gaming
                  platform with an endless feed of games you can open and play
                  instantly.
                </p>
                <p>
                  The brand promise is simple:{" "}
                  <strong className="font-semibold text-foreground">
                    Play · Share · Discover
                  </strong>
                  . Discover new games in the feed, share moments with friends,
                  and compete through challenges and leaderboards.
                </p>
                <p>
                  Creators are part of the roadmap too. Game Engine Studio will
                  let makers design and publish titles into the same feed
                  players already scroll — closing the loop from creation to
                  play.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
                FAQ
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions people ask
              </h2>
            </div>

            <div className="mt-12 max-w-3xl divide-y divide-border border-t border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none font-display text-lg font-semibold tracking-tight marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-brand-red transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 border-t border-border px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
              Contact
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Say hello
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Questions, partnerships, press, or creator interest — reach the
              Flynk Up team at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-red underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <BrandLogo variant="icon" className="h-8 w-8" alt="" />
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-muted" aria-label="Footer">
            <a href="#features" className="transition hover:text-foreground">
              Features
            </a>
            <a href="#faq" className="transition hover:text-foreground">
              FAQ
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
