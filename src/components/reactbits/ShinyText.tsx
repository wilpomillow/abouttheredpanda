// src/components/reactbits/ShinyText.tsx
"use client"

import type { ElementType } from "react"
import { motion } from "framer-motion"

export default function ShinyText({
  text,
  className = "",
  as,
}: {
  text: string
  className?: string
  as?: ElementType
}) {
  const Tag: any = as ?? "span"

  return (
    <Tag className={"relative inline-block " + className}>
      {/* base text */}
      <span className="relative z-10">{text}</span>

      {/* sheen */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-transparent via-emerald-100/70 to-transparent"
        style={{
          WebkitMaskImage: "linear-gradient(#000,#000)",
          maskImage: "linear-gradient(#000,#000)",
          opacity: 0.25,
        }}
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.0,
        }}
      />
    </Tag>
  )
}
