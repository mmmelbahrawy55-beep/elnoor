import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-70px" }}
    transition={{ duration: 0.85, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const RevealX = ({ children, delay = 0, x = 56, className = "", once = true }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once, margin: "-70px" }}
    transition={{ duration: 0.85, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const ClipReveal = ({ children, delay = 0, className = "", once = true }) => (
  <div className={className} style={{ overflow: "hidden" }}>
    <motion.div
      initial={{ y: "110%" }}
      whileInView={{ y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  </div>
);

export const Stagger = ({ children, className = "", gap = 0.09, y = 36 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
  >
    {children.map((c, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y, scale: 0.97 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: EASE } },
        }}
      >
        {c}
      </motion.div>
    ))}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", y = 36 }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y, scale: 0.97 },
      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: EASE } },
    }}
  >
    {children}
  </motion.div>
);
