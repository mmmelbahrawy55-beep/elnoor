import React from "react";
import { motion } from "framer-motion";
import { Reveal, ClipReveal, EASE } from "./motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  desc,
  light = false,
  align = "center",
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <Reveal y={24}>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          {index && (
            <span
              className={`font-serif italic text-2xl ${
                light ? "text-gold-300/80" : "text-gold-500/80"
              }`}
            >
              {index}
            </span>
          )}
          <span className={`h-px w-10 ${light ? "bg-gold-400/40" : "bg-gold-400/30"}`} />
          <span
            className={`text-sm font-bold tracking-wide ${
              light ? "text-gold-300/80" : "text-gold-600"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <ClipReveal delay={0.08}>
        <h2
          className={`mt-5 text-3xl md:text-[2.9rem] font-black leading-[1.15] ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      </ClipReveal>
      {desc && (
        <Reveal delay={0.18} y={24}>
          <p
            className={`mt-5 text-base md:text-lg leading-relaxed ${
              light ? "text-slate-300/70" : "text-slate-500"
            }`}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export const AnimatedCounter = ({ value, suffix = "", decimal = false }) => {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(0);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { margin: "-40px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    const target = decimal ? value * 10 : value;
    const dur = 1700;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(decimal ? (target * eased) / 10 : Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimal]);

  return (
    <span ref={ref} dir="ltr" className="tabular-nums">
      {display.toLocaleString("en-US", decimal ? { maximumFractionDigits: 1 } : {})}
      {suffix}
    </span>
  );
};

export const GoldDivider = ({ className = "" }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: EASE }}
    className={`h-px w-24 bg-gold-grad ${className}`}
  />
);
