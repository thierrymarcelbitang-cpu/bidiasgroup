import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// Content Security Policy
// next/font/google downloads fonts at build-time → served from 'self'.
// Next.js App Router injects inline <script> tags for RSC hydration,
// so 'unsafe-inline' is required in script-src for static headers.
// (A nonce-based CSP would need middleware and is out of scope here.)
// ---------------------------------------------------------------------------
const CSP = [
  "default-src 'self'",
  // Next.js inline hydration scripts + bundles from /_next/static
  "script-src 'self' 'unsafe-inline'",
  // Tailwind inline styles + Next.js style injection
  "style-src 'self' 'unsafe-inline'",
  // Local images + Next.js blur-placeholder data URIs + blob: for image opt
  "img-src 'self' data: blob:",
  // next/font serves from /_next/static/media (same origin)
  "font-src 'self'",
  // Client-side navigation fetches to /_next/data (same origin)
  "connect-src 'self'",
  // No audio/video assets
  "media-src 'none'",
  // No Flash / PDF embeds
  "object-src 'none'",
  // No <iframe> embeds
  "frame-src 'none'",
  // Prevents this site from being framed (CSP equivalent of X-Frame-Options)
  "frame-ancestors 'none'",
  // Disallow <base> tag hijacking
  "base-uri 'self'",
  // Quote form uses e.preventDefault() — no external POST targets
  "form-action 'self'",
  // Force HTTPS for mixed-content sub-resources
  "upgrade-insecure-requests",
]
  .join("; ")
  .trim();

const securityHeaders = [
  // ── CSP ────────────────────────────────────────────────────────────────
  { key: "Content-Security-Policy", value: CSP },

  // ── Clickjacking protection (legacy browsers; CSP frame-ancestors covers modern ones)
  { key: "X-Frame-Options", value: "DENY" },

  // ── Prevent MIME-type sniffing attacks
  { key: "X-Content-Type-Options", value: "nosniff" },

  // ── Referrer: send origin only on cross-origin requests; full URL same-origin
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // ── Disable browser features not used by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },

  // ── HSTS: enforce HTTPS for 2 years, include sub-domains
  // (Vercel already sends this on its CDN layer; adding here ensures it
  //  appears even on custom infrastructure and satisfies Observatory.)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 95],
    deviceSizes: [640, 828, 1080, 1200, 1536, 1920, 2560],
    imageSizes: [64, 128, 256, 384, 512],
  },

  async headers() {
    return [
      {
        // Apply to every route, including /_next/static assets
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
