"use client"

import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/cn"

export type Tab = { id: string; label: string; content: React.ReactNode }

export default function Tabs({
  tabs,
  className,
  defaultId,
}: {
  tabs: Tab[]
  className?: string
  defaultId?: string
}) {
  const first = defaultId ?? tabs[0]?.id
  const [active, setActive] = useState(first)

  const activeTab = useMemo(() => tabs.find((t) => t.id === active) ?? tabs[0], [tabs, active])

  return (
    <div className={cn("rounded-3xl border border-emerald-200/10 bg-emerald-950/40 shadow-soft backdrop-blur-md", className)}>
      <div className="flex flex-wrap gap-2 p-3">
        {tabs.map((t) => {
          const is = t.id === active
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "relative rounded-2xl px-4 py-2 text-sm font-semibold text-emerald-50/70 transition hover:text-emerald-50",
                is && "text-emerald-950"
              )}
            >
              {is && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-2xl bg-emerald-200"
                  transition={{ type: "spring", stiffness: 520, damping: 35 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          )
        })}
      </div>

      <div className="border-t border-emerald-200/10 p-5">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35 }}
        >
          {activeTab.content}
        </motion.div>
      </div>
    </div>
  )
}
