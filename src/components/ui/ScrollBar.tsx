"use client"

import { useScrollPhysics } from "@/components/hooks/useScrollPhysics"

export default function ScrollBar() {
  useScrollPhysics()
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full w-full origin-left bg-gradient-to-r from-emerald-400/90 via-lime-300/80 to-emerald-200/90"
        style={{ transform: "scaleX(var(--scroll-p))" }}
      />
    </div>
  )
}
