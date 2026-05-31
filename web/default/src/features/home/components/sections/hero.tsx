/*
Copyright (C) 2023-2026 QuantumNous

LCR API Organic Hero — Flowing blob decoration with editorial typography
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useStatus } from '@/hooks/use-status'
import { Button } from '@/components/ui/button'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl = (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Organic blob decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-blob-morph-1 animate-organic-float organic-gradient-pink absolute -right-20 -top-20 h-[500px] w-[500px] opacity-20 md:opacity-30" />
        <div className="animate-blob-morph-2 organic-gradient-cyan absolute -left-32 bottom-0 h-[400px] w-[400px] opacity-15 md:opacity-20" />
        <div className="animate-blob-morph-3 organic-gradient-warm absolute right-1/3 top-1/2 h-[300px] w-[300px] opacity-10 md:opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Editorial Typography */}
          <div className="flex flex-col items-start lg:col-span-7 xl:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="organic-blob-3 h-2 w-8 bg-primary/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {t('Volume 01')}
              </span>
            </div>

            <h1 className="font-editorial text-[clamp(3.5rem,7vw,6rem)] leading-[0.9] tracking-tight text-foreground">
              {t('The Gateway')}
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text italic text-transparent">
                {t('to Infinite Models.')}
              </span>
            </h1>

            <div className="mt-12 max-w-xl rounded-2xl border-l-[3px] border-primary/30 bg-primary/5 py-2 pl-4 pr-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t(
                  'Route requests across fifty providers through a single, elegant interface. Strip away the complexity of integration and focus purely on the craft of building.'
                )}
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              {props.isAuthenticated ? (
                <Button
                  size="lg"
                  className="organic-shadow rounded-2xl bg-primary text-primary-foreground transition-all duration-280 hover:scale-[1.02] hover:organic-glow"
                  render={<Link to="/dashboard" />}
                >
                  {t('Dashboard')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="organic-shadow rounded-2xl bg-primary text-primary-foreground transition-all duration-280 hover:scale-[1.02] hover:organic-glow"
                  render={<Link to="/sign-up" />}
                >
                  {t('Begin Journey')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-primary/20 transition-all duration-280 hover:border-primary hover:bg-primary/5 hover:scale-[1.02]"
                render={<a href={docsUrl} target="_blank" rel="noopener noreferrer" />}
              >
                {t('Read the Manual')}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Organic Exhibition Card */}
          <div className="relative hidden lg:col-span-5 xl:col-span-4 lg:flex lg:flex-col lg:justify-end">
            <div className="organic-shadow relative ml-auto flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
              {/* Organic accent blob */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 animate-blob-morph-1 organic-gradient-pink opacity-30" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-24 w-24 animate-blob-morph-2 organic-gradient-cyan opacity-20" aria-hidden="true" />

              <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-border/30 bg-background/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 mix-blend-overlay" />
                <span className="font-editorial text-6xl text-foreground/15 italic select-none">API</span>
              </div>
              
              <div className="mt-8 space-y-0">
                <div className="flex justify-between items-end rounded-xl bg-muted/30 px-3 py-3 mb-3">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Protocol</span>
                  <span className="font-editorial text-lg">OpenAI Native</span>
                </div>
                <div className="flex justify-between items-end rounded-xl bg-muted/30 px-3 py-3 mb-3">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Latency</span>
                  <span className="font-editorial text-lg">&lt; 50ms</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Status</span>
                  <span className="text-xs uppercase tracking-widest text-success flex items-center gap-2">
                    <span className="organic-blob-3 h-2 w-2 bg-success"></span>
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
