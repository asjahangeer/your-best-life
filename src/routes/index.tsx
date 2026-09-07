import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { BarChart3, Link2, ShieldCheck, Wallet } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "PipShare — Forex Broker Affiliate Programme",
    meta: [
      {
        name: "description",
        content:
          "Refer traders to a regulated forex broker and earn transparent per-lot rebates. No deposits, no recruitment payouts, full tracking dashboard.",
      },
      { property: "og:title", content: "PipShare — Forex Broker Affiliate Programme" },
      {
        property: "og:description",
        content:
          "Earn transparent per-lot commission on the traders you introduce. Real-time tracking, monthly payouts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  {
    icon: Link2,
    title: "Get your link",
    text: "Sign up as a partner and receive a unique tracking link and promo assets.",
  },
  {
    icon: BarChart3,
    title: "Refer traders",
    text: "Share it with your audience. Clicks, registrations and funded accounts are tracked live.",
  },
  {
    icon: Wallet,
    title: "Earn per traded lot",
    text: "You receive a fixed rebate on the spread of every lot your referred clients trade.",
  },
];

const tiers = [
  { name: "Starter", clients: "1 – 9 active clients", rate: "$3.00", unit: "per standard lot" },
  { name: "Growth", clients: "10 – 49 active clients", rate: "$5.50", unit: "per standard lot" },
  { name: "Elite", clients: "50+ active clients", rate: "$8.00", unit: "per standard lot" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.15fr_1fr] md:items-center md:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <ShieldCheck className="h-3.5 w-3.5" /> Introducing-partner programme
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
                Earn a rebate on every lot your referred traders trade.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                PipShare pays partners for introducing clients to a regulated forex broker.
                Commission comes from real trading volume — never from deposits, and never from
                signing up other partners.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/dashboard"
                  className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Open partner area
                </Link>
                <a
                  href="#tiers"
                  className="rounded-md border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
                >
                  See commission rates
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Free to join · No deposit required · Earnings depend on client activity and are not
                guaranteed
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-2xl">
              <p className="text-sm text-muted-foreground">Example month · Growth tier</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  ["Referred clients", "24"],
                  ["Active traders", "16"],
                  ["Lots traded", "612"],
                  ["Commission", "$3,366"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-secondary/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                    <p className="mt-1 font-display text-2xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Illustration only. Actual results vary with how much your clients trade.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-6">
                <s.icon className="h-6 w-6 text-primary" />
                <p className="mt-4 text-xs font-medium text-muted-foreground">Step {i + 1}</p>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tiers" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight">Commission tiers</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Your rate is based on how many of your referred clients traded in the last 30 days.
              Rebates are credited daily and paid out monthly.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/60"
                >
                  <p className="font-display text-lg font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.clients}</p>
                  <p className="mt-6 font-display text-4xl font-bold text-primary">{t.rate}</p>
                  <p className="text-sm text-muted-foreground">{t.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">What we don't do</h2>
          <ul className="mt-6 grid gap-3 text-muted-foreground md:grid-cols-2">
            {[
              "No deposits or investments are taken from partners.",
              "No commission for recruiting other partners or for building a downline.",
              "No fixed, daily or guaranteed returns of any kind.",
              "No payment for sign-ups alone — only for real, verified trading volume.",
            ].map((t) => (
              <li key={t} className="rounded-lg border border-border bg-card p-4 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
