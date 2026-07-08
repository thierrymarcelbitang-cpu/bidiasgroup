import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Reusable section card ─────────────────────────────── */
export function LegalSection({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <div
        className="rounded-xl p-7"
        style={{
          background: "rgba(7,26,54,0.55)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div
          className="flex items-start gap-3 mb-5 pb-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {number && (
            <span
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded text-[11px] font-bold mt-0.5"
              style={{
                background: "rgba(255,157,0,0.12)",
                border: "1px solid rgba(255,157,0,0.22)",
                color: "#FF9D00",
                fontFamily: "var(--font-manrope), sans-serif",
              }}
            >
              {number}
            </span>
          )}
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "15px",
              fontFamily: "var(--font-manrope), sans-serif",
              lineHeight: 1.4,
            }}
          >
            {title}
          </h2>
        </div>
        <div
          className="legal-content"
          style={{
            color: "#B6C2D3",
            fontSize: "14px",
            fontFamily: "var(--font-inter), sans-serif",
            lineHeight: 1.8,
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

/* ── Page wrapper ──────────────────────────────────────── */
interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#020814", minHeight: "100vh" }}>

        {/* Hero header */}
        <div
          className="pt-32 pb-12 px-6"
          style={{
            background: "linear-gradient(180deg, rgba(7,26,54,0.85) 0%, transparent 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-10 text-[12px] font-medium transition-colors text-white/30 hover:text-white/65"
              style={{ textDecoration: "none" }}
            >
              ← Back to Home
            </Link>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-5 h-px" style={{ background: "#FF9D00" }} />
              <p
                style={{
                  fontSize: "10px",
                  color: "#FF9D00",
                  letterSpacing: "0.32em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                {badge}
              </p>
            </div>

            <h1
              className="font-black text-white"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                marginBottom: "14px",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                color: "#B6C2D3",
                fontSize: "15px",
                fontFamily: "var(--font-inter), sans-serif",
                lineHeight: 1.65,
                maxWidth: "560px",
                marginBottom: "18px",
              }}
            >
              {subtitle}
            </p>

            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {children}

          {/* Contact strip */}
          <div
            className="mt-8 p-6 rounded-xl"
            style={{
              background: "rgba(255,157,0,0.04)",
              border: "1px solid rgba(255,157,0,0.14)",
            }}
          >
            <p
              className="font-semibold text-white mb-1"
              style={{ fontSize: "13px", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Questions about this document?
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#B6C2D3",
                fontFamily: "var(--font-inter), sans-serif",
                lineHeight: 1.6,
              }}
            >
              Contact Bidias Group LLC at{" "}
              <a href="mailto:admin@bidiasgroup.com" style={{ color: "#FF9D00", textDecoration: "none" }}>
                admin@bidiasgroup.com
              </a>{" "}
              or{" "}
              <a href="tel:2678081450" style={{ color: "#FF9D00", textDecoration: "none" }}>
                (267) 808-1450
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
