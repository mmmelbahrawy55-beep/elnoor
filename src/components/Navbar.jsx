import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, CalendarCheck, Phone, ArrowLeft } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "الخدمات والأسعار" },
  { to: "/about", label: "عن المعمل" },
  { to: "/my-bookings", label: "مواعيدي" },
  { to: "/admin", label: "لوحة التحكم" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const onDark = location.pathname !== "/booking" && location.pathname !== "/my-bookings";

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 right-0 left-0 h-[3px] z-[60] origin-right bg-gold-grad"
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "container-x py-2.5 rounded-2xl glass-dark ring-1 ring-white/[0.06]"
              : "container-x"
          }`}
        >
          <Logo light={onDark} />

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl font-bold text-[15px] transition-colors ${
                    isActive
                      ? "text-gold-400"
                      : onDark
                      ? "text-slate-300/80 hover:text-white"
                      : "text-slate-500 hover:text-navy-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 right-5 left-5 h-[2px] rounded-full bg-gold-grad"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01000001111"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                onDark ? "text-slate-300/70 hover:text-gold-300" : "text-slate-500 hover:text-navy-900"
              }`}
            >
              <Phone className="w-4 h-4" />
              0100 000 1111
            </a>
            <Link
              to="/booking"
              className="btn-primary group px-6 py-3 text-navy-950"
            >
              <CalendarCheck className="w-4.5 h-4.5 transition-transform group-hover:scale-110" />
              احجز موعدك
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-xl ring-1 transition-colors ${
              onDark
                ? "glass-dark ring-white/10 text-white"
                : "bg-white ring-navy-900/10 text-navy-900"
            }`}
            aria-label="القائمة"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden container-x mt-2"
            >
              <div className="rounded-3xl bg-navy-950/95 backdrop-blur-2xl ring-1 ring-white/[0.06] px-6 py-5 shadow-premium-lg">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ x: -24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block px-4 py-3.5 rounded-xl font-bold ${
                          isActive ? "bg-gold-500/10 text-gold-300" : "text-slate-200 hover:bg-white/5"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="mt-3 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                  <Link
                    to="/booking"
                    className="btn-primary w-full py-4 text-navy-950"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    احجز موعدك الآن
                  </Link>
                  <a
                    href="tel:01000001111"
                    className="btn w-full py-3.5 ring-1 ring-white/15 text-white"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل بنا
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
