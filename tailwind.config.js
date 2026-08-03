/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060d1f",
          900: "#0a1a3a",
          850: "#0d2248",
          800: "#112c5c",
          700: "#1a3f7a",
        },
        brand: {
          50: "#f0f6ff",
          100: "#e0edfe",
          200: "#b9dafe",
          300: "#82bffd",
          400: "#449dfa",
          500: "#197ff0",
          600: "#0c62d2",
          700: "#0b4faa",
          800: "#0d438a",
          900: "#0f3972",
          950: "#08244d",
        },
        gold: {
          50: "#fefcf3",
          100: "#fdf6e3",
          200: "#f7e7bb",
          300: "#efd489",
          400: "#e3b95e",
          500: "#d09c3c",
          600: "#b07f2b",
          700: "#8c6422",
        },
        cream: "#f4f6fa",
        ink: "#0c1c33",
      },
      fontFamily: {
        display: ["Alexandria", "sans-serif"],
        body: ["IBM Plex Sans Arabic", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 30px 70px -28px rgba(6, 13, 31, 0.4)",
        card: "0 1px 2px rgba(6,13,31,0.06), 0 12px 32px -14px rgba(6,13,31,0.18)",
        lift: "0 2px 6px rgba(6,13,31,0.06), 0 26px 50px -20px rgba(6,13,31,0.3)",
        glow: "0 12px 34px -10px rgba(25, 127, 240, 0.5)",
        gold: "0 12px 34px -10px rgba(208, 156, 60, 0.4)",
        "gold-lg": "0 20px 50px -12px rgba(208, 156, 60, 0.35)",
        "premium": "0 4px 6px rgba(0,0,0,0.04), 0 10px 15px -3px rgba(0,0,0,0.07), 0 20px 40px -10px rgba(0,0,0,0.12)",
        "premium-lg": "0 10px 25px -5px rgba(0,0,0,0.08), 0 20px 50px -12px rgba(0,0,0,0.15), 0 40px 80px -20px rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#f7e7bb 0%,#d09c3c 40%,#e3b95e 70%,#f7e7bb 100%)",
        "gold-shimmer": "linear-gradient(110deg,#efd489 25%,#fdf6e3 45%,#d09c3c 65%,#f7e7bb 85%)",
        "brand-grad": "linear-gradient(135deg,#197ff0 0%,#0c62d2 50%,#0b4faa 100%)",
        "brand-soft": "linear-gradient(135deg,#e0edfe 0%,#f0f6ff 100%)",
        "navy-grad": "radial-gradient(1200px 600px at 20% -10%,#1a3f7a 0%,#0a1a3a 50%,#060d1f 100%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        pulse_ring: {
          "0%": { boxShadow: "0 0 0 0 rgba(208,156,60,0.35)" },
          "70%": { boxShadow: "0 0 0 16px rgba(208,156,60,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(208,156,60,0)" },
        },
        aurora: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.15)" },
          "66%": { transform: "translate(-30px,20px) scale(0.9)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
        marquee: "marquee 32s linear infinite",
        pulse_ring: "pulse_ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        aurora: "aurora 14s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
