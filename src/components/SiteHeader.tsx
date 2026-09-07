import { Link } from "@tanstack/react-router";
import { CandlestickChart } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <CandlestickChart className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-tight">
            PipShare<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Overview
          </Link>
          <Link
            to="/dashboard"
            className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Partner area
          </Link>
          <Link
            to="/dashboard"
            className="ml-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join free
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl space-y-4 px-5 py-10 text-sm text-muted-foreground">
        <p className="font-display text-base font-semibold text-foreground">
          Risk & earnings disclaimer
        </p>
        <p>
          PipShare is an introducing-partner programme. Partners are paid a commission on the
          trading activity of clients they refer to the broker. We do not accept deposits, do not
          manage funds, and pay nothing for recruiting other partners or for sign-ups alone.
        </p>
        <p>
          Trading foreign exchange and CFDs carries a high level of risk and can result in the loss
          of all invested capital. Past performance is not indicative of future results. No income
          or return is guaranteed. Availability is subject to local regulation.
        </p>
        <p className="pt-2 text-xs">© {new Date().getFullYear()} PipShare Partners.</p>
      </div>
    </footer>
  );
}
