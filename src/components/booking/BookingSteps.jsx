import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, ArrowLeft } from "lucide-react";

export default function BookingSteps({
  step,
  onNext,
  onBack,
  children,
  canNext,
  nextLabel = "متابعة",
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="h-full flex flex-col"
      >
        {children}

        <div className="mt-10 flex items-center justify-between gap-4 pt-6 border-t border-navy-900/8">
          {onBack ? (
            <button
              onClick={onBack}
              className="btn px-6 py-3 ring-1 ring-navy-900/10 text-navy-900 hover:bg-slate-50"
            >
              <ArrowLeft className="w-4.5 h-4.5" />
              رجوع
            </button>
          ) : (
            <span />
          )}
          <button
            onClick={onNext}
            disabled={!canNext}
            className="btn-primary px-9 py-4 text-navy-950 group"
          >
            {nextLabel}
            <CalendarCheck className="w-4.5 h-4.5 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
