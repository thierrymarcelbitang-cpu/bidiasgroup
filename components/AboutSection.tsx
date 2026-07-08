"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";

const ABOUT_PHOTO = "/images/driver-banner.jpg";

const pillars = [
  { Icon: Shield,  label: "DOT Compliant",   sub: "Fully licensed & insured" },
  { Icon: Users,   label: "CDL A & B",        sub: "All class drivers welcome" },
  { Icon: Award,   label: "Professional",     sub: "Safety-first operations" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 overflow-hidden" style={{ backgroundColor: "#F4F5F7" }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 flex-shrink-0" style={{ background: "#E8920E" }} />
              <span
                className="text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: "#E8920E", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Who We Are
              </span>
            </div>

            <h2
              className="font-extrabold leading-[1.06] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "#080C14",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              }}
            >
              Built on Trust,
              <br />
              Driven by Results
            </h2>

            <p
              className="leading-relaxed mb-5"
              style={{
                color: "#4A5568",
                fontSize: "15px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Bidias Group LLC is a licensed and insured trucking company serving the Philadelphia
              area and beyond. We partner with CDL Class A and B drivers who want consistent routes,
              late-model equipment, and a company that treats them as professionals.
            </p>
            <p
              className="leading-relaxed mb-10"
              style={{
                color: "#4A5568",
                fontSize: "15px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Under the leadership of Andre Bidias, Administrator, we maintain the highest standards
              of safety, reliability, and professionalism across every load we haul.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-3">
              {pillars.map(({ Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  className="p-4"
                  style={{
                    border: "1px solid rgba(8,12,20,0.09)",
                    borderRadius: "6px",
                    background: "#ffffff",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
                >
                  <Icon size={17} style={{ color: "#E8920E" }} strokeWidth={2} className="mb-2.5" />
                  <p
                    className="text-[12px] font-bold mb-0.5"
                    style={{ color: "#080C14", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{ color: "#718096", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "6px", aspectRatio: "4/3" }}
            >
              <Image
                fill
                src={ABOUT_PHOTO}
                alt="Bidias Group fleet on the road"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-5 -left-4 p-5"
              style={{
                background: "#080C14",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.45 }}
            >
              <p
                className="text-white font-bold text-[14px] mb-0.5"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Andre Bidias
              </p>
              <p
                className="text-[12px]"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Administrator, Bidias Group LLC
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
