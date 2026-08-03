import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ light = false, size = "md" }) {
  return (
    <Link to="/" className="group relative flex items-center gap-3">
      <span className="relative">
        <motion.span
          whileHover={{ rotate: 8 }}
          className={`relative flex items-center justify-center rounded-2xl bg-gold-grad text-navy-950 shadow-gold transition-all duration-300 ${
            size === "lg" ? "w-12 h-12" : "w-10 h-10"
          }`}
        >
          <FlaskConical className={size === "lg" ? "w-6 h-6" : "w-5 h-5"} strokeWidth={2.3} />
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
        </motion.span>
        <span className="absolute -inset-1 rounded-2xl bg-gold-grad opacity-0 blur-lg group-hover:opacity-30 transition-opacity duration-500" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display font-black ${
            size === "lg" ? "text-[22px]" : "text-lg"
          } ${light ? "text-white" : "text-navy-900"}`}
        >
          معمل النور
        </span>
        <span
          className={`mt-1 flex items-center gap-1 text-[10px] font-semibold tracking-wide ${
            light ? "text-gold-300/80" : "text-gold-600"
          }`}
        >
          <Sparkles className="w-3 h-3" />
          للتحاليل الطبية
        </span>
      </span>
    </Link>
  );
}
