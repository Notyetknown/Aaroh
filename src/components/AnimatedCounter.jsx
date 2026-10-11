import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

export default function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.75 })
  const reduceMotion = useReducedMotion()
  const count = useMotionValue(0)
  const roundedCount = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      count.set(value)
      return
    }

    const controls = animate(count, value, {
      duration: 1.8,
      ease: 'easeOut',
    })
    return () => controls.stop()
  }, [count, inView, reduceMotion, value])

  return (
    <span
      ref={ref}
      className="mt-3 text-3xl font-bold text-forest sm:text-4xl"
    >
      <motion.span aria-hidden="true">{roundedCount}</motion.span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
