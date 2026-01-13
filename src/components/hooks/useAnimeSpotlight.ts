"use client"

import { useEffect } from "react"
import { animate } from "animejs"

export function useAnimeSpotlight() {
  useEffect(() => {
    const root = document.documentElement

    const state = { x: 50, y: 35, r: 44 }
    const apply = () => {
      root.style.setProperty("--bg-spot-x", `${state.x}%`)
      root.style.setProperty("--bg-spot-y", `${state.y}%`)
      root.style.setProperty("--bg-spot-r", `${state.r}rem`)
    }

    apply()

    let alive = true
    let active: any = null

    const scheduleNext = () => {
      if (!alive) return

      // stop prior animation instance (if any)
      try {
        active?.pause?.()
        active?.cancel?.()
      } catch {}

      active = animate(state, {
        x: 18 + Math.random() * 64,
        y: 18 + Math.random() * 64,
        r: 34 + Math.random() * 28,
        duration: 2800 + Math.random() * 2200,
        easing: "easeInOutQuad",
        update: apply,
      })

      // ✅ chain next cycle AFTER this one finishes (no recursive call stack)
      Promise.resolve(active?.finished).then(() => {
        if (!alive) return
        requestAnimationFrame(scheduleNext)
      })
    }

    scheduleNext()

    return () => {
      alive = false
      try {
        active?.pause?.()
        active?.cancel?.()
      } catch {}
    }
  }, [])
}
