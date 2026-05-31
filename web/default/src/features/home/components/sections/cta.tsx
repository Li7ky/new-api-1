/*
Copyright (C) 2023-2026 QuantumNous

LCR API CTA Section — Organic Flow
Blob background with gradient text and soft rounded buttons
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-48">
      {/* Organic blob background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/80" />
        <div className="animate-blob-morph-1 animate-organic-float organic-gradient-pink absolute -right-32 -top-32 h-[600px] w-[600px] opacity-20" />
        <div className="animate-blob-morph-2 organic-gradient-cyan absolute -bottom-24 -left-24 h-[400px] w-[400px] opacity-15" />
        <div className="animate-blob-morph-3 organic-gradient-warm absolute right-1/4 top-1/3 h-[300px] w-[300px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        
        <div className="mb-12 inline-flex items-center gap-4">
          <div className="organic-blob-3 h-2 w-6 bg-background/40" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
            {t('Open Source & Self-Hosted')}
          </span>
          <div className="organic-blob-4 h-2 w-6 bg-background/40" />
        </div>

        <h2 className="font-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight mb-8 text-background">
          {t('A Quiet Revolution')}
          <br />
          <span className="italic text-background/50">
            {t('in API Architecture.')}
          </span>
        </h2>

        <p className="mx-auto max-w-lg text-lg leading-relaxed text-background/60 mb-16">
          {t(
            'Deploy the gateway. Connect fifty providers. Measure everything. Control absolute.'
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="organic-shadow rounded-2xl bg-background text-foreground px-10 h-14 text-sm tracking-widest transition-all duration-280 hover:scale-[1.02] hover:organic-glow"
            render={<Link to="/sign-up" />}
          >
            {t('Deploy Now')}
            <ArrowRight className="ml-3 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-background/25 text-background px-10 h-14 text-sm tracking-widest transition-all duration-280 hover:bg-background/10 hover:border-background/40 hover:scale-[1.02]"
            render={<Link to="/pricing" />}
          >
            {t('View Pricing')}
          </Button>
        </div>

        <div className="mt-24 pt-8 border-t border-background/8 text-xs uppercase tracking-widest text-background/35">
          <span>{t('Forged from the new-api repository.')}</span>
          <a
            href="https://github.com/Calcium-Ion/new-api"
            target="_blank"
            rel="noreferrer"
            className="ml-4 underline underline-offset-4 hover:text-background transition-colors"
          >
            {t('View Source')}
          </a>
        </div>

      </div>
    </section>
  )
}
