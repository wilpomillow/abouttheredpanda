"use client"

import { cn } from "@/lib/cn"
import { motion } from "framer-motion"

const leaf = (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <path
      d="M20 4c-6.7 1-11.8 4.7-14.9 10.9-.8 1.6-1.2 3.3-1.1 5.1 0 0 5.5.4 9.7-3.7C17.6 12.5 19.6 8.4 20 4Z"
      className="fill-emerald-200/70"
    />
    <path d="M6 18c4-5 8-8 12-10" className="stroke-emerald-100/70" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default function LeafChips({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <motion.span
          key={c}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-emerald-200/15 bg-emerald-950/40 px-3 py-1 text-sm text-emerald-50/90 backdrop-blur-md"
          )}
        >
          {leaf}
          {c}
        </motion.span>
      ))}
    </div>
  )
}
