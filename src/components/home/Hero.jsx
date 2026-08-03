import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  ArrowLeft,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { BRANCHES } from "../../data/branches";

const marqueeTests = [
  "صورة دم كاملة", "سكر تراكمي", "وظائف كبد وكلى", "فيتامين د",
  "هرمونات الغدة", "PCR", "الأنيميا الوراثية", "تجلط الدم",
  "مؤشرات الأورام", "الحساسية",
];

const demoSlots = [
  { t: "10:00 ص", free: 4 },
  { t: "11:00 ص", free: 1 },
  { t: "12:00 م", free: 0 },
  { t: "01:00 م", free: 6 },
];

function LiveWidget() {
  const [branchIdx, setBranchIdx] = useState(0);
  const [activeSlot, setActiveSlot] = useState(null);

  useEffect(() => {
    const t = setInterval(
      () => setActiveSlot((s) => (s === null ? 0 : (s + 1) % demoSlots.length)),
      3500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full max-w-[380px]">
      <div className="rounded-3xl bg-navy-950/90 backdrop-blur-2xl ring-1 ring-white/[0.08] overflow-hidden shadow-premium-lg">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-bold">الحجز المباشر</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-bold text-gold-400">
            <Zap className="w-3 h-3" />
            مباشر
          </span>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <p className="text-[11px] font-bold text-slate-400/50 mb-2 uppercase tracking-wider">الفرع</p>
            <div className="flex gap-2">
              {BRANCHES.map((b, i) => (
                <button key={b.id} onClick={() => setBranchIdx(i)}
                  className={`flex-1 rounded-xl px-3 py-2 text-center text-xs font-bold transition-all duration-300 ${
                    branchIdx === i ? "bg-gold-grad text-navy-950 shadow-gold" : "bg-white/[0.04] text-slate-400 hover:bg-white/[0.08]"
                  }`}>
                  {b.area}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400/50 mb-2 uppercase tracking-wider">اليوم</p>
            <div className="flex gap-2">
              {[{ d: "أحد", n: 5 }, { d: "اثنين", n: 6 }, { d: "ثلاثاء", n: 7 }, { d: "أربعاء", n: 8 }].map((day, i) => (
                <div key={i} className={`flex-1 rounded-xl py-2 text-center transition-all duration-300 ${
                  i === 1 ? "bg-gold-500/15 ring-1 ring-gold-400/30 text-gold-300" : "bg-white/[0.03] text-slate-500 hover:bg-white/[0.06]"
                }`}>
                  <span className="block text-[10px] font-bold opacity-70">{day.d}</span>
                  <span className="block text-sm font-black">{day.n}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400/50 mb-2 uppercase tracking-wider">الساعة</p>
            <div className="grid grid-cols-2 gap-2">
              {demoSlots.map((s, i) => {
                const active = activeSlot === i;
                const full = s.free === 0;
                return (
                  <div key={i} className={`rounded-xl px-3 py-2.5 flex items-center justify-between transition-all duration-400 ${
                    active && !full ? "bg-gold-grad text-navy-950 shadow-gold" : full ? "bg-white/[0.02] text-slate-600" : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
                  }`}>
                    <span className="text-xs font-extrabold" dir="ltr">{s.t}</span>
                    <span className={`text-[10px] font-bold ${full ? "text-red-400/60" : "text-emerald-300/70"}`}>
                      {full ? "ممتلئ" : `${s.free} متاح`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to="/booking" className="flex items-center justify-between rounded-2xl bg-gold-grad px-5 py-3.5 text-navy-950 font-extrabold text-sm shadow-gold hover:shadow-gold-lg transition-all duration-300">
            <span className="flex items-center gap-2">
              <CalendarCheck className="w-4 h-4" />
              تأكيد الحجز
            </span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <p className="text-center text-[11px] text-slate-500/50">حجز مجاني · إلغاء حتى 6 ساعات</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-0 right-[5%] w-[600px] h-[600px] rounded-full bg-gold-500/8 blur-[180px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-brand-600/10 blur-[160px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-500/5 blur-[200px]" />

      <div className="relative container-x py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="relative z-10 text-center lg:text-right">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-gold-500/10 backdrop-blur px-5 py-2 ring-1 ring-gold-500/20">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-sm font-bold text-gold-300">أهلاً بك في معمل النور</span>
            </div>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-[3.8rem] font-black text-white leading-[1.1] tracking-tight">
              صحتك تبدأ
              <br />
              <span className="text-gold-shine">من نتيجة دقيقة</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-300/70 leading-relaxed">
              ثلاثة فروع بأحدث الأجهزة العالمية ونظام حجز ذكي — اختر فرعك ويومك وساعتك في أقل من دقيقة.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/booking" className="btn-primary group px-8 py-3.5 text-navy-950">
                <CalendarCheck className="w-5 h-5" />
                احجز موعدك الآن
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link to="/services" className="btn btn-ghost px-8 py-3.5">
                استكشف التحاليل
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 flex-wrap justify-center lg:justify-start">
              <div className="flex -space-x-3 -space-x-reverse">
                {["أ", "س", "م", "ن"].map((c, i) => (
                  <span key={i} className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black bg-gradient-to-br from-gold-400 to-gold-600 ring-2 ring-navy-950">
                    {c}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-slate-400/70">
                  <span className="text-white font-extrabold">4.9/5</span> من 120,000+ عميل
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400/70">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                مرخّص من وزارة الصحة
              </div>
            </div>
          </div>

          {/* Widget */}
          <div className="flex justify-center lg:justify-end">
            <LiveWidget />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-t border-white/[0.04] bg-navy-950/60 backdrop-blur-xl">
        <div className="flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 items-center gap-6 animate-marquee">
            {[...marqueeTests, ...marqueeTests, ...marqueeTests].map((t, i) => (
              <span key={i} className="flex items-center gap-6 whitespace-nowrap">
                <span className="text-sm font-bold text-slate-400/40">{t}</span>
                <span className="w-1 h-1 rounded-full bg-gold-400/25" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
