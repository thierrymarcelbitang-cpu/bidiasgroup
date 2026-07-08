"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function WhyDriveSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = i18n[lang].whyDrive;

  return (
    <section id="why-us" ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: "#071A36" }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text + checklist */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-7 flex-shrink-0" style={{ background: "#FF9D00" }} />
              <p
                className="font-bold tracking-[0.32em] uppercase"
                style={{ fontSize: "11px", color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {t.eyebrow}
              </p>
            </div>

            <h2
              className="font-black text-white leading-[1.08]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "16px",
              }}
            >
              {t.heading1}
              <br />
              {t.heading2}
            </h2>

            <p
              className="leading-relaxed"
              style={{
                color: "#B6C2D3",
                fontSize: "15px",
                fontFamily: "var(--font-inter), sans-serif",
                maxWidth: "440px",
                marginBottom: "36px",
                lineHeight: 1.7,
              }}
            >
              {t.body}
            </p>

            <div className="space-y-0">
              {t.checklist.map((row, i) => (
                <motion.div
                  key={row.item}
                  className="flex items-start gap-4 py-4"
                  style={{
                    borderBottom: i < t.checklist.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.22 + i * 0.07, duration: 0.4 }}
                >
                  <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(255,157,0,0.12)",
                      border: "1px solid rgba(255,157,0,0.28)",
                      borderRadius: "50%",
                    }}
                  >
                    <Check size={11} style={{ color: "#FF9D00" }} strokeWidth={3} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-white leading-snug"
                      style={{ fontSize: "14px", fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {row.item}
                    </p>
                    <p
                      style={{
                        fontSize: "12.5px",
                        color: "#B6C2D3",
                        fontFamily: "var(--font-inter), sans-serif",
                        marginTop: "2px",
                      }}
                    >
                      {row.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo + overlay card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div
              className="relative overflow-hidden group"
              style={{ borderRadius: "10px", aspectRatio: "4/3" }}
            >
              <Image
                fill
                src="/images/driver-banner.jpg"
                alt="Bidias Group LLC professional driver"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 680px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,8,20,0.88) 0%, rgba(2,8,20,0.2) 50%, transparent 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255,157,0,0.05) 0%, transparent 60%)",
                }}
              />
            </div>

            <motion.div
              className="absolute bottom-5 left-5 right-5 p-6"
              style={{
                background: "rgba(2,8,20,0.94)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "9px",
                borderTop: "2px solid #FF9D00",
              }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p
                className="font-black text-white mb-1.5 tracking-wide"
                style={{
                  fontSize: "13px",
                  fontFamily: "var(--font-manrope), sans-serif",
                  letterSpacing: "0.06em",
                }}
              >
                {t.cardTitle}
              </p>
              <p
                className="mb-5"
                style={{
                  fontSize: "12.5px",
                  color: "#B6C2D3",
                  fontFamily: "var(--font-inter), sans-serif",
                  lineHeight: 1.6,
                }}
              >
                {t.cardBody}
              </p>
              <a
                href="https://intelliapp.driverapponline.com/c/3909622"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-[12px] text-white transition-all hover:opacity-90 active:scale-[0.97]"
                style={{
                  background: "#FF9D00",
                  borderRadius: "5px",
                  fontFamily: "var(--font-manrope), sans-serif",
                  letterSpacing: "0.03em",
                  boxShadow: "0 2px 16px rgba(255,157,0,0.3)",
                }}
              >
                {t.cardCta}
                <ExternalLink size={12} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
