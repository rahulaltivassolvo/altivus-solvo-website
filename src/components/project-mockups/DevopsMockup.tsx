"use client";

export default function DevopsMockup() {
  return (
    <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="340" height="240" rx="8" fill="#F0F4FF" />
      {/* Terminal header */}
      <rect x="0" y="0" width="340" height="28" fill="#E8EDF5" opacity="0.6" />
      <circle cx="14" cy="14" r="4" fill="#EF4444" opacity="0.5" />
      <circle cx="28" cy="14" r="4" fill="#EAB308" opacity="0.5" />
      <circle cx="42" cy="14" r="4" fill="#22C55E" opacity="0.5" />
      <rect x="58" y="12" width="80" height="4" rx="2" fill="#CBD5E1" opacity="0.5" />

      {/* Pipeline stages */}
      {/* Stage 1 */}
      <rect x="14" y="44" width="150" height="28" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <circle cx="28" cy="58" r="6" fill="#22C55E" opacity="0.3" />
      <path d="M26 58 L28 60 L32 55" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="42" y="54" width="40" height="4" rx="2" fill="#CBD5E1" opacity="0.5" />
      <rect x="90" y="54" width="60" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      {/* Arrow */}
      <line x1="170" y1="58" x2="186" y2="58" stroke="#CBD5E1" strokeWidth="1" opacity="0.5" />
      <path d="M184 54 L188 58 L184 62" stroke="#CBD5E1" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Stage 2 */}
      <rect x="196" y="44" width="130" height="28" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <circle cx="210" cy="58" r="6" fill="#22C55E" opacity="0.3" />
      <path d="M208 58 L210 60 L214 55" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="224" y="54" width="36" height="4" rx="2" fill="#CBD5E1" opacity="0.5" />
      <rect x="268" y="54" width="44" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />

      {/* Pipeline progress bar */}
      <rect x="14" y="88" width="312" height="20" rx="6" fill="#E8EDF5" />
      <rect x="14" y="88" width="240" height="20" rx="6" fill="#D6DCF0" />
      <rect x="14" y="88" width="120" height="20" rx="6" fill="#00D4FF" opacity="0.5" />
      <rect x="14" y="88" width="60" height="20" rx="6" fill="#9333EA" opacity="0.4" />
      <text x="160" y="102" fill="#94A3B8" fontSize="9" fontFamily="monospace">42% complete</text>

      {/* Stage 3 — testing */}
      <rect x="14" y="122" width="150" height="28" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="24" y="130" width="10" height="12" rx="2" fill="#EAB308" opacity="0.4" />
      <rect x="42" y="132" width="40" height="4" rx="2" fill="#CBD5E1" opacity="0.5" />
      <rect x="90" y="132" width="60" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />

      {/* Arrow */}
      <line x1="170" y1="136" x2="186" y2="136" stroke="#CBD5E1" strokeWidth="1" opacity="0.5" />
      <path d="M184 132 L188 136 L184 140" stroke="#CBD5E1" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Stage 4 */}
      <rect x="196" y="122" width="130" height="28" rx="6" fill="white" stroke="rgba(22,163,74,0.15)" strokeWidth="1" />
      <circle cx="210" cy="136" r="6" fill="#22C55E" opacity="0.3" />
      <path d="M208 136 L210 138 L214 133" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="224" y="132" width="36" height="4" rx="2" fill="#22C55E" opacity="0.3" />
      <rect x="268" y="132" width="44" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />

      {/* Bottom summary */}
      <rect x="14" y="168" width="312" height="54" rx="8" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="24" y="178" width="60" height="4" rx="2" fill="#CBD5E1" opacity="0.5" />
      <rect x="24" y="190" width="80" height="4" rx="2" fill="#00D4FF" opacity="0.3" />
      <rect x="24" y="200" width="100" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />

      {/* Status badges */}
      <rect x="200" y="176" width="50" height="16" rx="4" fill="#22C55E" opacity="0.15" />
      <circle cx="209" cy="184" r="3" fill="#22C55E" opacity="0.5" />
      <text x="216" y="187" fill="#22C55E" fontSize="8" fontFamily="monospace" opacity="0.8">PASSED</text>

      <rect x="258" y="176" width="56" height="16" rx="4" fill="#00D4FF" opacity="0.15" />
      <circle cx="267" cy="184" r="3" fill="#00D4FF" opacity="0.5" />
      <text x="274" y="187" fill="#00D4FF" fontSize="8" fontFamily="monospace" opacity="0.8">DEPLOY</text>
    </svg>
  );
}
