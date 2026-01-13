"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/cn"

type Item = { id: string; label: string }

export default function TOC({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const ids = useMemo(() => items.map((i) => i.id), [items])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (vis?.target?.id) setActive(vis.target.id)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.3, 0.4] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [ids])

  return (
    <div className="sticky top-6 hidden max-h-[calc(100vh-48px)] w-full rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-4 shadow-soft backdrop-blur-md lg:block">
      <div className="text-xs font-semibold tracking-widest text-emerald-200/70">TRAIL MAP</div>
      <div className="mt-3 grid gap-1">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={cn(
              "rounded-2xl px-3 py-2 text-sm text-emerald-50/70 hover:bg-emerald-200/10 hover:text-emerald-50",
              active === it.id && "bg-emerald-200/10 text-emerald-50"
            )}
          >
            {it.label}
          </a>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-emerald-200/10 bg-emerald-950/30 p-3 text-xs text-emerald-50/65">
        Tip: scroll slowly — the forest reacts.
      </div>
    </div>
  )
}
