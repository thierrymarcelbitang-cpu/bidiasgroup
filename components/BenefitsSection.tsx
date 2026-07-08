"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Medical, dental & vision — day 1",
  "401(k) with company match",
  "Paid orientation & training",
  "Late-model trucks (2022–2025)",
  "Rider & pet-friendly policy",
  "Fuel card & ELD provided",
  "Weekly direct deposit",
  "Guaranteed home time",
  "Referral bonus program",
  "Safety & performance bonuses",
  "Dedicated fleet options available",
];

export default function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" ref={ref} className="py-28 relative overflow-hidden" style={{ backgroundColor: "#F5F7FA" }}>
      {/* Background glow */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,79,190,0.08), transparent 70%)" }}
      />
      <div
        className="absolute -left-20 bottom-20 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.3em] uppercase"
              style={{ color: "#1A4FBE" }}
            >
              Driver Benefits
            </span>
            <h2
              className="font-bold mt-2 mb-5"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                color: "#0B1F3A",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Everything You Need<br />to Thrive
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm max-w-sm">
              Great drivers deserve great benefits. We built a package designed to
              keep you healthy, financially secure, and home with your family.
            </p>

            <div>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                style={{ background: "linear-gradient(135deg, #1A4FBE, #2563EB)" }}
              >
                Apply &amp; Get Benefits
              </a>
            </div>
          </motion.div>

          {/* Right — checklist */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            {benefits.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border shadow-sm"
                style={{ borderColor: "#EDF1F9" }}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.18 + i * 0.045, duration: 0.38 }}
              >
                <CheckCircle2 size={16} style={{ color: "#1A4FBE", flexShrink: 0 }} strokeWidth={2} />
                <span className="text-sm font-medium" style={{ color: "#0B1F3A" }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
