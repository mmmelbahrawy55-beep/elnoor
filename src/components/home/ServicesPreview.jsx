import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplet,
  Activity,
  Stethoscope,
  HeartPulse,
  Leaf,
  ShieldPlus,
  Dna,
  ArrowLeft,
  ArrowUpLeft,
} from "lucide-react";
import { TEST_CATEGORIES } from "../../data/tests";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion";

const icons = { Droplet, Activity, Stethoscope, HeartPulse, Leaf, ShieldPlus, Dna };

export default function ServicesPreview() {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-light" />

      <div className="relative container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="01"
            eyebrow="خدماتنا"
            title="تحاليل شاملة في أقسام متخصصة"
            desc="أكثر من 250 تحليلاً مقسمة على 7 أقسام رئيسية، بأسعار شفافة."
            align="right"
          />
          <Link
            to="/services"
            className="group hidden md:flex items-center gap-2 shrink-0 rounded-xl ring-1 ring-navy-900/10 bg-white px-5 py-3 font-bold text-sm text-navy-900 hover:ring-gold-400/40 hover:-translate-y-0.5 transition-all"
          >
            كل التحاليل
            <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TEST_CATEGORIES.slice(0, 7).map((cat, i) => {
            const Icon = icons[cat.icon] || Droplet;
            return (
              <Reveal key={cat.id} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-3xl p-6 ring-1 ring-navy-900/[0.04] shadow-premium hover:shadow-premium-lg transition-all duration-500 h-full"
                >
                  <span className="absolute top-0 right-0 left-0 h-1 bg-gold-grad scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-t-3xl" />
                  <div className="flex items-center justify-between">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-50 text-gold-600 group-hover:bg-gold-grad group-hover:text-navy-950 transition-all duration-400 shadow-sm group-hover:shadow-gold">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="font-serif italic text-3xl text-navy-900/[0.04] group-hover:text-gold-500/10 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-navy-900">{cat.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">
                    {cat.tests.length} تحاليل
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-black text-sm text-gold-600">
                      من {Math.min(...cat.tests.map((t) => t.price))} ج.م
                    </span>
                    <span className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-gold-grad group-hover:text-navy-950 transition-all duration-300">
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}

          {/* CTA card */}
          <Reveal delay={0.4}>
            <motion.div
              whileHover={{ y: -6 }}
              className="relative rounded-3xl bg-navy-950 p-6 overflow-hidden h-full flex flex-col"
            >
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gold-500/10 blur-[50px]" />
              <span className="self-start chip bg-gold-grad text-navy-950 !py-1 !px-3 !text-[11px]">
                <Activity className="w-3 h-3" />
                جديد
              </span>
              <h3 className="mt-4 text-base font-extrabold text-white leading-snug">
                تشخيص ذكي حسب أعراضك
              </h3>
              <p className="mt-2 text-sm text-slate-300/70 leading-relaxed">
                لا تعرف التحليل المناسب؟ فريقنا الطبي يساعدك.
              </p>
              <Link
                to="/booking"
                className="mt-auto pt-4 group flex items-center gap-2 text-gold-300 text-sm font-extrabold"
              >
                استشرنا مجاناً
                <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </Reveal>
        </div>

        <Link
          to="/services"
          className="md:hidden mt-8 btn-primary w-full py-3.5 text-navy-950"
        >
          كل التحاليل
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
