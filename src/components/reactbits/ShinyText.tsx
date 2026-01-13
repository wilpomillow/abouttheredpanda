"use client"
import { cn } from "@/lib/cn"

export default function ShinyText({
  text,
  className,
  as = "span",
}: {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const Tag: any = as
  return (
    <Tag
      className={cn(
        "relative inline-block bg-[linear-gradient(90deg,rgba(254,252,232,0.15),rgba(187,247,208,0.95),rgba(254,252,232,0.15))] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer",
        className
      )}
    >
      {text}
    </Tag>
  )
}
