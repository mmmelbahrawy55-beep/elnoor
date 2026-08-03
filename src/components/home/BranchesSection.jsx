import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowLeft, CalendarCheck, Sparkles, Navigation } from "lucide-react";
import { BRANCHES } from "../../data/branches";
import SectionHeading from "../SectionHeading";

export default function BranchesSection() {
  return (
    <section className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="relative container-x">
        <SectionHeading
          index="04"
          eyebrow="فرعينا"
          title="اختر الفرع الأقرب إليك"
          desc="ثلاثة فروع بمعايير معتمدة في قلب القاهرة والجيزة — كل فرع أيام عمل وساعات خاصّة."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {BRANCHES.map((b, i) => (
            <article
              key={b.id}
              className="group relative card-line flex flex-col h-full hover:-translate-y-2.5 transition-all duration-500"
            >
              <span className="absolute top-0 right-0 left-0 h-1 bg-gold-grad scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-t-2xl" />
              <div className="relative h-56 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <div className="absolute bottom-4 right-5 left-5 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-gold-300">{b.area}</p>
                    <h3 className="text-white font-extrabold text-xl mt-1">{b.name}</h3>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 backdrop-blur px-3 py-1.5 text-[11px] font-bold text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {b.days.length} أيام
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-50 text-gold-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div className="flex-1">
                      {b.address}
                      <a
                        href={b.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gold-600 font-bold mr-2 hover:text-gold-700 transition-colors"
                      >
                        <Navigation className="w-3 h-3" />
                        خريطة
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-50 text-gold-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span dir="ltr">{b.phone}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-50 text-gold-600 shrink-0">
                      <Clock className="w-4 h-4" />
                    </span>
                    {b.hours.open}:00 — {b.hours.close}:00
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {b.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-navy-900/[0.04] text-navy-900/70 text-[11px] font-bold px-2.5 py-1"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/booking?branch=${b.id}`}
                  className="mt-6 group/btn btn-dark w-full py-3.5 justify-between"
                >
                  <span className="flex items-center gap-2">
                    <CalendarCheck className="w-4.5 h-4.5" />
                    احجز في هذا الفرع
                  </span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center flex items-center justify-center gap-2 text-sm text-slate-500">
          <Sparkles className="w-4 h-4 text-gold-500" />
          تختلف أيام وساعات العمل من فرع لآخر — يُظهر ذلك تلقاءً أثناء الحجز.
        </p>
      </div>
    </section>
  );
}
