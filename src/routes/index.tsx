import { createFileRoute } from "@tanstack/react-router";
import { WallClock } from "@/components/WallClock";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Wall Clock",
    meta: [
      {
        name: "description",
        content: "A simple, elegant analog and digital wall clock.",
      },
      { property: "og:title", content: "Wall Clock" },
      {
        property: "og:description",
        content: "A simple, elegant analog and digital wall clock.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <WallClock />
    </main>
  );
}
