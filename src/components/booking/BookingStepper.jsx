import React from "react";
import { motion } from "framer-motion";

const steps = ["الفرع", "اليوم", "الساعة", "بياناتك"];

export default function BookingStepper({ current }) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-5">
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={s}>
            {i > 0 && (
              <motion.div
                animate={{ backgroundColor: done ? "#197ff0" : "rgba(255,255,255,0.15)" }}
                className="h-[2px] rounded-full w-8 md:w-20"
              />
            )}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{
                  scale: active ? 1.12 : 1,
                  backgroundColor: done || active ? "#197ff0" : "rgba(255,255,255,0.1)",
                  color: done || active ? "#fff" : "rgba(255,255,255,0.45)",
                  boxShadow: active ? "0 10px 30px -8px rgba(25,127,240,0.7)" : "none",
                }}
                transition={{ duration: 0.35 }}
                className={`flex items-center justify-center w-11 h-11 rounded-2xl font-black text-sm ring-1 ring-white/15 ${
                  active ? "ring-transparent" : ""
                }`}
              >
                {done ? <CheckMark /> : i + 1}
              </motion.div>
              <span
                className={`text-xs md:text-sm font-bold transition-colors ${
                  active ? "text-brand-200" : done ? "text-brand-300/80" : "text-white/40"
                }`}
              >
                {s}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function CheckMark() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
