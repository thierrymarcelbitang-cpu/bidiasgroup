"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, ChevronDown, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

const BOOK_URL =
  "https://outlook.office.com/bookwithme/user/a688943dc9274a2fb59f4a98382c5c67@Bafiac.com/meetingtype/9vP_wVdAj0q4UaXXkFG9cw2?anonymous&ismsaljsauthenabled&ep=mcard";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect width="38" height="38" rx="7" fill="#FF9D00" />
        <path d="M19 8 L28 30 L10 30 Z" fill="rgba(0,0,0,0.18)" />
        <path d="M19 8 L30 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M19 8 L8 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 24 L27 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 11 L19 7 L22.5 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <div>
        <p className="leading-none font-black text-white tracking-[0.05em]" style={{ fontSize: "14px", fontFamily: "var(--font-manrope), sans-serif" }}>
          BIDIAS
        </p>
        <p className="leading-none font-semibold tracking-[0.18em] mt-[2px]" style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-manrope), sans-serif" }}>
          GROUP LLC
        </p>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = i18n[lang].nav;

  const NAV_LINKS = [
    { label: t.home,        href: "#",              dropdown: false },
    { label: t.drivers,     href: "#why-us",        dropdown: true  },
    { label: t.ownerOps,    href: "#why-us",        dropdown: false },
    { label: t.fleet,       href: "#fleet",         dropdown: false },
    { label: t.freightQuote,href: "#freight-quote", dropdown: false },
    { label: t.contact,     href: "#contact",       dropdown: false },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(2,8,20,0.97)" : "rgba(2,8,20,0.35)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-10 2xl:px-12 flex items-center justify-between h-[68px]">
        <Logo />

        {/* Desktop center links */}
        <div className="hidden lg:flex items-center gap-3">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="relative inline-flex items-center gap-1 px-5 py-2.5 text-[13px] font-medium transition-all duration-200 rounded"
              style={{
                color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.52)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = i === 0 ? "#ffffff" : "rgba(255,255,255,0.52)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {i === 0 && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full" style={{ background: "#FF9D00" }} />
              )}
              {link.label}
              {link.dropdown && <ChevronDown size={12} style={{ color: "rgba(255,255,255,0.4)" }} />}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* EN | FR toggle */}
          <div className="flex items-center gap-0">
            <button
              onClick={() => setLang("EN")}
              className="px-2 py-1 text-[12px] font-semibold transition-colors"
              style={{ color: lang === "EN" ? "#FF9D00" : "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              EN
            </button>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>|</span>
            <button
              onClick={() => setLang("FR")}
              className="px-2 py-1 text-[12px] font-semibold transition-colors"
              style={{ color: lang === "FR" ? "#FF9D00" : "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              FR
            </button>
          </div>
          <div className="h-5 w-px mx-1" style={{ background: "rgba(255,255,255,0.1)" }} />
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-semibold px-4 py-2 transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "5px",
              color: "rgba(255,255,255,0.68)",
              fontFamily: "var(--font-manrope), sans-serif",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.36)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.68)";
            }}
          >
            {t.bookAppt}
          </a>
          <a
            href="https://intelliapp.driverapponline.com/c/3909622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-bold text-white transition-all hover:opacity-90 active:scale-[0.97]"
            style={{
              background: "#FF9D00",
              borderRadius: "5px",
              fontFamily: "var(--font-manrope), sans-serif",
              letterSpacing: "0.03em",
              boxShadow: "0 0 20px rgba(255,157,0,0.24)",
            }}
          >
            {t.applyToDrive}
            <ExternalLink size={11} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ background: menuOpen ? "rgba(255,255,255,0.08)" : "transparent" }}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden"
            style={{
              backgroundColor: "rgba(2,8,20,0.99)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <div className="px-5 pt-2 pb-5 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-3.5 text-[14px] font-medium"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ChevronRight size={14} style={{ color: "rgba(255,255,255,0.2)" }} />
                </a>
              ))}

              {/* Mobile lang toggle */}
              <div className="flex items-center gap-1 pt-3 pb-1">
                {(["EN", "FR"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="px-3 py-1.5 text-[12px] font-bold rounded transition-all"
                    style={{
                      background: lang === l ? "rgba(255,157,0,0.15)" : "transparent",
                      border: `1px solid ${lang === l ? "rgba(255,157,0,0.4)" : "rgba(255,255,255,0.1)"}`,
                      color: lang === l ? "#FF9D00" : "rgba(255,255,255,0.4)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 text-[13px] font-semibold text-center"
                  style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "6px",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "var(--font-manrope), sans-serif",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.bookAppt}
                </a>
                <a
                  href="https://intelliapp.driverapponline.com/c/3909622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 text-[13px] font-bold text-white text-center"
                  style={{
                    background: "#FF9D00",
                    borderRadius: "6px",
                    fontFamily: "var(--font-manrope), sans-serif",
                    letterSpacing: "0.03em",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.applyToDrive}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
