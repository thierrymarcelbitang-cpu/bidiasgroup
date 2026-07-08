"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

const PHOTOS = [
  "/images/fleet-dryvan.jpg",
  "/images/fleet-regional.jpg",
  "/images/fleet-longhaul.jpg",
];

export default function FleetSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = i18n[lang].fleet;

  return (
    <section id="fleet" ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: "#020814" }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">

        {/* Full-width section header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            {t.eyebrow}
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-16">
            <div>
              <h2
                className="font-black text-white leading-[1.08]"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  marginBottom: "14px",
                }}
              >
                {t.heading1}
                <br />
                {t.heading2}
              </h2>
              <p
                style={{
                  color: "#B6C2D3",
                  fontSize: "15px",
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
              >
                {t.desc}
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#freight-quote"
                className="inline-flex items-center gap-1.5 font-semibold text-[13px] group transition-colors"
                style={{ color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {t.cta}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3-column fleet cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.cards.map(({ label, desc }, i) => (
            <motion.div
              key={label}
              className="group overflow-hidden"
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  fill
                  src={PHOTOS[i]}
                  alt={label}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 33vw, 440px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(2,8,20,0.55) 0%, transparent 60%)",
                  }}
                />
              </div>

              <div className="p-6" style={{ backgroundColor: "#071A36" }}>
                <h3
                  className="font-bold text-white mb-1.5"
                  style={{ fontSize: "16px", fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {label}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "13px",
                    color: "#B6C2D3",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {desc}
                </p>
                <a
                  href="#freight-quote"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold group/link transition-opacity hover:opacity-80"
                  style={{ color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {t.learnMore}
                  <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
