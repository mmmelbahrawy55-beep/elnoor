import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!hasScrolled) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white p-5 shadow-premium-lg ring-1 ring-navy-900/5 w-72"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-extrabold text-navy-900">تواصل معنا</h4>
              <button
                onClick={() => setShow(false)}
                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              أرسل لنا رسالة على واتساب أو اتصل بنا مباشرة
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/201000001111?text=مرحباً، أريد الاستفسار عن خدمات المعمل"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-emerald-500 text-white px-4 py-3 font-bold hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                راسلنا على واتساب
              </a>
              <a
                href="tel:01000001111"
                className="flex items-center gap-3 rounded-xl bg-navy-900 text-white px-4 py-3 font-bold hover:bg-navy-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShow((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
