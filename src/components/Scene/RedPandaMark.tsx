import React from "react"

export default function RedPandaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rp" x1="0" y1="0" x2="256" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(34,197,94,0.9)" />
          <stop offset="0.55" stopColor="rgba(163,230,53,0.65)" />
          <stop offset="1" stopColor="rgba(254,240,138,0.25)" />
        </linearGradient>
      </defs>

      <path
        d="M128 26c34 0 62 28 62 62 0 14-5 26-13 36 14 9 23 25 23 43 0 30-24 55-54 55-18 0-33-8-43-21-10 13-25 21-43 21-30 0-54-25-54-55 0-18 9-34 23-43-8-10-13-22-13-36 0-34 28-62 62-62 18 0 34 7 46 19 12-12 28-19 46-19Z"
        fill="url(#rp)"
        opacity="0.95"
      />
      <path
        d="M92 114c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18Zm72 0c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18Z"
        fill="rgba(2,44,34,0.65)"
        opacity="0.9"
      />
      <path
        d="M96 156c8 10 19 16 32 16s24-6 32-16"
        stroke="rgba(2,44,34,0.65)"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M56 90c-9-11-9-26 2-37 11-11 26-11 37-2M200 90c9-11 9-26-2-37-11-11-26-11-37-2"
        stroke="rgba(187,247,208,0.35)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M52 180c0 20 18 36 40 36"
        stroke="rgba(187,247,208,0.28)"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  )
}
