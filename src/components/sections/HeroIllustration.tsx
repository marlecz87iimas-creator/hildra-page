"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroIllustration({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
      >
        <defs>
          <linearGradient id="laptopBody" x1="40" y1="80" x2="500" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a2f4d" />
            <stop offset="1" stopColor="#0d1c30" />
          </linearGradient>
          <linearGradient id="screenBg" x1="90" y1="100" x2="430" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" />
            <stop offset="1" stopColor="#e8eef7" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Network dots */}
        <g opacity="0.35" stroke="#2F6BFF" strokeWidth="1">
          <circle cx="520" cy="70" r="3" fill="#2F6BFF" />
          <circle cx="580" cy="120" r="2.5" fill="#fff" />
          <circle cx="500" cy="150" r="2" fill="#5B8CFF" />
          <path d="M520 70 L580 120 L500 150" strokeOpacity="0.5" />
        </g>

        <motion.g
          filter="url(#soft)"
          initial={reduceMotion ? false : { y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Laptop */}
          <rect x="48" y="78" width="420" height="268" rx="18" fill="url(#laptopBody)" />
          <rect x="68" y="96" width="380" height="220" rx="8" fill="url(#screenBg)" />

          {/* Sidebar */}
          <rect x="68" y="96" width="72" height="220" fill="#0a192f" />
          <rect x="82" y="118" width="44" height="8" rx="4" fill="#2F6BFF" />
          <rect x="82" y="140" width="36" height="6" rx="3" fill="#ffffff55" />
          <rect x="82" y="156" width="40" height="6" rx="3" fill="#ffffff40" />
          <rect x="82" y="172" width="32" height="6" rx="3" fill="#ffffff40" />
          <rect x="82" y="188" width="38" height="6" rx="3" fill="#ffffff35" />

          {/* Dashboard cards */}
          <rect x="156" y="112" width="90" height="52" rx="8" fill="#fff" stroke="#d7e2f0" />
          <rect x="166" y="124" width="40" height="6" rx="3" fill="#94a3b8" />
          <rect x="166" y="140" width="54" height="10" rx="3" fill="#2F6BFF" />

          <rect x="256" y="112" width="90" height="52" rx="8" fill="#fff" stroke="#d7e2f0" />
          <rect x="266" y="124" width="40" height="6" rx="3" fill="#94a3b8" />
          <rect x="266" y="140" width="48" height="10" rx="3" fill="#12b76a" />

          <rect x="356" y="112" width="78" height="52" rx="8" fill="#fff" stroke="#d7e2f0" />
          <circle cx="395" cy="138" r="16" fill="none" stroke="#2F6BFF" strokeWidth="5" strokeDasharray="28 70" />
          <circle cx="395" cy="138" r="16" fill="none" stroke="#dbe4f2" strokeWidth="5" />

          {/* Chart */}
          <rect x="156" y="180" width="278" height="116" rx="10" fill="#fff" stroke="#d7e2f0" />
          <path
            d="M176 268 C210 250, 230 220, 260 236 C290 252, 310 200, 340 214 C370 228, 390 190, 414 204"
            stroke="#2F6BFF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M176 268 C210 250, 230 220, 260 236 C290 252, 310 200, 340 214 C370 228, 390 190, 414 204 L414 280 L176 280 Z"
            fill="#2F6BFF"
            fillOpacity="0.12"
          />

          {/* Laptop base */}
          <path d="M28 346 H488 L508 372 H8 Z" fill="#13233a" />
          <rect x="200" y="350" width="120" height="8" rx="4" fill="#243652" />
        </motion.g>

        {/* Phone */}
        <motion.g
          initial={reduceMotion ? false : { y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.g
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="470" y="160" width="130" height="260" rx="26" fill="#0a192f" stroke="#2F6BFF" strokeWidth="3" />
            <rect x="482" y="178" width="106" height="210" rx="12" fill="#10233d" />
            <rect x="512" y="168" width="46" height="6" rx="3" fill="#243652" />
            <rect x="494" y="196" width="70" height="10" rx="5" fill="#2F6BFF" />
            <rect x="494" y="218" width="82" height="8" rx="4" fill="#ffffff30" />
            <rect x="494" y="236" width="64" height="8" rx="4" fill="#ffffff22" />
            <rect x="494" y="262" width="82" height="48" rx="10" fill="#1a3355" />
            <rect x="506" y="276" width="36" height="6" rx="3" fill="#5B8CFF" />
            <rect x="506" y="290" width="48" height="6" rx="3" fill="#ffffff35" />
            <rect x="494" y="324" width="38" height="38" rx="10" fill="#2F6BFF" />
            <rect x="538" y="324" width="38" height="38" rx="10" fill="#1a3355" />
            <circle cx="535" cy="404" r="8" fill="#2F6BFF" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
