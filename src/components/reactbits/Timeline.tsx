"use client"

import { motion } from "framer-motion"
import React from "react"

export type TimelineItem = { k: string; t: string; d: string }

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-emerald-200/10" />
      <div className="grid gap-4">
        {items.map((it, idx) => (
          <motion.div
            key={it.k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="relative rounded-2xl border border-emerald-200/10 bg-emerald-950/40 p-4 shadow-soft backdrop-blur-md"
          >
            <div className="absolute -left-[18px] top-5 h-3 w-3 rounded-full bg-emerald-200/60 ring-4 ring-emerald-950" />
            <div className="text-xs font-semibold tracking-widest text-emerald-200/70">{it.k}</div>
            <div className="mt-1 text-sm font-semibold">{it.t}</div>
            <div className="mt-2 text-sm text-emerald-50/70">{it.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
