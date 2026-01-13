import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        floaty: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        breathe: { "0%,100%": { transform: "scale(1)", opacity: "0.85" }, "50%": { transform: "scale(1.03)", opacity: "1" } },
        drift: { "0%": { transform: "translateX(-10%) translateY(0%)" }, "100%": { transform: "translateX(10%) translateY(-5%)" } },
        pulseSoft: { "0%,100%": { opacity: "0.55" }, "50%": { opacity: "0.9" } },
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        breathe: "breathe 7s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite alternate",
        pulseSoft: "pulseSoft 3.2s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0,0,0,0.12)",
        glow: "0 0 0 1px rgba(16,185,129,0.22), 0 25px 70px rgba(16,185,129,0.20)",
        glass: "0 12px 40px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
}

export default config
