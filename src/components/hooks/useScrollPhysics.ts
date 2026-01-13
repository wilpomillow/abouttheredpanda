"use client"

import { useEffect } from "react"
import { animate } from "animejs"

export function useScrollPhysics() {
  useEffect(() => {
    const root = document.documentElement
    const state = { p: 0 }
    const apply = () => root.style.setProperty("--scroll-p", `${state.p}`)

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      const target = window.scrollY / max
      animate(state, { p: target, duration: 420, easing: "easeOutQuad", update: apply })
    }

    apply()
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
}
