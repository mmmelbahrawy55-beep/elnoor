import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  CalendarDays,
  Clock3,
  MapPin,
  Trash2,
  Search,
  Info,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { getBranchById, generateSlots, dayNameAr } from "../data/branches";
import { useBooking } from "../context/BookingContext";
import { Reveal } from "../components/motion";

export default function MyBookings() {
  const { myBookings, cancelBooking } = useBooking();
  const [query, setQuery] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  const list = myBookings.filter((b) => {
    const q = query.trim();
    if (!q) return true;
    return b.id.toLowerCase().includes(q.toLowerCase()) || b.phone.includes(q);
  });

  return (
    <main className="min-h-screen bg-cream relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-0 inset-x-0 h-[260px] bg-navy-grad rounded-b-[3rem]" />
      <div className="absolute top-0 inset-x-0 h-[260px] bg-grid-dark opacity-50 rounded-b-[3rem]" />

      <div className="relative container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="chip bg-gold-grad text-navy-950">
            <CalendarCheck className="w-4 h-4" />
            مواعيدي المحفوظة
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-black text-white">إدارة مواعيدك</h1>
          <p className="mt-3 text-slate-300/80">
            جميع حجوزاتك المحفوظة على هذا الجهاز — ابحث برقم الحجز أو الهاتف.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث برقم الحجز أو الهاتف..."
              className="w-full rounded-2xl bg-white ring-1 ring-navy-900/8 py-4 pl-5 pr-[3.25rem] font-bold shadow-card focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
            />
          </div>
        </Reveal>

        <div className="mt-10 space-y-5">
          <AnimatePresence mode="popLayout">
            {list.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 rounded-3xl bg-white ring-1 ring-navy-900/5 shadow-card"
              >
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-navy-900 text-gold-400">
                  <CalendarDays className="w-10 h-10" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-navy-900">
                  {query ? "لا توجد نتائج مطابقة" : "لا توجد مواعيد محفوظة بعد"}
                </h3>
                <p className="mt-2 text-slate-500">حجز موعدك الأول في أقل من دقيقة.</p>
                <Link to="/booking" className="btn-primary mt-7 px-8 py-4 text-navy-950">
                  <CalendarCheck className="w-5 h-5" />
                  اذهب للحجز
                </Link>
              </motion.div>
            )}

            {list.map((b) => {
              const branch = getBranchById(b.branchId);
              const slot = generateSlots(branch, new Date(b.date)).find((s) => s.hour === b.hour);
              return (
                <motion.div
                  key={b.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  className="relative rounded-3xl bg-white ring-1 ring-navy-900/5 shadow-card p-6 md:p-7 overflow-hidden"
                >
                  <span className="absolute top-0 right-0 left-0 h-1 bg-brand-grad opacity-40" />
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-black text-gold-500 tracking-wider" dir="ltr">
                          {b.id}
                        </span>
                        <span className="rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 ring-1 ring-emerald-100">
                          مؤكد
                        </span>
                        {b.tests.length > 0 && (
                          <span className="rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold px-3 py-1">
                            {b.tests.length} تحاليل
                          </span>
                        )}
                      </div>
                      <p className="mt-3.5 font-extrabold text-navy-900 text-lg">{b.name}</p>
                      <div className="mt-3.5 grid sm:grid-cols-3 gap-2.5 text-sm text-slate-600">
                        <span className="flex items-center gap-2.5">
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cream text-gold-500 shrink-0">
                            <MapPin className="w-4 h-4" />
                          </span>
                          {branch.name}
                        </span>
                        <span className="flex items-center gap-2.5">
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cream text-gold-500 shrink-0">
                            <CalendarDays className="w-4 h-4" />
                          </span>
                          {dayNameAr(b.date)} {new Date(b.date).toLocaleDateString("ar-EG")}
                        </span>
                        <span className="flex items-center gap-2.5">
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cream text-gold-500 shrink-0">
                            <Clock3 className="w-4 h-4" />
                          </span>
                          <span dir="ltr">{slot?.time}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-3 md:items-end shrink-0">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <Info className="w-3.5 h-3.5" />
                        هاتف: <span dir="ltr">{b.phone}</span>
                      </span>
                      <button
                        onClick={() => setConfirmId(confirmId === b.id ? null : b.id)}
                        className={`flex items-center justify-center gap-2 rounded-xl font-bold px-5 py-2.5 transition-colors ${
                          confirmId === b.id
                            ? "bg-navy-900 text-gold-400"
                            : "bg-red-50 text-red-500 hover:bg-red-100"
                        }`}
                      >
                        <Trash2 className="w-4 h-4" />
                        {confirmId === b.id ? "تأكيد الإلغاء" : "إلغاء الموعد"}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {confirmId === b.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <div className="rounded-2xl bg-red-50 ring-1 ring-red-100 p-4 flex flex-wrap items-center justify-between gap-4">
                          <p className="flex items-center gap-2 text-sm font-bold text-red-600">
                            <AlertTriangle className="w-4.5 h-4.5" />
                            متأكد؟ لن يمكن التراجع عن الإلغاء.
                          </p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setConfirmId(null)}
                              className="rounded-xl ring-1 ring-navy-900/10 text-navy-900 text-sm font-extrabold px-4 py-2 hover:bg-white transition-colors"
                            >
                              تراجع
                            </button>
                            <button
                              onClick={() => {
                                cancelBooking(b.id);
                                setConfirmId(null);
                              }}
                              className="rounded-xl bg-red-500 text-white text-sm font-extrabold px-4 py-2 hover:bg-red-600 transition-colors"
                            >
                              نعم، ألغِ
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {list.length > 0 && (
          <p className="mt-10 text-center text-sm text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            تحفظ المواعيد على جهازك الحالي فقط
          </p>
        )}
      </div>
    </main>
  );
}
