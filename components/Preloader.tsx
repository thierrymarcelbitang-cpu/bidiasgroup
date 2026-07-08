"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TruckSVG() {
  return (
    <svg width="110" height="52" viewBox="0 0 110 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Trailer */}
      <rect x="2" y="10" width="68" height="30" rx="3" fill="#071A36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="4" y="12" width="64" height="26" rx="2" fill="#0B2347" />
      {/* Cab */}
      <rect x="70" y="16" width="34" height="24" rx="3" fill="#071A36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="72" y="19" width="20" height="14" rx="2" fill="#0D2B52" />
      <rect x="94" y="20" width="8" height="10" rx="1" fill="rgba(255,255,255,0.06)" />
      {/* Windshield */}
      <rect x="73" y="20" width="18" height="12" rx="1.5" fill="rgba(180,220,255,0.12)" />
      {/* Headlight */}
      <rect x="100" y="22" width="5" height="4" rx="1" fill="#FF9D00" opacity="0.9" />
      {/* Wheels */}
      <circle cx="20" cy="42" r="7" fill="#111" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="20" cy="42" r="3.5" fill="#FF9D00" opacity="0.6" />
      <circle cx="50" cy="42" r="7" fill="#111" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="50" cy="42" r="3.5" fill="#FF9D00" opacity="0.6" />
      <circle cx="88" cy="42" r="7" fill="#111" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="88" cy="42" r="3.5" fill="#FF9D00" opacity="0.6" />
      {/* Road line */}
      <rect x="0" y="50" width="110" height="1.5" rx="0.75" fill="rgba(255,255,255,0.07)" />
      {/* Speed lines */}
      <rect x="8" y="22" width="20" height="1.5" rx="0.75" fill="rgba(255,157,0,0.22)" />
      <rect x="8" y="26" width="32" height="1.5" rx="0.75" fill="rgba(255,157,0,0.14)" />
      <rect x="8" y="30" width="16" height="1.5" rx="0.75" fill="rgba(255,157,0,0.10)" />
    </svg>
  );
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#020814" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-7">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TruckSVG />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.5 }}
            >
              <p
                className="text-white text-3xl font-black tracking-[0.18em]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                BIDIAS GROUP
              </p>
              <p
                className="text-[10px] tracking-[0.42em] mt-1.5 uppercase"
                style={{ color: "#FF9D00", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Trucking &amp; Logistics
              </p>
            </motion.div>

            <motion.div
              className="w-44 h-[2px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.07)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.88 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #FF9D00, #FFB733)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.88, duration: 1.3, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
