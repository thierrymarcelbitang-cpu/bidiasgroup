"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

const INTELLIAPP_URL = "https://intelliapp.driverapponline.com/c/3909622";


type FormState = {
  firstName: string; lastName: string; email: string; phone: string;
  state: string; cdlStatus: string; experience: string;
  ownsTruck: string; routeType: string; message: string; consent: boolean;
};

const INIT: FormState = {
  firstName: "", lastName: "", email: "", phone: "",
  state: "", cdlStatus: "", experience: "",
  ownsTruck: "", routeType: "", message: "", consent: false,
};

const OPT = { background: "#0D1526" };

export default function ApplicationForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>(INIT);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const F = "w-full px-4 py-3 text-[13px] outline-none transition-all duration-150 bg-transparent border";
  const FS = {
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: "5px",
    color: "#fff",
    fontFamily: "var(--font-inter), sans-serif",
  } as React.CSSProperties;
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(232,146,14,0.5)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
  };
  const L = "block text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5";
  const LS = { color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-manrope), sans-serif" };

  return (
    <section id="apply" ref={ref} className="py-28" style={{ backgroundColor: "#080C14" }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-8 flex-shrink-0" style={{ background: "#E8920E" }} />
            <span
              className="text-[11px] font-semibold tracking-[0.3em] uppercase"
              style={{ color: "#E8920E", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Join Our Team
            </span>
          </div>
          <h2
            className="font-extrabold text-white"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Apply Now
          </h2>
          <p
            className="text-[14px] mt-3"
            style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Choose your preferred application method below.
          </p>
        </motion.div>

        {/* IntelliApp banner */}
        <motion.div
          className="mb-7 overflow-hidden"
          style={{ border: "1px solid rgba(232,146,14,0.22)", borderRadius: "6px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div
            className="px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ background: "rgba(13,21,38,0.9)" }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck size={13} style={{ color: "#E8920E" }} />
                <span
                  className="text-[11px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "#E8920E", fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Recommended
                </span>
              </div>
              <p
                className="text-white font-bold mb-1"
                style={{ fontSize: "15px", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Apply Through IntelliApp
              </p>
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                Secure, mobile-friendly CDL application portal. Complete your full application,
                driving history, and required documents in one place.
              </p>
            </div>
            <a
              href={INTELLIAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-[13px] whitespace-nowrap transition-all hover:scale-[1.02] active:scale-[0.97] flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #C97A0A, #E8920E)",
                borderRadius: "5px",
                fontFamily: "var(--font-manrope), sans-serif",
              }}
            >
              Apply to Drive
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          <span
            className="text-[11px] font-medium tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Or send us a note
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* Form card */}
        <motion.div
          className="p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "6px",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center py-14 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center mb-5"
                style={{
                  background: "rgba(232,146,14,0.1)",
                  borderRadius: "50%",
                  border: "1px solid rgba(232,146,14,0.25)",
                }}
              >
                <CheckCircle2 size={26} style={{ color: "#E8920E" }} strokeWidth={2} />
              </div>
              <h3
                className="text-2xl font-extrabold text-white mb-2"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Message Received
              </h3>
              <p
                className="text-[14px] mb-6 max-w-xs"
                style={{ color: "rgba(255,255,255,0.42)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Our recruiting team will contact you within 24 business hours.
              </p>
              <a
                href={INTELLIAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-[13px]"
                style={{
                  background: "linear-gradient(135deg, #C97A0A, #E8920E)",
                  borderRadius: "5px",
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                Also apply via IntelliApp
                <ExternalLink size={13} />
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>First Name</label>
                  <input name="firstName" type="text" placeholder="John" className={F} style={FS} value={form.firstName} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
                <div>
                  <label className={L} style={LS}>Last Name</label>
                  <input name="lastName" type="text" placeholder="Smith" className={F} style={FS} value={form.lastName} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>Email Address</label>
                  <input name="email" type="email" placeholder="john@example.com" className={F} style={FS} value={form.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
                <div>
                  <label className={L} style={LS}>Phone Number</label>
                  <input name="phone" type="tel" placeholder="(555) 000-0000" className={F} style={FS} value={form.phone} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>CDL Status</label>
                  <select name="cdlStatus" className={F} style={{ ...FS, cursor: "pointer" }} value={form.cdlStatus} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required>
                    <option value="" style={OPT}>Select CDL Status</option>
                    <option value="class-a" style={OPT}>CDL Class A</option>
                    <option value="class-b" style={OPT}>CDL Class B</option>
                    <option value="in-training" style={OPT}>Currently in Training</option>
                    <option value="no-cdl" style={OPT}>No CDL Yet</option>
                  </select>
                </div>
                <div>
                  <label className={L} style={LS}>Years of Experience</label>
                  <select name="experience" className={F} style={{ ...FS, cursor: "pointer" }} value={form.experience} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required>
                    <option value="" style={OPT}>Select Experience</option>
                    <option value="0-1" style={OPT}>Less than 1 year</option>
                    <option value="1-2" style={OPT}>1–2 years</option>
                    <option value="2-5" style={OPT}>2–5 years</option>
                    <option value="5-10" style={OPT}>5–10 years</option>
                    <option value="10+" style={OPT}>10+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>Do You Own a Truck?</label>
                  <select name="ownsTruck" className={F} style={{ ...FS, cursor: "pointer" }} value={form.ownsTruck} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required>
                    <option value="" style={OPT}>Select Option</option>
                    <option value="yes" style={OPT}>Yes — Owner Operator</option>
                    <option value="no" style={OPT}>No — Company Driver</option>
                    <option value="lease" style={OPT}>Interested in Lease-to-Own</option>
                  </select>
                </div>
                <div>
                  <label className={L} style={LS}>Preferred Route Type</label>
                  <select name="routeType" className={F} style={{ ...FS, cursor: "pointer" }} value={form.routeType} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required>
                    <option value="" style={OPT}>Select Route Type</option>
                    <option value="otr" style={OPT}>OTR — Long Haul</option>
                    <option value="regional" style={OPT}>Regional</option>
                    <option value="local" style={OPT}>Local / City</option>
                    <option value="dedicated" style={OPT}>Dedicated Lane</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={L} style={LS}>
                  Message{" "}
                  <span className="normal-case font-normal tracking-normal text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                    (Optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about yourself or ask a question..."
                  className={`${F} resize-none`}
                  style={FS}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-4 h-4 cursor-pointer flex-shrink-0"
                  style={{ accentColor: "#E8920E" }}
                />
                <label
                  htmlFor="consent"
                  className="text-[12px] cursor-pointer select-none leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  I consent to Bidias Group LLC contacting me about driver and owner-operator
                  opportunities. I may opt out at any time.
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 text-white font-bold text-[13px] transition-all duration-200 hover:scale-[1.01] hover:shadow-xl active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #0B1F3A, #1A4FBE)",
                  borderRadius: "5px",
                  letterSpacing: "0.07em",
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                Send Message
                <Send size={14} strokeWidth={2} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
