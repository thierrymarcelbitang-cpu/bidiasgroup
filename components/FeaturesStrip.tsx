"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, Shield, Users, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

const ICONS = [Truck, Shield, Users, MapPin];

// Responsive divider logic per item (always 4 items):
// mobile  1-col: bottom borders on 0–2 to separate stacked rows
// sm      2-col: right border on col-0 items (0, 2); keep bottom on row-0 items (0, 1)
// lg      4-col: right border on 0–2; no bottom borders
const BORDER_CLASSES = [
  "border-b sm:border-r lg:border-b-0",        // 0: bottom→sm keeps bottom+adds right→lg removes bottom
  "border-b lg:border-b-0 lg:border-r",        // 1: bottom→lg removes bottom+adds right
  "border-b sm:border-b-0 sm:border-r",        // 2: bottom→sm removes bottom+adds right
  "",                                           // 3: last item, never a border
] as const;

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
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={title}
                className={`group relative flex items-start gap-5 px-7 py-10 cursor-default transition-all duration-300 ${BORDER_CLASSES[i]}`}
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
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
