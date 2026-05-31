/*
Copyright (C) 2023-2026 QuantumNous

LCR API Features Section — Organic Gallery Layout
Flowing blob accents with soft glass cards
*/
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: '01',
      title: t('Routing & Dispatch'),
      desc: t('Intelligent load balancing across multiple upstream providers with millisecond precision.'),
      tags: ['OpenAI', 'Claude', 'Gemini'],
      gradient: 'organic-gradient-pink',
    },
    {
      id: '02',
      title: t('Enterprise Security'),
      desc: t('Fine-grained access controls, comprehensive audit logs, and strict key isolation protocols.'),
      tags: ['AES-256', 'Role-based'],
      gradient: 'organic-gradient-cyan',
    },
    {
      id: '03',
      title: t('Global Distribution'),
      desc: t('Multi-region deployment guaranteeing 99.9% uptime and automatic failover.'),
      tags: ['Edge', 'Resilient'],
      gradient: 'organic-gradient-warm',
    },
    {
      id: '04',
      title: t('Telemetry'),
      desc: t('Monitor token consumption and latency metrics through beautiful, precise instrumentation.'),
      tags: ['Real-time', 'Cost-aware'],
      gradient: 'organic-gradient-pink',
    },
  ]

  return (
    <section className="relative overflow-hidden border-t border-foreground/8 px-6 py-24 md:py-32">
      {/* Background blob */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] animate-blob-morph-2 organic-gradient-cyan opacity-[0.04]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="organic-blob-3 h-2 w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {t('Capabilities')}
              </span>
            </div>
            <h2 className="font-editorial text-4xl md:text-5xl leading-tight text-foreground">
              {t('Engineered for scale.')}
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text italic text-transparent">
                {t('Refined for the artisan.')}
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground rounded-2xl border border-foreground/10 bg-primary/[0.03] px-6 py-4">
            {t('A comprehensive suite of tools disguised as a minimalist interface.')}
          </p>
        </div>

        {/* Organic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation="fade-up"
              className="group organic-shadow relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 min-h-[360px] backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:organic-glow"
            >
              {/* Per-card organic accent */}
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 animate-blob-morph-1 ${f.gradient} opacity-15 transition-opacity duration-500 group-hover:opacity-25`} aria-hidden="true" />

              <div className="relative z-10">
                <span className="font-editorial text-2xl opacity-40 mb-8 block">
                  {f.id}
                </span>
                <h3 className="font-editorial text-2xl mb-4 leading-snug text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed max-w-[240px] text-muted-foreground">
                  {f.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-12 flex flex-wrap gap-2">
                {f.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="rounded-full border border-current/15 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateInView>
          ))}
        </div>

      </div>
    </section>
  )
}
