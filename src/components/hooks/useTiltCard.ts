"use client"

import { useEffect } from "react"
import { animate } from "animejs"

export function useTiltCard(selector = "[data-tilt]") {
  useEffect(() => {
    const root = document.documentElement
    const state = { x: 0, y: 0 }
    const apply = () => {
      root.style.setProperty("--tilt-x", `${state.x}deg`)
      root.style.setProperty("--tilt-y", `${state.y}deg`)
    }

    const onMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(selector) as HTMLElement | null
      if (!el) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      const tx = -py * 7.5
      const ty = px * 9
      animate(state, { x: tx, y: ty, duration: 260, easing: "easeOutQuad", update: apply })
    }

    const onLeave = () => animate(state, { x: 0, y: 0, duration: 420, easing: "easeOutExpo", update: apply })

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [selector])
}
