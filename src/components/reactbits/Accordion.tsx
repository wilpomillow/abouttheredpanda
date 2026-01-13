"use client"

import React, { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/cn"

export type AccordionItem = {
  id: string
  title: string
  subtitle?: string
  content: React.ReactNode
  chips?: string[]
}

export default function Accordion({
  items,
  className,
  defaultOpenId,
}: {
  items: AccordionItem[]
  className?: string
  defaultOpenId?: string
}) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id)
  const open = useMemo(() => new Set([openId]), [openId])

  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((it) => {
        const isOpen = open.has(it.id)
        return (
          <div
            key={it.id}
            className="overflow-hidden rounded-3xl border border-emerald-200/10 bg-emerald-950/40 shadow-soft backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setOpenId((prev) => (prev === it.id ? "" : it.id))}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <div>
                <div className="text-base font-semibold">{it.title}</div>
                {it.subtitle && <div className="mt-1 text-sm text-emerald-50/65">{it.subtitle}</div>}
                {!!it.chips?.length && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {it.chips.slice(0, 4).map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-emerald-200/10 bg-emerald-950/35 px-2.5 py-1 text-[11px] text-emerald-100/80"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-2xl border border-emerald-200/10 bg-emerald-950/35 text-emerald-100/80 transition",
                  isOpen && "bg-emerald-200/10 text-emerald-50"
                )}
                aria-hidden="true"
              >
                <span className={cn("transition-transform", isOpen ? "rotate-45" : "rotate-0")}>+</span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="border-t border-emerald-200/10 px-5 py-4 text-sm text-emerald-50/75">
                    {it.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
