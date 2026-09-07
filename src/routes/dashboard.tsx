import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { Check, Copy } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    title: "Partner Area — PipShare Affiliate Dashboard",
    meta: [
      {
        name: "description",
        content:
          "Track your referral link clicks, referred forex traders, traded lots and monthly rebate payouts in one place.",
      },
      { property: "og:title", content: "Partner Area — PipShare Affiliate Dashboard" },
      {
        property: "og:description",
        content: "Referral link, live client stats and payout history for PipShare partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const stats = [
  { label: "Link clicks (30d)", value: "1,482" },
  { label: "Registrations", value: "63" },
  { label: "Active traders", value: "24" },
  { label: "Lots traded (30d)", value: "612.4" },
];

const clients = [
  { id: "TR-8841", joined: "12 Aug 2026", lots: "148.2", commission: "$815.10", status: "Active" },
  { id: "TR-8830", joined: "09 Aug 2026", lots: "96.7", commission: "$531.85", status: "Active" },
  { id: "TR-8802", joined: "01 Aug 2026", lots: "74.0", commission: "$407.00", status: "Active" },
  { id: "TR-8788", joined: "27 Jul 2026", lots: "12.5", commission: "$68.75", status: "Low volume" },
  { id: "TR-8771", joined: "21 Jul 2026", lots: "0.0", commission: "$0.00", status: "Not funded" },
];

const payouts = [
  { period: "August 2026", amount: "$3,366.20", status: "Processing" },
  { period: "July 2026", amount: "$2,918.55", status: "Paid" },
  { period: "June 2026", amount: "$2,140.00", status: "Paid" },
];

function Dashboard() {
  const [copied, setCopied] = useState(false);
  const link = "https://pipshare.app/r/jahangeer";

  const copy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="font-display text-3xl font-bold tracking-tight">Partner area</h1>
        <p className="mt-2 text-muted-foreground">
          Growth tier · $5.50 per standard lot · next payout 05 Sep 2026
        </p>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-medium">Your referral link</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <code className="flex-1 overflow-x-auto rounded-md bg-secondary/60 px-4 py-3 text-sm">
              {link}
            </code>
            <button
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy link"}
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Share only where financial promotion is permitted. Never promise profits to the people
            you refer.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
              <p className="mt-2 font-display text-3xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-6 py-4">
              <h2 className="font-display text-lg font-semibold">Referred clients</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr className="border-b border-border">
                    <th className="px-6 py-3 font-medium">Client</th>
                    <th className="px-6 py-3 font-medium">Joined</th>
                    <th className="px-6 py-3 font-medium">Lots</th>
                    <th className="px-6 py-3 font-medium">Commission</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((c) => (
                    <tr key={c.id} className="border-b border-border/60 last:border-0">
                      <td className="px-6 py-3 font-medium">{c.id}</td>
                      <td className="px-6 py-3 text-muted-foreground">{c.joined}</td>
                      <td className="px-6 py-3">{c.lots}</td>
                      <td className="px-6 py-3 text-accent">{c.commission}</td>
                      <td className="px-6 py-3 text-muted-foreground">{c.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-6 py-4 text-xs text-muted-foreground">
              Client identities are anonymised. Figures update once a day after the broker settles
              volume.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-6 py-4">
              <h2 className="font-display text-lg font-semibold">Payouts</h2>
            </div>
            <ul className="divide-y divide-border/60">
              {payouts.map((p) => (
                <li key={p.period} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="font-medium">{p.period}</p>
                    <p className="text-xs text-muted-foreground">{p.status}</p>
                  </div>
                  <p className="font-display text-lg font-semibold">{p.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          The figures shown are sample data for layout purposes until live broker tracking is
          connected.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
