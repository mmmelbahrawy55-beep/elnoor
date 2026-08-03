import React from "react";
import { ShieldCheck } from "lucide-react";
import { INSURANCES } from "../../data/site";

export default function InsuranceStrip() {
  return (
    <section className="py-16 bg-white border-y border-navy-900/[0.04]">
      <div className="container-x">
        <p className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 mb-8">
          <ShieldCheck className="w-5 h-5 text-gold-500" />
          نتعامل مع جميع شركات التأمين الكبرى
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div
            className="flex shrink-0 gap-3 animate-marquee"
            style={{ direction: "ltr" }}
          >
            {[...INSURANCES, ...INSURANCES].map((ins, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-2xl bg-slate-50 ring-1 ring-navy-900/[0.04] px-8 py-3.5 font-extrabold text-slate-500 hover:text-navy-900 hover:ring-gold-400/40 transition-all duration-300"
              >
                {ins}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
