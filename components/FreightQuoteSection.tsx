"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type QuoteForm = {
  originCity: string; originZip: string;
  destCity: string; destZip: string;
  freightType: string; weight: string;
  pickupDate: string; deliveryDate: string;
  name: string; email: string; phone: string; notes: string;
};

const INIT: QuoteForm = {
  originCity: "", originZip: "", destCity: "", destZip: "",
  freightType: "", weight: "", pickupDate: "", deliveryDate: "",
  name: "", email: "", phone: "", notes: "",
};

const OPT = { background: "#080C14" };

export default function FreightQuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<QuoteForm>(INIT);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
  const SEC = {
    fontSize: "11px" as const,
    fontWeight: "700" as const,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.22)",
    fontFamily: "var(--font-manrope), sans-serif",
    marginBottom: "12px",
  };

  return (
    <section id="freight-quote" ref={ref} className="py-28" style={{ backgroundColor: "#0D1526" }}>
      <div className="max-w-3xl mx-auto px-6">
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
              Shippers &amp; Brokers
            </span>
          </div>
          <h2
            className="font-extrabold text-white"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Request a Freight Quote
          </h2>
          <p
            className="text-[14px] mt-3"
            style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Fill out the form below and we&apos;ll respond within one business day.
          </p>
        </motion.div>

        <motion.div
          className="p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "6px",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.55 }}
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
                Quote Request Received
              </h3>
              <p
                className="text-[14px] mb-3 max-w-xs"
                style={{ color: "rgba(255,255,255,0.42)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                We&apos;ll follow up within one business day. For urgent freight, call us directly:
              </p>
              <a
                href="tel:+12678081450"
                className="font-bold text-white text-lg transition-opacity hover:opacity-80"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                (267) 808-1450
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Origin */}
              <div>
                <p style={SEC}>Origin</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={L} style={LS}>City</label>
                    <input name="originCity" type="text" placeholder="Philadelphia" className={F} style={FS} value={form.originCity} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                  </div>
                  <div>
                    <label className={L} style={LS}>ZIP</label>
                    <input name="originZip" type="text" placeholder="19103" maxLength={10} className={F} style={FS} value={form.originZip} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div>
                <p style={SEC}>Destination</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={L} style={LS}>City</label>
                    <input name="destCity" type="text" placeholder="New York" className={F} style={FS} value={form.destCity} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                  </div>
                  <div>
                    <label className={L} style={LS}>ZIP</label>
                    <input name="destZip" type="text" placeholder="10001" maxLength={10} className={F} style={FS} value={form.destZip} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>Freight Type</label>
                  <select name="freightType" className={F} style={{ ...FS, cursor: "pointer" }} value={form.freightType} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required>
                    <option value="" style={OPT}>Select Type</option>
                    <option value="dry-van" style={OPT}>Dry Van</option>
                    <option value="reefer" style={OPT}>Refrigerated</option>
                    <option value="flatbed" style={OPT}>Flatbed</option>
                    <option value="ltl" style={OPT}>LTL</option>
                    <option value="other" style={OPT}>Other</option>
                  </select>
                </div>
                <div>
                  <label className={L} style={LS}>Est. Weight (lbs)</label>
                  <input name="weight" type="text" placeholder="40,000" className={F} style={FS} value={form.weight} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>Pickup Date</label>
                  <input name="pickupDate" type="date" className={F} style={{ ...FS, colorScheme: "dark" }} value={form.pickupDate} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
                <div>
                  <label className={L} style={LS}>Delivery Date</label>
                  <input name="deliveryDate" type="date" className={F} style={{ ...FS, colorScheme: "dark" }} value={form.deliveryDate} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={L} style={LS}>Your Name</label>
                  <input name="name" type="text" placeholder="Full Name" className={F} style={FS} value={form.name} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
                <div>
                  <label className={L} style={LS}>Phone</label>
                  <input name="phone" type="tel" placeholder="(555) 000-0000" className={F} style={FS} value={form.phone} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
                </div>
              </div>

              <div>
                <label className={L} style={LS}>Email</label>
                <input name="email" type="email" placeholder="you@company.com" className={F} style={FS} value={form.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required />
              </div>

              <div>
                <label className={L} style={LS}>
                  Additional Notes{" "}
                  <span className="normal-case font-normal tracking-normal text-[11px]" style={{ color: "rgba(255,255,255,0.22)" }}>
                    (Optional)
                  </span>
                </label>
                <textarea name="notes" rows={3} placeholder="Special requirements, hazmat, temperature needs..." className={`${F} resize-none`} style={FS} value={form.notes} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 text-white font-bold text-[13px] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #C97A0A, #E8920E)",
                  borderRadius: "5px",
                  letterSpacing: "0.07em",
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                Request Quote
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
