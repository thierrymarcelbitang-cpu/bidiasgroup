"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, Shield, Users, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

const ICONS = [Truck, Shield, Users, MapPin];

export default function FeaturesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { lang } = useLang();
  const features = i18n[lang].features;

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#081A34",
        borderTop: "2px solid rgba(255,157,0,0.28)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={title}
                className="group relative flex items-start gap-5 px-7 py-10 cursor-default transition-all duration-300"
                style={{
                  borderRight: i < features.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ backgroundColor: "rgba(255,157,0,0.03)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, #FF9D00, transparent)" }}
                />
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-[1.06]"
                  style={{
                    background: "rgba(255,157,0,0.1)",
                    border: "1px solid rgba(255,157,0,0.22)",
                    borderRadius: "8px",
                  }}
                >
                  <Icon size={20} style={{ color: "#FF9D00" }} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-bold mb-2"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      color: "rgba(255,255,255,0.92)",
                      fontFamily: "var(--font-manrope), sans-serif",
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#B6C2D3",
                      fontFamily: "var(--font-inter), sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
