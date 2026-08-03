import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Droplet,
  Activity,
  Stethoscope,
  HeartPulse,
  Leaf,
  ShieldPlus,
  Dna,
  Clock3,
  CalendarCheck,
  Search,
  Check,
  ArrowUpLeft,
} from "lucide-react";
import { TEST_CATEGORIES } from "../data/tests";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import CTA from "../components/home/CTA";

const icons = { Droplet, Activity, Stethoscope, HeartPulse, Leaf, ShieldPlus, Dna };

export default function Services() {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");

  const cats = TEST_CATEGORIES.filter((c) => activeCat === "all" || c.id === activeCat);
  const filtered = cats
    .map((c) => ({ ...c, tests: c.tests.filter((t) => t.name.includes(search)) }))
    .filter((c) => c.tests.length > 0);

  const total = TEST_CATEGORIES.flatMap((c) => c.tests).length;

  return (
    <main className="min-h-screen bg-cream relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="relative container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="chip bg-gold-grad text-navy-950">
            <Search className="w-4 h-4" />
            دليل التحاليل والأسعار
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-black text-navy-900">
            كل تحاليلك في مكان واحد
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            أكثر من {total} تحليلاً موزعة على 7 أقسام — بأسعار شفافة وبدون مفاجآت.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن تحليل… مثال: سكر تراكمي"
              className="w-full rounded-2xl bg-white ring-1 ring-navy-900/8 py-4 pl-5 pr-[3.25rem] font-bold shadow-card focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {[{ id: "all", name: "الكل" }, ...TEST_CATEGORIES].map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                activeCat === c.id
                  ? "bg-gold-grad text-navy-950 shadow-gold"
                  : "bg-white ring-1 ring-navy-900/8 text-slate-600 hover:ring-gold-400/50"
              }`}
            >
              {c.name}
            </button>
          ))}
        </Reveal>

        <Stagger className="mt-12 space-y-10">
          {filtered.map((cat, ci) => {
            const Icon = icons[cat.icon] || Droplet;
            return (
              <StaggerItem key={cat.id}>
                <div className="rounded-[2rem] bg-white ring-1 ring-navy-900/5 shadow-card overflow-hidden">
                  <div className="flex items-center gap-5 px-7 py-5 bg-navy-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-dark opacity-60" />
                    <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-brand-500/15 blur-[50px]" />
                    <span className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-grad text-navy-950 shadow-gold">
                      <Icon className="w-6.5 h-6.5" />
                    </span>
                    <div className="relative">
                      <h2 className="text-white font-extrabold text-xl">{cat.name}</h2>
                      <p className="text-slate-400 text-xs font-bold mt-0.5">
                        {cat.tests.length} تحليل · النتيجة حسب الوقت المحدد
                      </p>
                    </div>
                    <span className="relative mr-auto font-serif italic text-5xl text-white/10">
                      {String(ci + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {cat.tests.map((t) => (
                      <div
                        key={t.name}
                        className="flex items-center justify-between gap-4 px-7 py-[18px] hover:bg-cream/60 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                            <Check className="w-4 h-4" strokeWidth={3} />
                          </span>
                          <div>
                            <p className="font-extrabold text-navy-900">{t.name}</p>
                            <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                              <Clock3 className="w-3 h-3" />
                              النتيجة خلال {t.time}
                            </p>
                          </div>
                        </div>
                        <span className="font-black text-navy-900 text-lg whitespace-nowrap">
                          {t.price}
                          <span className="text-sm text-slate-400 font-bold"> ج.م</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-lg font-bold text-slate-500">لا توجد نتائج مطابقة لبحثك «{search}»</p>
            <Link to="/booking" className="btn-primary mt-6 px-8 py-4 text-navy-950">
              <CalendarCheck className="w-5 h-5" />
              استشرنا لتحليل آخر
            </Link>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Link to="/booking" className="btn-dark group px-8 py-4">
            ابدأ حجزك الآن مع اختيار التحاليل
            <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <CTA />
      </div>
    </main>
  );
}
