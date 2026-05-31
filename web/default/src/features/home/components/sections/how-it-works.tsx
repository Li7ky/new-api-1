/*
Copyright (C) 2023-2026 QuantumNous

LCR API How It Works — Organic Timeline
Flowing connection lines with soft blob markers
*/
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      num: 'I',
      title: t('Configure'),
      desc: t('Register upstream channels and define strict access policies. A matter of absolute control.'),
      gradient: 'organic-gradient-pink',
    },
    {
      num: 'II',
      title: t('Integrate'),
      desc: t('Swap your base URL. The gateway handles protocol translation invisibly in the background.'),
      gradient: 'organic-gradient-cyan',
    },
    {
      num: 'III',
      title: t('Observe'),
      desc: t('Watch the telemetry flow. Measure latencies, track spend, and optimize routing models.'),
      gradient: 'organic-gradient-warm',
    },
  ]

  return (
    <section className="relative overflow-hidden border-t border-foreground/8 px-6 py-24 md:py-32 bg-card/30">
      {/* Background blob */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[500px] w-[500px] animate-blob-morph-3 organic-gradient-warm opacity-[0.04]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Section Title */}
          <div className="lg:col-span-4 lg:border-r lg:border-foreground/8 lg:pr-16">
            <div className="sticky top-32">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground block mb-6">
                {t('Methodology')}
              </span>
              <h2 className="font-editorial text-4xl leading-tight text-foreground mb-6">
                {t('The Process.')}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t('Deployment is intentionally austere. We strip away the unnecessary, leaving only a direct path from configuration to production.')}
              </p>
              {/* Organic decorative blob */}
              <div className="pointer-events-none mt-12 h-16 w-16 animate-blob-morph-1 organic-gradient-pink opacity-30" aria-hidden="true" />
            </div>
          </div>

          {/* Organic Timeline */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-0 border-l-2 border-primary/15">
              {steps.map((step, i) => (
                <AnimateInView
                  key={step.num}
                  delay={i * 150}
                  animation="fade-up"
                  className="group relative pl-12 pb-16 lg:pb-24 last:pb-0"
                >
                  {/* Timeline node — organic blob marker */}
                  <div className={`absolute left-0 top-0 -translate-x-[7px] h-3.5 w-3.5 animate-blob-morph-1 ${step.gradient} opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125`} aria-hidden="true" />
                  
                  {/* Roman Numeral Marker */}
                  <div className="font-editorial text-6xl text-foreground/8 absolute -left-6 top-8 select-none transition-colors duration-500 group-hover:text-primary/15">
                    {step.num}
                  </div>

                  <div className="max-w-md relative z-10 pt-4">
                    <h3 className="font-editorial text-2xl mb-4 text-foreground transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
