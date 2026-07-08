"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Thermometer, LayoutGrid, Truck, Route } from "lucide-react";

const services = [
  { Icon: Package,      label: "Dry Van" },
  { Icon: Thermometer,  label: "Refrigerated" },
  { Icon: LayoutGrid,   label: "Flatbed" },
  { Icon: Truck,        label: "Owner-Operator" },
  { Icon: Route,        label: "Dedicated Lanes" },
];

export default function ServicesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#060F1E", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0 md:justify-between">
          {services.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-2.5 px-5 py-3"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <Icon size={15} style={{ color: "#E8920E", flexShrink: 0 }} strokeWidth={2} />
              <span
                className="text-xs font-semibold tracking-[0.16em] uppercase whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
