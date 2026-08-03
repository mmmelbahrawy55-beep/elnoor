import React from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Clock3, ClipboardCheck, Smartphone } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion";

const steps = [
  { Icon: MapPin, title: "اختر فرعك", desc: "ثلاثة فروع في القاهرة والجيزة." },
  { Icon: CalendarDays, title: "حدد اليوم", desc: "الأيام المتاحة لكل فرع." },
  { Icon: Clock3, title: "اختر الساعة", desc: "مواعيد حية تعرض المتبقي." },
  { Icon: ClipboardCheck, title: "أكمل بياناتك", desc: "اسمك ورقم هاتفك." },
  { Icon: Smartphone, title: "تأكيد فوري", desc: "رسالة برقم الحجز فوراً." },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="relative container-x">
        <SectionHeading
          index="02"
          eyebrow="كيف تعمل"
          title="حجزك في أقل من دقيقة"
          desc="نظام صُمم ليختصر عليك الوقت."
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[38px] right-[12%] left-[12%] h-px bg-gradient-to-l from-transparent via-gold-300/30 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white ring-1 ring-navy-900/[0.06] shadow-premium group-hover:ring-gold-400/30 group-hover:shadow-gold transition-all duration-500"
                      >
                        <s.Icon className="w-6 h-6 text-navy-900 group-hover:text-gold-600 transition-colors duration-300" />
                        <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-gold-grad text-navy-950 text-[10px] font-black shadow-gold">
                          {i + 1}
                        </span>
                      </motion.div>
                    </div>
                    <h3 className="mt-4 text-sm font-extrabold text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
