import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-50 lg:hidden"
        >
          <div className="bg-navy-950/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-3">
            <Link
              to="/booking"
              className="flex items-center justify-between w-full rounded-2xl bg-gold-grad px-5 py-3.5 text-navy-950 font-extrabold text-sm shadow-gold"
            >
              <span className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5" />
                احجز موعدك الآن
              </span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
