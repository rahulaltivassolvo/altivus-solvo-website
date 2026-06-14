"use client";

export default function AnalyticsMockup() {
  return (
    <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="340" height="240" rx="8" fill="#F0F4FF" />
      <rect x="14" y="14" width="80" height="5" rx="2.5" fill="#6B21A8" opacity="0.4" />
      <rect x="240" y="12" width="86" height="10" rx="4" fill="#E2E8F0" />
      <rect x="14" y="34" width="72" height="40" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="22" y="40" width="24" height="4" rx="2" fill="#00D4FF" opacity="0.5" />
      <rect x="22" y="48" width="48" height="8" rx="2" fill="#6B21A8" opacity="0.15" />
      <rect x="22" y="60" width="32" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="94" y="34" width="72" height="40" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="102" y="40" width="24" height="4" rx="2" fill="#00D4FF" opacity="0.5" />
      <rect x="102" y="48" width="48" height="8" rx="2" fill="#00D4FF" opacity="0.15" />
      <rect x="102" y="60" width="32" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="174" y="34" width="72" height="40" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="182" y="40" width="24" height="4" rx="2" fill="#00D4FF" opacity="0.5" />
      <rect x="182" y="48" width="48" height="8" rx="2" fill="#6B21A8" opacity="0.15" />
      <rect x="182" y="60" width="32" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="14" y="86" width="198" height="96" rx="8" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <line x1="30" y1="112" x2="196" y2="112" stroke="#E2E8F0" strokeWidth="0.5" />
      <line x1="30" y1="130" x2="196" y2="130" stroke="#E2E8F0" strokeWidth="0.5" />
      <line x1="30" y1="148" x2="196" y2="148" stroke="#E2E8F0" strokeWidth="0.5" />
      <path d="M30 148 L50 140 L70 142 L90 130 L110 132 L130 120 L150 118 L170 108 L196 110"
        stroke="#6B21A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
      <path d="M30 148 L50 140 L70 142 L90 130 L110 132 L130 120 L150 118 L170 108 L196 110"
        stroke="url(#chartGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="132" r="3" fill="#6B21A8" stroke="white" strokeWidth="1.5" />
      <circle cx="150" cy="118" r="3" fill="#00D4FF" stroke="white" strokeWidth="1.5" />
      <rect x="220" y="86" width="106" height="96" rx="8" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="232" y="130" width="10" height="44" rx="2" fill="#6B21A8" opacity="0.4" />
      <rect x="248" y="118" width="10" height="56" rx="2" fill="#00D4FF" opacity="0.4" />
      <rect x="264" y="136" width="10" height="38" rx="2" fill="#6B21A8" opacity="0.3" />
      <rect x="280" y="124" width="10" height="50" rx="2" fill="#00D4FF" opacity="0.3" />
      <rect x="296" y="140" width="10" height="34" rx="2" fill="#6B21A8" opacity="0.2" />
      <rect x="14" y="194" width="80" height="4" rx="2" fill="#CBD5E1" />
      <rect x="110" y="194" width="40" height="4" rx="2" fill="#CBD5E1" />
      <rect x="260" y="194" width="60" height="4" rx="2" fill="#CBD5E1" />
    </svg>
  );
}
