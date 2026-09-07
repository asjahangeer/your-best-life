import { useEffect, useState } from "react";

export function WallClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  const formatNumber = (n: number) => n.toString().padStart(2, "0");

  const ticks = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative h-72 w-72 rounded-full border-4 border-border bg-card shadow-2xl sm:h-80 sm:w-80">
        {/* Clock face ticks */}
        {ticks.map((i) => {
          const rotation = (i / 12) * 360;
          const isQuarter = i % 3 === 0;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className={`mx-auto mt-2 rounded-full bg-foreground ${isQuarter ? "h-4 w-1.5" : "h-2 w-0.5"}`}
              />
            </div>
          );
        })}

        {/* Hour hand */}
        <div
          className="absolute left-1/2 top-1/2 h-2 w-24 origin-left -translate-y-1/2 rounded-full bg-foreground"
          style={{
            transform: `translate(-100%, -50%) rotate(${hourDegrees - 90}deg)`,
          }}
        />

        {/* Minute hand */}
        <div
          className="absolute left-1/2 top-1/2 h-1.5 w-32 origin-left -translate-y-1/2 rounded-full bg-muted-foreground"
          style={{
            transform: `translate(-100%, -50%) rotate(${minuteDegrees - 90}deg)`,
          }}
        />

        {/* Second hand */}
        <div
          className="absolute left-1/2 top-1/2 h-0.5 w-36 origin-left -translate-y-1/2 rounded-full bg-destructive"
          style={{
            transform: `translate(-100%, -50%) rotate(${secondDegrees - 90}deg)`,
          }}
        />

        {/* Center cap */}
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-foreground" />
      </div>

      <div className="text-center">
        <p className="text-4xl font-semibold tracking-widest text-foreground tabular-nums">
          {formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
