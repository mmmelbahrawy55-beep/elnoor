import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesPreview from "../components/home/ServicesPreview";
import HowItWorks from "../components/home/HowItWorks";
import EquipmentShowcase from "../components/home/EquipmentShowcase";
import BranchesSection from "../components/home/BranchesSection";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import InsuranceStrip from "../components/home/InsuranceStrip";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <HowItWorks />
      <EquipmentShowcase />
      <BranchesSection />
      <Testimonials />
      <InsuranceStrip />
      <FAQSection />
      <CTA />
    </motion.main>
  );
}
