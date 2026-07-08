"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function HeroSection() {
  const { lang } = useLang();
  const t = i18n[lang].hero;

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: "#020814" }}
    >
      {/* Truck image — right half */}
      <div className="absolute inset-0 lg:left-[42%]">
        <Image
          fill
          src="/images/truck-hero.jpg"
          alt="Bidias Group LLC — Professional Trucking"
          className="object-cover"
          style={{ objectPosition: "left center" }}
          priority
          quality={92}
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #020814 0%, #020814 18%, rgba(2,8,20,0.96) 35%, rgba(2,8,20,0.7) 55%, rgba(2,8,20,0.15) 80%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,8,20,0.6) 0%, transparent 20%, transparent 72%, rgba(2,8,20,0.9) 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 lg:hidden" style={{ background: "rgba(2,8,20,0.90)" }} />

      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(ellipse at left center, rgba(255,157,0,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="max-w-[520px]">
          <motion.div
            className="flex items-center gap-2 mb-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
          >
            <span
              className="font-bold tracking-[0.28em] uppercase"
              style={{ fontSize: "11px", color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {t.eyebrow}
            </span>
            <span style={{ color: "#FF9D00", fontSize: "13px" }}>—</span>
          </motion.div>

          <motion.h1
            className="font-black text-white"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "22px",
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.line1}
            <br />
            {t.line2}
            <br />
            {t.line3}
            <br />
            <span style={{ color: "#FF9D00", textShadow: "0 0 50px rgba(255,157,0,0.25)" }}>
              {t.line4}
            </span>
          </motion.h1>

          <motion.p
            style={{
              color: "#B6C2D3",
              fontSize: "clamp(0.85rem, 1.4vw, 0.97rem)",
              fontFamily: "var(--font-inter), sans-serif",
              maxWidth: "400px",
              marginBottom: "32px",
              lineHeight: 1.65,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.55 }}
          >
            {t.sub}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.5 }}
          >
            <a
              href="https://intelliapp.driverapponline.com/c/3909622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-[13px] text-white transition-all hover:opacity-90 active:scale-[0.97]"
              style={{
                background: "#FF9D00",
                borderRadius: "6px",
                letterSpacing: "0.03em",
                fontFamily: "var(--font-manrope), sans-serif",
                boxShadow: "0 4px 28px rgba(255,157,0,0.38)",
              }}
            >
              {t.cta1}
              <ExternalLink size={13} />
            </a>
            <a
              href="#freight-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-[13px] transition-all group"
              style={{
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "6px",
                color: "rgba(255,255,255,0.82)",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-inter), sans-serif",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.82)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {t.cta2}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
