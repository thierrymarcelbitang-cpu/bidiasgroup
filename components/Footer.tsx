"use client";
import Link from "next/link";
import { Phone, Mail, Globe, ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <rect width="38" height="38" rx="7" fill="#FF9D00" />
        <path d="M19 8 L28 30 L10 30 Z" fill="rgba(0,0,0,0.18)" />
        <path d="M19 8 L30 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M19 8 L8 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 24 L27 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 11 L19 7 L22.5 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <div>
        <p className="leading-none font-black text-white tracking-[0.05em]" style={{ fontSize: "13px", fontFamily: "var(--font-manrope), sans-serif" }}>
          BIDIAS
        </p>
        <p className="leading-none font-semibold tracking-[0.18em] mt-[2px]" style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope), sans-serif" }}>
          GROUP LLC
        </p>
      </div>
    </div>
  );
}

const hoverOn = (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)");
const hoverOff = (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)");

export default function Footer() {
  const { lang } = useLang();
  const t = i18n[lang].footer;

  return (
    <footer style={{ backgroundColor: "#020814", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1 — Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p
              className="mt-5 mb-6 leading-relaxed"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif", maxWidth: "220px", lineHeight: 1.7 }}
            >
              {t.tagline}
            </p>

            <div className="space-y-2.5">
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-manrope), sans-serif", fontWeight: 600 }}>
                Andre Bidias
              </p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter), sans-serif", marginTop: "-6px" }}>
                Administrator
              </p>

              <a href="tel:2678081450" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                <Phone size={12} style={{ color: "#FF9D00", flexShrink: 0 }} strokeWidth={1.8} />
                <span className="transition-colors duration-150" style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  (267) 808-1450
                </span>
              </a>

              <a href="mailto:admin@bidiasgroup.com" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                <Mail size={12} style={{ color: "#FF9D00", flexShrink: 0 }} strokeWidth={1.8} />
                <span className="transition-colors duration-150" style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  admin@bidiasgroup.com
                </span>
              </a>

              <a href="mailto:bidiaskab@yahoo.com" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                <Mail size={12} style={{ color: "#FF9D00", flexShrink: 0 }} strokeWidth={1.8} />
                <span className="transition-colors duration-150" style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  bidiaskab@yahoo.com
                </span>
              </a>

              <a href="https://www.bidiasgroup.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                <Globe size={12} style={{ color: "#FF9D00", flexShrink: 0 }} strokeWidth={1.8} />
                <span className="transition-colors duration-150" style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  www.bidiasgroup.com
                </span>
              </a>
            </div>
          </div>

          {/* Nav link columns */}
          {t.cols.map(({ heading, links }) => (
            <div key={heading}>
              <p
                className="font-bold tracking-[0.22em] uppercase mb-5"
                style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {heading}
              </p>
              <ul className="space-y-3.5">
                {links.map((link) => {
                  const ext = "external" in link && link.external;
                  return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={ext ? "_blank" : undefined}
                      rel={ext ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 transition-colors duration-150"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.42)",
                        fontFamily: "var(--font-inter), sans-serif",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
                    >
                      {link.label}
                      {ext && <ExternalLink size={10} style={{ opacity: 0.55, flexShrink: 0 }} />}
                    </a>
                  </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-4 px-6">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-inter), sans-serif" }}>
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center flex-wrap gap-x-5 gap-y-2">
            {t.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-inter), sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.18)")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
