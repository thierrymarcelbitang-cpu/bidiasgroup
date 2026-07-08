"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, ExternalLink, MapPin, Calendar, Mail, Phone, AlignLeft } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function QuoteAndApplySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const t = i18n[lang].quote;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    origin: "", destination: "", freightType: "",
    pickupDate: "", deliveryDate: "", email: "", phone: "", details: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "13px",
    fontFamily: "var(--font-inter), sans-serif",
    padding: "10px 12px 10px 36px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const inputBasePlain: React.CSSProperties = { ...inputBase, paddingLeft: "12px" };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.28)",
    fontFamily: "var(--font-manrope), sans-serif",
    marginBottom: "6px",
  };

  return (
    <section
      id="freight-quote"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#071A36" }}
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* LEFT — Freight Quote Form */}
          <motion.div
            className="p-7"
            style={{
              background: "#020814",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
            }}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <p
              className="font-bold uppercase tracking-[0.2em] mb-1"
              style={{ fontSize: "11px", color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {t.leftEyebrow}
            </p>
            <p
              className="mb-6"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              {t.leftSub}
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(255,157,0,0.1)",
                    border: "2px solid rgba(255,157,0,0.3)",
                    borderRadius: "50%",
                  }}
                >
                  <Check size={26} style={{ color: "#FF9D00" }} strokeWidth={2.5} />
                </div>
                <h3 className="font-black text-white mb-2" style={{ fontSize: "20px", fontFamily: "var(--font-manrope), sans-serif" }}>
                  {t.successTitle}
                </h3>
                <p style={{ fontSize: "14px", color: "#B6C2D3", fontFamily: "var(--font-inter), sans-serif", lineHeight: 1.65, maxWidth: "300px", marginBottom: "24px" }}>
                  {t.successBody}{" "}
                  <a href="tel:2678081450" style={{ color: "#FF9D00", textDecoration: "none", fontWeight: 600 }}>
                    (267) 808-1450
                  </a>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter), sans-serif", background: "none", border: "none", cursor: "pointer" }}
                >
                  {t.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={labelStyle}>{t.originLabel}</label>
                    <div style={{ position: "relative" }}>
                      <MapPin size={13} style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <input name="origin" type="text" value={form.origin} onChange={handleChange}
                        placeholder={t.originPlaceholder} required style={inputBase}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>{t.destLabel}</label>
                    <div style={{ position: "relative" }}>
                      <MapPin size={13} style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <input name="destination" type="text" value={form.destination} onChange={handleChange}
                        placeholder={t.destPlaceholder} required style={inputBase}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={labelStyle}>{t.freightTypeLabel}</label>
                    <select name="freightType" value={form.freightType} onChange={handleChange} required
                      style={{ ...inputBasePlain, appearance: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
                      <option value="" disabled>{t.freightTypePlaceholder}</option>
                      {t.freightTypes.map((ft) => (
                        <option key={ft} value={ft} style={{ background: "#071A36" }}>{ft}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>{t.pickupLabel}</label>
                    <div style={{ position: "relative" }}>
                      <Calendar size={13} style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange}
                        style={{ ...inputBase, colorScheme: "dark" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={labelStyle}>{t.deliveryLabel}</label>
                    <div style={{ position: "relative" }}>
                      <Calendar size={13} style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange}
                        style={{ ...inputBase, colorScheme: "dark" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>{t.emailLabel}</label>
                    <div style={{ position: "relative" }}>
                      <Mail size={13} style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder={t.emailPlaceholder} required style={inputBase}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={labelStyle}>{t.phoneLabel}</label>
                    <div style={{ position: "relative" }}>
                      <Phone size={13} style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder={t.phonePlaceholder} style={inputBase}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>{t.detailsLabel}</label>
                    <div style={{ position: "relative" }}>
                      <AlignLeft size={13} style={{ position: "absolute", left: "11px", top: "11px", color: "rgba(255,255,255,0.25)", pointerEvents: "none" }} />
                      <textarea name="details" value={form.details} onChange={handleChange} rows={3}
                        placeholder={t.detailsPlaceholder}
                        style={{ ...inputBase, resize: "none", paddingTop: "10px" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,157,0,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-bold text-white transition-all hover:opacity-92 active:scale-[0.98] inline-flex items-center justify-center gap-2 mt-1"
                  style={{
                    background: "#FF9D00",
                    borderRadius: "6px",
                    fontFamily: "var(--font-manrope), sans-serif",
                    letterSpacing: "0.04em",
                    fontSize: "13px",
                    padding: "13px 24px",
                    boxShadow: "0 4px 20px rgba(255,157,0,0.26)",
                  }}
                >
                  {t.submitBtn}
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Driver Application */}
          <motion.div
            className="p-7 flex flex-col"
            style={{
              background: "#020814",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
            }}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p
              className="font-bold uppercase tracking-[0.2em] mb-1"
              style={{ fontSize: "11px", color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {t.rightEyebrow}
            </p>
            <p
              className="mb-7"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              {t.rightSub}
            </p>

            <div className="space-y-4 mb-8">
              {t.perks.map((perk, i) => (
                <motion.div
                  key={perk}
                  className="flex items-center gap-3.5"
                  initial={{ opacity: 0, x: 14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,157,0,0.1)",
                      border: "1px solid rgba(255,157,0,0.25)",
                      borderRadius: "50%",
                    }}
                  >
                    <Check size={13} style={{ color: "#FF9D00" }} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-inter), sans-serif" }}>
                    {perk}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-auto p-5 flex items-center justify-between gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
              }}
            >
              <div>
                <p className="font-bold text-white mb-0.5" style={{ fontSize: "14px", fontFamily: "var(--font-manrope), sans-serif" }}>
                  {t.applyTitle}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}>
                  {t.applyCaption}
                </p>
              </div>
              <a
                href="https://intelliapp.driverapponline.com/c/3909622"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 font-bold text-[13px] text-white transition-all hover:opacity-90 active:scale-[0.97]"
                style={{
                  background: "#FF9D00",
                  borderRadius: "6px",
                  fontFamily: "var(--font-manrope), sans-serif",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 20px rgba(255,157,0,0.28)",
                  whiteSpace: "nowrap",
                }}
              >
                {t.applyBtn}
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
