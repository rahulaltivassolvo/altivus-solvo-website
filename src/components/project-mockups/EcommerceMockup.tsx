"use client";

export default function EcommerceMockup() {
  return (
    <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="340" height="240" rx="8" fill="#F0F4FF" />
      {/* Nav bar */}
      <rect x="0" y="0" width="340" height="36" fill="#E8EDF5" opacity="0.6" />
      <rect x="14" y="11" width="24" height="14" rx="3" fill="#6B21A8" opacity="0.3" />
      <rect x="46" y="16" width="28" height="4" rx="2" fill="#CBD5E1" opacity="0.5" />
      <rect x="82" y="16" width="20" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      <rect x="110" y="16" width="24" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      {/* Cart icon */}
      <rect x="306" y="11" width="18" height="14" rx="4" fill="#E8EDF5" />
      <circle cx="312" cy="16" r="1.5" fill="#6B21A8" opacity="0.5" />
      {/* Hero banner */}
      <rect x="14" y="48" width="312" height="52" rx="6" fill="url(#ecoBanner)" />
      <defs>
        <linearGradient id="ecoBanner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="24" y="58" width="80" height="5" rx="2.5" fill="#0F172A" opacity="0.4" />
      <rect x="24" y="68" width="120" height="4" rx="2" fill="#0F172A" opacity="0.15" />
      <rect x="24" y="76" width="60" height="4" rx="2" fill="#0F172A" opacity="0.15" />
      {/* Section title */}
      <rect x="14" y="112" width="40" height="4" rx="2" fill="#CBD5E1" opacity="0.6" />
      <rect x="290" y="112" width="36" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      {/* Product grid */}
      <rect x="14" y="126" width="96" height="100" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="34" y="142" width="56" height="40" rx="4" fill="#E8EDF5" />
      <rect x="24" y="190" width="76" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      <rect x="24" y="198" width="40" height="4" rx="2" fill="#00D4FF" opacity="0.3" />

      <rect x="122" y="126" width="96" height="100" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="142" y="142" width="56" height="40" rx="4" fill="#E8EDF5" />
      <rect x="132" y="190" width="76" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      <rect x="132" y="198" width="40" height="4" rx="2" fill="#6B21A8" opacity="0.3" />

      <rect x="230" y="126" width="96" height="100" rx="6" fill="white" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />
      <rect x="250" y="142" width="56" height="40" rx="4" fill="#E8EDF5" />
      <rect x="240" y="190" width="76" height="4" rx="2" fill="#CBD5E1" opacity="0.4" />
      <rect x="240" y="198" width="40" height="4" rx="2" fill="#6B21A8" opacity="0.3" />
    </svg>
  );
}
