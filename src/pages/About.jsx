import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  HeartHandshake,
  Award,
  Users,
  Microscope,
  ShieldCheck,
  Sparkles,
  Quote,
} from "lucide-react";
import { ACCREDITATIONS } from "../data/site";
import { Reveal, RevealX, Stagger, StaggerItem } from "../components/motion";
import SectionHeading from "../components/SectionHeading";
import CTA from "../components/home/CTA";

const values = [
  {
    Icon: Target,
    title: "الدقة أولاً",
    desc: "معايرة يومية للأجهزة ومشاركة مستمرة في برامج ضبط الجودة الخارجية العالمية.",
    num: "01",
  },
  {
    Icon: HeartHandshake,
    title: "رعاية تليق بك",
    desc: "فريق استقبال وتمريض مدرب يهتم بأدق التفاصيل ويجعل تجربتك مريحة.",
    num: "02",
  },
  {
    Icon: Award,
    title: "خبرة 25 عاماً",
    desc: "ثلاثة عقود من الثقة وخدمة أكثر من 120 ألف عميل في القاهرة والجيزة.",
    num: "03",
  },
  {
    Icon: Users,
    title: "فريق متخصص",
    desc: "40+ استشاري وأخصائي تحاليل طبية بتراخيص معتمدة من وزارة الصحة.",
    num: "04",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Intro */}
      <section className="relative overflow-hidden bg-navy-grad pb-20 pt-28">
        <div className="absolute inset-0 bg-grid-dark opacity-70" />
        <div className="absolute inset-0 noise" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-500/15 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/3 -right-24 w-[360px] h-[360px] rounded-full bg-brand-600/20 blur-[110px]"
        />

        <div className="relative container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <span className="chip bg-brand-grad text-white">
                <Sparkles className="w-4 h-4" />
                قصة معمل النور
              </span>
              <h1 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.4]">
                ربع قرن من
                <span className="block text-gold-shine mt-2">الدقة والثقة</span>
                <span className="block mt-2">في خدمة صحتكم</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-slate-300/90 leading-loose">
                بدأ معمل النور رحلته عام 2001 من معمل صغير في وسط البلد، واليوم أصبح أحد أكبر
                وأحدث معامل التحاليل الطبية بثلاثة فروع، يخدم أكثر من 120 ألف مريض سنوياً بجودة
                عالمية وبأسعار مناسبة.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-5 max-w-md">
              {[
                ["2001", "عام التأسيس"],
                ["3", "فروع"],
                ["120K+", "عميل سنوياً"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-center">
                  <p className="text-2xl md:text-3xl font-black text-gold" dir="ltr">{v}</p>
                  <p className="mt-2 text-xs text-slate-400 font-bold">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <RevealX delay={0.2} x={70}>
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 1.2, -1.2, 0] }}
                transition={{ duration: 14, repeat: Infinity }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-soft ring-1 ring-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&q=80"
                  alt="معمل النور"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl px-5 py-4 ring-1 ring-white/20">
                  <div>
                    <p className="text-white font-extrabold">منذ 2001</p>
                    <p className="text-xs text-brand-300 font-bold">ثلاثة فروع في القاهرة والجيزة</p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-brand-300" />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -left-6 rounded-2xl bg-brand-grad px-5 py-4 shadow-glow"
              >
                <p className="text-white font-black text-lg">25+</p>
                <p className="text-white/70 text-xs font-bold">سنة خبرة</p>
              </motion.div>
            </div>
          </RevealX>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            index="01"
            eyebrow="قيمنا"
            title="ما الذي يميزنا؟"
            desc="أربعة مبادئ نقف عليها منذ اليوم الأول ولا نتنازل عنها أبداً."
          />
          <Stagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full rounded-3xl bg-white ring-1 ring-navy-900/5 shadow-card p-8 overflow-hidden"
                >
                  <span className="absolute top-0 right-0 left-0 h-1 bg-gold-grad scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                  <span className="absolute top-6 left-6 font-serif italic text-5xl text-navy-900/5 group-hover:text-gold-500/20 transition-colors">
                    {v.num}
                  </span>
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-grad group-hover:text-navy-950 transition-all duration-300">
                    <v.Icon className="w-7 h-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-navy-900">{v.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Quality + accreditations */}
      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="chip bg-white text-gold-700 ring-1 ring-gold-500/30">
                <ShieldCheck className="w-4 h-4" />
                اعتماداتنا
              </span>
              <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-black text-navy-900 leading-[1.3]">
                جودة معتمدة دولياً على كل نتائجنا
              </h2>
              <p className="mt-5 text-base text-slate-500 leading-loose">
                نشارك في برامج ضبط الجودة الخارجية (RIQAS و CAP) ونطبق معيار ISO 15189، لضمان أن كل
                تقرير يصدر من معملنا يلبي أعلى المعايير العالمية.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid sm:grid-cols-2 gap-4">
              {ACCREDITATIONS.map((a) => (
                <StaggerItem key={a.id}>
                  <div className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-navy-900/5 p-5 hover:ring-gold-400/40 hover:-translate-y-0.5 transition-all shadow-card">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 text-gold-400 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </span>
                    <div>
                      <p className="font-extrabold text-navy-900">{a.name}</p>
                      <p className="text-xs text-slate-500">{a.label}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <RevealX x={-70} className="order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] bg-navy-950 noise overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-grid-dark opacity-60" />
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gold-500/20 blur-[70px]" />
              <div className="relative p-8 md:p-10">
                <Quote className="w-12 h-12 text-gold-400/60 -scale-x-100" />
                <p className="mt-6 text-xl md:text-2xl leading-relaxed text-white font-medium">
                  «في معمل النور، كل رقم يخرج من أجهزتنا يمر بمرحلة مراجعة من مختص، قبل أن يصل
                  إليك بشكله النهائي. هذه هي عقيدتنا.»
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-grad text-navy-950 font-black text-lg">
                    د
                  </span>
                  <div>
                    <p className="font-extrabold text-white">د. محمود النور</p>
                    <p className="text-sm text-gold-300/80">المدير الطبي لمجموعة معامل النور</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Microscope className="w-5 h-5 text-gold-500" />
              <p className="text-sm font-bold text-slate-500">
                6 أجهزة عالمية · Roche · Sysmex · PCR
              </p>
            </div>
          </RevealX>
        </div>
      </section>

      {/* CTA */}
      <div className="pb-20">
        <CTA />
      </div>
    </main>
  );
}
