import { cn } from "@/lib/cn"
import React from "react"

export default function GlassSurface({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-emerald-200/15 bg-gradient-to-b from-emerald-950/58 to-emerald-950/26 shadow-glass backdrop-blur-xl",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(45rem_circle_at_20%_10%,rgba(187,247,208,0.18),transparent_60%),radial-gradient(28rem_circle_at_70%_35%,rgba(34,197,94,0.16),transparent_60%),radial-gradient(30rem_circle_at_40%_90%,rgba(163,230,53,0.12),transparent_60%)]" />
      <div className="relative">{children}</div>
    </div>
  )
}
