import React from "react";
import { STATS } from "../../data/site";
import { AnimatedCounter } from "../SectionHeading";
import { Reveal } from "../motion";

export default function StatsBar() {
  return (
    <section className="relative z-20 container-x">
      <Reveal>
        <div className="relative -mt-10 rounded-3xl bg-navy-950/95 backdrop-blur-2xl ring-1 ring-white/[0.06] overflow-hidden shadow-premium-lg">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-gold-500/8 blur-[100px]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`relative p-7 md:p-8 text-center group ${
                  i < STATS.length - 1 ? "border-l border-white/[0.06]" : ""
                }`}
              >
                <p className="text-2xl md:text-4xl font-black text-gold tabular-nums" dir="ltr">
                  <AnimatedCounter value={s.value} suffix={s.suffix} decimal={s.decimal} />
                </p>
                <p className="mt-2 text-sm font-bold text-slate-400/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
