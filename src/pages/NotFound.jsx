import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="pt-40 pb-24 min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-6">
        <motion.span
          animate={{ rotate: [0, 12, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-navy-900 text-brand-300 shadow-lift"
        >
          <Compass className="w-12 h-12" />
        </motion.span>
        <h1 className="mt-7 text-6xl font-black text-brand-600">404</h1>
        <p className="mt-3 text-xl font-extrabold text-navy-900">الصفحة غير موجودة</p>
        <p className="mt-2 text-slate-500">ربما انتقلت الصفحة أو أن الرابط غير صحيح.</p>
        <Link to="/" className="btn-primary mt-8 px-8 py-4 text-navy-950">
          العودة للرئيسية
          <ArrowLeft className="w-4.5 h-4.5" />
        </Link>
      </div>
    </main>
  );
}
