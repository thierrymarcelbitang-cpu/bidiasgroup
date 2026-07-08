"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Check, ArrowRight } from "lucide-react";

const INTELLIAPP_URL = "https://intelliapp.driverapponline.com/c/3909622";
const SECTION_PHOTO = "/images/driver-banner.jpg";

const perks = [
  "Competitive percentage-based pay",
  "No forced dispatch — choose your loads",
  "Flexible routes & scheduling",
  "Dedicated dispatch support",
  "Fuel card & toll assistance",
  "Consistent freight, steady income",
];

export default function OwnerOperatorsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="owner-operators"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0D1A2D" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(270deg, rgba(245,158,11,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "12px", aspectRatio: "4/3" }}
            >
              <Image
                fill
                src={SECTION_PHOTO}
                alt="Owner operator truck on the highway"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,10,20,0.65) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-5 right-5 p-4 text-center"
              style={{
                background: "#F59E0B",
                borderRadius: "8px",
                boxShadow: "0 8px 32px rgba(245,158,11,0.35)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.45, type: "spring", stiffness: 200 }}
            >
              <p
                className="font-extrabold text-white leading-none"
                style={{ fontSize: "22px", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                O/O
              </p>
              <p
                className="font-bold text-white mt-1"
                style={{ fontSize: "8px", letterSpacing: "0.18em", fontFamily: "var(--font-inter), sans-serif" }}
              >
                PROGRAM
              </p>
            </motion.div>

            {/* Bottom card */}
            <motion.div
              className="absolute bottom-5 left-5 right-5 p-4"
              style={{
                background: "rgba(5,10,20,0.92)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                borderLeft: "3px solid #F59E0B",
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.45 }}
            >
              <p
                className="font-extrabold text-white mb-0.5"
                style={{ fontSize: "14px", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Your Truck. Your Business.
              </p>
              <p
                style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Partner with Bidias Group and keep your independence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-7 flex-shrink-0" style={{ background: "#F59E0B" }} />
              <p
                className="font-bold tracking-[0.32em] uppercase"
                style={{ fontSize: "11px", color: "#F59E0B", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                OWNER OPERATORS
              </p>
            </div>

            <h2
              className="font-extrabold text-white leading-[1.08]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "16px",
              }}
            >
              Partner With Us.
              <br />
              Grow Your Business.
            </h2>

            <p
              className="leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.46)",
                fontSize: "15px",
                fontFamily: "var(--font-inter), sans-serif",
                maxWidth: "440px",
                marginBottom: "36px",
                lineHeight: 1.7,
              }}
            >
              Already own your rig? Lease on with Bidias Group and gain access to
              consistent freight, dedicated support, and the freedom to run your
              business on your terms — without the hassle.
            </p>

            {/* Perks */}
            <div className="space-y-0 mb-10">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk}
                  className="flex items-center gap-4 py-3.5"
                  style={{
                    borderBottom: i < perks.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.07, duration: 0.4 }}
                >
                  <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(245,158,11,0.12)",
                      border: "1px solid rgba(245,158,11,0.28)",
                      borderRadius: "50%",
                    }}
                  >
                    <Check size={11} style={{ color: "#F59E0B" }} strokeWidth={3} />
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.68)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    {perk}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={INTELLIAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[13px] text-white transition-all hover:opacity-90 active:scale-[0.97]"
                style={{
                  background: "#F59E0B",
                  borderRadius: "6px",
                  fontFamily: "var(--font-manrope), sans-serif",
                  letterSpacing: "0.03em",
                  boxShadow: "0 4px 24px rgba(245,158,11,0.28)",
                }}
              >
                Apply as Owner Operator
                <ExternalLink size={13} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-[13px] transition-all group"
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: "6px",
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.32)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                }}
              >
                Ask a Question
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
