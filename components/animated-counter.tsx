"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
}

export function AnimatedCounter({ from, to, duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      setCount(Math.floor(progress * (to - from) + from))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)

    return () => {
      startTimestamp = null
    }
  }, [from, to, duration])

  return <>{count}</>
}

