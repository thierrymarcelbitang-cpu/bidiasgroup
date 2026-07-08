"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const panels = [
  {
    gradient: "linear-gradient(135deg, #0B1F3A 0%, #1A4FBE 100%)",
    icon: (
      <svg width="48" height="32" viewBox="0 0 120 56" fill="none">
        <rect x="0" y="8" width="74" height="32" rx="4" fill="rgba(255,255,255,0.85)" />
        <path d="M74 8h32a5 5 0 0 1 4 2l10 14v22H74V8z" fill="rgba(255,255,255,0.6)" />
        <path d="M80 12h22l8 16H80V12z" fill="rgba(255,255,255,0.25)" />
        <circle cx="18" cy="46" r="9" fill="rgba(255,255,255,0.3)" />
        <circle cx="54" cy="46" r="9" fill="rgba(255,255,255,0.3)" />
        <circle cx="98" cy="46" r="9" fill="rgba(255,255,255,0.3)" />
        <circle cx="112" cy="46" r="9" fill="rgba(255,255,255,0.3)" />
      </svg>
    ),
    label: "Modern Fleet",
    title: "2022–2025 Equipment",
    body: "Freightliner Cascadia, Kenworth T680, and Peterbilt 579 — all maintained to factory standards.",
    accentColor: "rgba(96,165,250,0.6)",
  },
  {
    gradient: "linear-gradient(135deg, #1A4FBE 0%, #3B82F6 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
        <path d="M32 6L58 20v24L32 58 6 44V20L32 6z" stroke="rgba(255,255,255,0.85)" strokeWidth="3" fill="none" />
        <circle cx="32" cy="32" r="10" fill="rgba(255,255,255,0.85)" />
        <path d="M32 22v10l7 7" stroke="#1A4FBE" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Driver-First Culture",
    title: "Your Success Is Ours",
    body: "Dedicated dispatchers, 24/7 support, and a leadership team that started behind the wheel.",
    accentColor: "rgba(147,197,253,0.6)",
  },
];

export default function SplitScrollSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const leftX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rightX = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const transforms = [
    { x: leftX, rotate: leftRotate },
    { x: rightX, rotate: rightRotate },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,79,190,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-14" style={{ opacity }}>
          <span
            className="text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#1A4FBE" }}
          >
            Built Different
          </span>
          <h2
            className="font-bold mt-2 mb-3"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              color: "#0B1F3A",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            The Bidias Standard
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Two things we never compromise on — the equipment you drive and the team behind you.
          </p>
        </motion.div>

        {/* Split panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.label}
              className="relative rounded-2xl overflow-hidden"
              style={{
                x: transforms[i].x,
                rotate: transforms[i].rotate,
                opacity,
                aspectRatio: "16/9",
              }}
            >
              {/* Background */}
              <div
                className="absolute inset-0"
                style={{ background: panel.gradient }}
              />

              {/* Mesh overlay */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,1) 29px, rgba(255,255,255,1) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(255,255,255,1) 29px, rgba(255,255,255,1) 30px)`,
                }}
              />

              {/* Glow accent */}
              <div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: panel.accentColor,
                  filter: "blur(60px)",
                  transform: "translate(30%, 30%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-8 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/15">
                  {panel.icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-1">
                    {panel.label}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {panel.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed max-w-xs mx-auto">
                    {panel.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
