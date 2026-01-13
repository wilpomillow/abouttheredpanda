"use client"

import { useEffect, useMemo, useState } from "react"
import { animate } from "animejs"

export function useCountUp(target: number, opts?: { duration?: number; decimals?: number }) {
  const duration = opts?.duration ?? 900
  const decimals = opts?.decimals ?? 0

  const [val, setVal] = useState(0)
  const state = useMemo(() => ({ v: 0 }), [])

  useEffect(() => {
    animate(state, {
      v: target,
      duration,
      easing: "easeOutCubic",
      update: () => setVal(state.v),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return val.toFixed(decimals)
}
