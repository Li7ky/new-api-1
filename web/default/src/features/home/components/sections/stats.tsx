/*
Copyright (C) 2023-2026 QuantumNous

LCR API Stats Section — Organic Style
Soft rounded cards with subtle gradient accents
*/
import { useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

function Counter(props: CounterProps) {
  const { end, suffix = '', prefix = '', duration = 1600, decimals = 0 } = props
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  const formatValue = useCallback(
    (v: number) =>
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString(),
    [decimals]
  )

  const animate = useCallback(() => {
    const el = ref.current
    if (!el) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = `${prefix}${formatValue(eased * end)}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, prefix, suffix, formatValue])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      el.textContent = `${prefix}${formatValue(end)}${suffix}`
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate, end, prefix, suffix, formatValue])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  )
}

interface StatsProps {
  className?: string
}

interface StatItem {
  end: number
  suffix: string
  label: string
  sublabel: string
  decimals?: number
  gradient: string
}

export function Stats(_props: StatsProps) {
  const { t } = useTranslation()

  const stats: StatItem[] = [
    {
      end: 50,
      suffix: '+',
      label: t('Upstream Nodes'),
      sublabel: t('Integrated'),
      gradient: 'organic-gradient-pink',
    },
    {
      end: 100,
      suffix: '+',
      label: t('Pricing Models'),
      sublabel: t('Token-precise'),
      gradient: 'organic-gradient-cyan',
    },
    {
      end: 50,
      suffix: '+',
      label: t('Endpoints'),
      sublabel: t('OpenAI Native'),
      gradient: 'organic-gradient-warm',
    },
    {
      end: 99.9,
      suffix: '%',
      label: t('Availability'),
      sublabel: t('SLA Guaranteed'),
      decimals: 1,
      gradient: 'organic-gradient-pink',
    },
  ]

  return (
    <section className="border-t border-foreground/8 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="organic-shadow relative overflow-hidden rounded-3xl border border-border/30 bg-card/60 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:organic-glow"
            >
              {/* Subtle organic accent */}
              <div className={`pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 animate-blob-morph-2 ${s.gradient} opacity-10`} aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="font-editorial text-4xl md:text-5xl text-foreground mb-6">
                  <Counter end={s.end} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="text-sm font-semibold uppercase tracking-widest text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-2">{s.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
