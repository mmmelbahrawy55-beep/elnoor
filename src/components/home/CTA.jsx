import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, Phone, ArrowLeft, Shield, Clock, Sparkles } from "lucide-react";
import { Reveal } from "../motion";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="relative rounded-[2rem] bg-navy-950 overflow-hidden px-8 py-14 md:px-14">
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-gold-500/8 blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-brand-500/8 blur-[100px]" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-right">
              <div className="max-w-xl">
                <span className="chip bg-gold-grad text-navy-950 !py-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  دقة نثق بها
                </span>
                <h2 className="mt-5 text-2xl md:text-4xl font-black text-white leading-[1.2]">
                  جاهز لخطوتك الأولى نحو
                  <span className="text-gold-shine"> صحة أوضح؟</span>
                </h2>
                <p className="mt-4 text-base text-slate-300/70">
                  احجز موعدك الآن — سيتجاوب معك فريقنا خلال دقائق.
                </p>

                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                  {[
                    [Shield, "آمن"],
                    [Clock, "تأكيد فوري"],
                    [Sparkles, "نتائج في الموعد"],
                  ].map(([Icon, text]) => (
                    <div key={text} className="flex items-center gap-1.5 text-xs text-slate-400/70">
                      <Icon className="w-3.5 h-3.5 text-gold-400/60" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/booking" className="group btn-primary px-7 py-3.5 text-navy-950">
                  <CalendarCheck className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  احجز موعدك الآن
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Link>
                <a
                  href="tel:01000001111"
                  className="btn btn-ghost px-7 py-3.5"
                >
                  <Phone className="w-4 h-4 text-gold-400/60" />
                  0100 000 1111
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
