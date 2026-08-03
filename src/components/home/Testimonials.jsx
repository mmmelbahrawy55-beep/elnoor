import React, { useState } from "react";
import { Quote, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { TESTIMONIALS } from "../../data/site";
import SectionHeading from "../SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (d) => {
    setIndex((i) => (i + d + count) % count);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-gold-100/40 blur-[120px]" />
      <div className="relative container-x">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <div>
            <SectionHeading
              index="05"
              eyebrow="آراء عملائنا"
              title="ثقة تُبنى على الدقة والاهتمام"
              desc="مئات الآلاف من العملاء اختارونا — إليك ما يقولون."
              align="right"
            />
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-3 -space-x-reverse">
                {TESTIMONIALS.map((item, i) => (
                  <span
                    key={i}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-black bg-gradient-to-br from-gold-400 to-gold-600 ring-[3px] ring-white"
                  >
                    {item.name[0]}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-slate-500 font-bold">4.9 من 5 · تقييم مجمّع</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-6 -right-2 w-20 h-20 text-gold-200/50 -scale-x-100" />
            <div className="relative rounded-[2rem] bg-navy-950 noise overflow-hidden shadow-premium-lg">
              <div className="absolute inset-0 bg-grid-dark opacity-60" />
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gold-500/10 blur-[70px]" />
              <div className="relative p-8 md:p-12 min-h-[340px] flex flex-col">
                <div className="flex-1" key={index}>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                    "{t.text}"
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span className="flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-gold-grad text-navy-950 font-black text-lg">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="font-extrabold text-white">{t.name}</p>
                      <p className="text-sm text-gold-300/80">{t.role}</p>
                    </div>
                  </footer>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === index ? "w-8 bg-gold-grad" : "w-2.5 bg-white/15 hover:bg-white/30"
                        }`}
                        aria-label={`رأي ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => go(-1)}
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08] text-gold-300 hover:bg-gold-grad hover:text-navy-950 transition-all duration-300"
                      aria-label="التالي"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08] text-gold-300 hover:bg-gold-grad hover:text-navy-950 transition-all duration-300"
                      aria-label="السابق"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
