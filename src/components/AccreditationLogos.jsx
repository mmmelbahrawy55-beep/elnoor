import React from "react";

export function ISOLogo({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-xl bg-white ring-1 ring-navy-900/5 p-2`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#003366" rx="8" />
        <text x="50" y="40" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">ISO</text>
        <text x="50" y="60" textAnchor="middle" fill="white" fontSize="10">15189</text>
        <text x="50" y="78" textAnchor="middle" fill="#FFD700" fontSize="8">CERTIFIED</text>
      </svg>
    </div>
  );
}

export function CAPLogo({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-xl bg-white ring-1 ring-navy-900/5 p-2`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#8B0000" rx="8" />
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">CAP</text>
        <text x="50" y="65" textAnchor="middle" fill="#FFD700" fontSize="8">Accredited</text>
      </svg>
    </div>
  );
}

export function RIQASLogo({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-xl bg-white ring-1 ring-navy-900/5 p-2`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#0066CC" rx="8" />
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">RIQAS</text>
        <text x="50" y="65" textAnchor="middle" fill="white" fontSize="8">Quality</text>
      </svg>
    </div>
  );
}

export function EGACLogo({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-xl bg-white ring-1 ring-navy-900/5 p-2`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#006633" rx="8" />
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">EGAC</text>
        <text x="50" y="65" textAnchor="middle" fill="#FFD700" fontSize="8">Egyptian</text>
      </svg>
    </div>
  );
}
