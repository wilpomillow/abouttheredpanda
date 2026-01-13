"use client"

import { motion } from "framer-motion"

// Deterministic PRNG (Mulberry32) — same output on server + client for a given seed
function mulberry32(seed: number) {
  let t = seed >>> 0
  return function rand() {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

type Fly = { id: number; x: number; y: number; s: number; d: number; delay: number }

// Generate stable fireflies (no Math.random, no Date.now)
function makeFlies(count = 18, seed = 1337): Fly[] {
  const r = mulberry32(seed)
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: r() * 100,
    y: r() * 100,
    s: 0.6 + r() * 1.2,
    d: 8 + r() * 10,
    delay: r() * 2.5,
  }))
}

// Constant is fine because it’s deterministic and identical on server + client.
const flies = makeFlies(18, 1337)

export default function Fireflies() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {flies.map((f) => (
        <motion.div
          key={f.id}
          className="absolute h-2 w-2 rounded-full bg-lime-200/70 blur-[1px]"
          style={{ left: `${f.x}%`, top: `${f.y}%`, transform: `scale(${f.s})` }}
          animate={{
            x: [0, 16, -10, 8, 0],
            y: [0, -18, 12, -8, 0],
            opacity: [0.15, 0.8, 0.25, 0.65, 0.15],
          }}
          transition={{
            duration: f.d,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-50 [background:radial-gradient(40rem_circle_at_20%_20%,rgba(34,197,94,0.12),transparent_60%),radial-gradient(35rem_circle_at_80%_30%,rgba(163,230,53,0.10),transparent_60%),radial-gradient(45rem_circle_at_50%_90%,rgba(187,247,208,0.08),transparent_60%)]" />
    </div>
  )
}
