"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/cn"
import React from "react"

export default function AnimatedList({
  items,
  className,
  itemClassName,
  stagger = 0.08,
}: {
  items: React.ReactNode[]
  className?: string
  itemClassName?: string
  stagger?: number
}) {
  return (
    <motion.ul
      className={cn("grid gap-3", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {items.map((it, idx) => (
        <motion.li
          key={idx}
          className={cn(
            "rounded-2xl border border-emerald-200/10 bg-emerald-950/42 p-4 shadow-soft backdrop-blur-md",
            itemClassName
          )}
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
          }}
        >
          {it}
        </motion.li>
      ))}
    </motion.ul>
  )
}
