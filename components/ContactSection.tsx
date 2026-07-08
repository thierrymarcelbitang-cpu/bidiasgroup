"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, Globe, ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

const contactItems = [
  { Icon: Phone, value: "(267) 808-1450",       href: "tel:2678081450" },
  { Icon: Mail,  value: "admin@bidiasgroup.com", href: "mailto:admin@bidiasgroup.com" },
  { Icon: Mail,  value: "bidiaskab@yahoo.com",   href: "mailto:bidiaskab@yahoo.com" },
  { Icon: Globe, value: "www.bidiasgroup.com",   href: "https://www.bidiasgroup.com" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = i18n[lang].contact;

  const col1 = t.links.slice(0, 4);
  const col2 = t.links.slice(4);

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28" style={{ backgroundColor: "#020814" }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Left — contact list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <p
              className="font-bold tracking-[0.28em] uppercase mb-3"
              style={{ fontSize: "11px", color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {t.eyebrow}
            </p>
            <h2
              className="font-black text-white leading-[1.12] mb-8"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              }}
            >
              {t.heading1}
              <br />
              {t.heading2}
            </h2>

            <div className="space-y-4">
              {contactItems.map(({ Icon, value, href }, i) => (
                <motion.a
                  key={value}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 group"
                  style={{ textDecoration: "none" }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,157,0,0.1)",
                      border: "1px solid rgba(255,157,0,0.2)",
                      borderRadius: "6px",
                    }}
                  >
                    <Icon size={14} style={{ color: "#FF9D00" }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-[13px] transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter), sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {value}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Center — Andre Bidias card */}
          <motion.div
            className="relative overflow-hidden"
            style={{ borderRadius: "12px", aspectRatio: "3/2" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Image
              fill
              src="/images/truck-hero.jpg"
              alt="Bidias Group LLC"
              className="object-cover"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 440px"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(2,8,20,0.97) 0%, rgba(2,8,20,0.55) 50%, rgba(2,8,20,0.15) 100%)",
              }}
            />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <p className="font-black text-white mb-0.5" style={{ fontSize: "20px", fontFamily: "var(--font-manrope), sans-serif" }}>
                Andre Bidias
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", fontFamily: "var(--font-inter), sans-serif", marginBottom: "2px" }}>
                Administrator
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.36)", fontFamily: "var(--font-inter), sans-serif" }}>
                Bidias Group LLC
              </p>
            </div>
          </motion.div>

          {/* Right — Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p
              className="font-bold tracking-[0.26em] uppercase mb-6"
              style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {t.quickLinks}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-0">
              {[col1, col2].map((col, ci) => (
                <ul key={ci} className="space-y-3.5">
                  {col.map((link) => {
                    const ext = "external" in link && link.external;
                    return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={ext ? "_blank" : undefined}
                        rel={ext ? "noopener noreferrer" : undefined}
                        className="text-[13px] transition-colors duration-150 inline-flex items-center gap-1"
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          fontFamily: "var(--font-inter), sans-serif",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.88)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                      >
                        {link.label}
                        {ext && <ExternalLink size={10} style={{ flexShrink: 0, opacity: 0.6 }} />}
                      </a>
                    </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
