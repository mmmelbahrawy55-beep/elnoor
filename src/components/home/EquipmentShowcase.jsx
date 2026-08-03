import React from "react";
import { BadgeCheck, Sparkles, ArrowUpLeft } from "lucide-react";
import { EQUIPMENT, ACCREDITATIONS } from "../../data/site";
import { ISOLogo, CAPLogo, RIQASLogo, EGACLogo } from "../AccreditationLogos";
import SectionHeading from "../SectionHeading";

const logoMap = {
  iso: ISOLogo,
  cap: CAPLogo,
  quality: RIQASLogo,
  egac: EGACLogo,
};

export default function EquipmentShowcase() {
  return (
    <section className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 noise" />
      <div className="absolute top-20 -right-32 w-[480px] h-[480px] rounded-full bg-gold-500/8 blur-[130px] animate-pulse" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-brand-500/8 blur-[130px] animate-pulse" />

      <div className="relative container-x">
        <SectionHeading
          light
          index="03"
          eyebrow="أجهزةنا"
          title="تكنولوجيا عالمية في خدمة دقتك"
          desc="نستثمر باستمرار في أحدث الأجهزة العالمية من Roche و Sysmex لضمان أدق نتيجة في أسرع وقت."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT.map((eq, i) => (
            <article
              key={eq.id}
              className="group relative rounded-3xl overflow-hidden ring-1 ring-white/[0.06] bg-white/[0.04] hover:-translate-y-2.5 transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={eq.image}
                  alt={eq.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-navy-950/60 backdrop-blur px-3 py-1.5 text-xs font-bold text-gold-300 ring-1 ring-gold-400/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  {eq.tag}
                </span>
                <span className="absolute bottom-4 right-4 font-serif italic text-4xl text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-white">{eq.name}</h3>
                <p className="mt-2 text-sm text-slate-400/70 leading-relaxed">{eq.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300/80">
                  <BadgeCheck className="w-4 h-4" />
                  معايرة أسبوعية بمعايير دولية
                </span>
              </div>
              <span className="absolute bottom-0 right-0 left-0 h-[3px] bg-gold-grad scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ACCREDITATIONS.map((a) => {
            const Logo = logoMap[a.id];
            return (
              <div
                key={a.id}
                className="group flex items-center gap-3.5 rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.06] px-5 py-4 hover:bg-white/[0.08] transition-all duration-300"
              >
                {Logo ? (
                  <Logo className="w-14 h-14 shrink-0" />
                ) : (
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 ring-1 ring-gold-400/15 group-hover:scale-110 transition-transform duration-300">
                    <BadgeCheck className="w-6 h-6" />
                  </span>
                )}
                <div>
                  <p className="text-white font-extrabold">{a.name}</p>
                  <p className="text-xs text-slate-400/60">{a.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="/about" className="group flex items-center gap-2 text-gold-400 font-extrabold hover:text-gold-300 transition-colors duration-300">
            المزيد عن أجهزتنا وجودتنا
            <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
