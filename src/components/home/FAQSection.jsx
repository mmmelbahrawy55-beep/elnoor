import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { FAQ } from "../../data/site";
import SectionHeading from "../SectionHeading";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="relative container-x grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div>
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="06"
              eyebrow="الأسئلة الشائعة"
              title="إجابات وضوحة قبل أن تسأل"
              desc="جمعنا أكثر الأسئلة التي تصلنا من عملائنا — وإن لم تجد سؤالك، فريقنا جاهز للرد."
              align="right"
            />
            <div className="mt-8 rounded-3xl bg-navy-950 noise p-7 hidden lg:block relative">
              <div className="absolute inset-0 bg-grid-dark opacity-60 -z-10" />
              <p className="flex items-center gap-2.5 text-gold-300 font-extrabold">
                <HelpCircle className="w-5 h-5" />
                لم تجد إجابتك؟
              </p>
              <p className="mt-2 text-sm text-slate-300/70 leading-relaxed">
                تواصل معنا على الرقم وسيرة عليك أحد المختصين خلال دقائق في مواعيد العمل.
              </p>
              <a
                href="tel:01000001111"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gold-grad text-navy-950 font-extrabold px-5 py-2.5 hover:-translate-y-0.5 transition-all duration-300 shadow-gold"
              >
                <Phone className="w-4.5 h-4.5" />
                0100 000 1111
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3.5">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-400 overflow-hidden ${
                  isOpen
                    ? "bg-white ring-1 ring-gold-400/30 shadow-premium"
                    : "bg-white/60 ring-1 ring-navy-900/[0.04] hover:ring-gold-400/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span className="flex items-center gap-3.5 font-extrabold text-navy-900">
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-gold-500 text-navy-950 shadow-gold" : "bg-gold-50 text-gold-600"
                      }`}
                    >
                      <HelpCircle className="w-4.5 h-4.5" />
                    </span>
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-400 ${
                      isOpen ? "bg-navy-900 text-gold-300 rotate-180" : "bg-slate-100 text-slate-400 rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-4.5 h-4.5" />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-6 pr-[4.5rem] text-slate-600 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
