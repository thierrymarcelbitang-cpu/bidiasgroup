"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, FileText, UserCheck, ClipboardList, ExternalLink } from "lucide-react";

const INTELLIAPP_URL = "https://intelliapp.driverapponline.com/c/3909622";

const steps = [
  {
    Icon: ClipboardList,
    step: "01",
    title: "Personal & Contact Info",
    desc: "Name, address, CDL license details, and employment history — all captured securely.",
  },
  {
    Icon: FileText,
    step: "02",
    title: "CDL & Driving Records",
    desc: "CDL class, endorsements, violations, and accident history through the secure portal.",
  },
  {
    Icon: ShieldCheck,
    step: "03",
    title: "Safety & Screening",
    desc: "Required safety disclosures and screening authorizations completed in-app.",
  },
  {
    Icon: UserCheck,
    step: "04",
    title: "Review & Submit",
    desc: "Our team reviews your application and follows up personally within 24 hours.",
  },
];

export default function IntelliAppSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="intelliapp" ref={ref} className="py-28" style={{ backgroundColor: "#080C14" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 flex-shrink-0" style={{ background: "#E8920E" }} />
              <span
                className="text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: "#E8920E", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Driver Applications
              </span>
            </div>

            <h2
              className="font-extrabold text-white leading-[1.06] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Apply Through
              <br />
              IntelliApp
            </h2>

            <p
              className="leading-relaxed mb-4"
              style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: "15px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Bidias Group uses IntelliApp to securely collect driver applications, CDL information,
              driving history, safety records, and required screening details.
            </p>
            <p
              className="leading-relaxed mb-10"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "14px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              The process is straightforward, mobile-friendly, and fully encrypted.
              Our team reviews each submission and follows up personally within 24 hours.
            </p>

            <a
              href={INTELLIAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-white font-bold text-[13px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #C97A0A, #E8920E)",
                borderRadius: "5px",
                boxShadow: "0 0 32px rgba(232,146,14,0.2)",
                letterSpacing: "0.04em",
                fontFamily: "var(--font-manrope), sans-serif",
              }}
            >
              Apply to Drive
              <ExternalLink size={14} />
            </a>

            <p
              className="mt-4 text-[11px] tracking-wide"
              style={{
                color: "rgba(255,255,255,0.22)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Opens IntelliApp by DriverAppOnline — secure &amp; encrypted
            </p>
          </motion.div>

          {/* Right — step cards */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {steps.map(({ Icon, step, title, desc }, i) => (
              <motion.div
                key={title}
                className="flex gap-4 p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "6px",
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(232,146,14,0.08)",
                    border: "1px solid rgba(232,146,14,0.16)",
                    borderRadius: "5px",
                  }}
                >
                  <Icon size={17} style={{ color: "#E8920E" }} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] flex-shrink-0"
                      style={{
                        color: "rgba(255,255,255,0.18)",
                        fontFamily: "var(--font-manrope), sans-serif",
                      }}
                    >
                      {step}
                    </span>
                    <h4
                      className="font-bold text-white"
                      style={{ fontSize: "14px", fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {title}
                    </h4>
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.36)",
                      fontSize: "13px",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
