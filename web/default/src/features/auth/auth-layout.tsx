/*
Copyright (C) 2023-2026 QuantumNous

LCR API Auth Layout — Organic Morph
A soft, flowing authentication experience with gentle curves and organic accents
*/
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Skeleton } from '@/components/ui/skeleton'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { systemName, logo, loading } = useSystemConfig()

  return (
    <div className="relative grid min-h-svh lg:grid-cols-2 bg-background overflow-hidden">
      
      {/* Background blob decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-blob-morph-1 organic-gradient-pink absolute -right-20 -top-20 h-[400px] w-[400px] opacity-10" />
        <div className="animate-blob-morph-2 organic-gradient-cyan absolute -left-20 bottom-0 h-[300px] w-[300px] opacity-8" />
      </div>

      {/* Left Panel */}
      <div className="relative hidden flex-col justify-between rounded-r-3xl bg-muted/30 p-16 text-foreground lg:flex overflow-hidden">
        
        {/* Top brand */}
        <div className="relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-4 transition-opacity hover:opacity-70"
          >
            <div className="organic-shadow relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-background p-2">
              {loading ? (
                <Skeleton className="absolute inset-0 rounded-2xl" />
              ) : (
                <img
                  src={logo}
                  alt={t('Logo')}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            {loading ? (
              <Skeleton className="h-6 w-32 rounded-xl" />
            ) : (
              <h1 className="font-editorial text-2xl tracking-wide">{systemName}</h1>
            )}
          </Link>
        </div>

        {/* Center content */}
        <div className="relative z-10 max-w-lg mt-auto mb-32">
          <div className="mb-8 flex items-center gap-4">
            <div className="organic-blob-3 h-2 w-6 bg-primary/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Gateway Access
            </span>
          </div>
          
          <h2 className="font-editorial text-5xl leading-[1.1] text-foreground mb-8">
            {t('Command.')}
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text italic text-transparent">
              {t('Control.')}
            </span>
            <br />
            {t('Compute.')}
          </h2>
          
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm rounded-2xl border-l-2 border-primary/20 bg-primary/[0.03] py-3 pl-4 pr-6">
            {t(
              'Enter the secure enclave. Manage keys, monitor traffic, and orchestrate models with absolute precision.'
            )}
          </p>
        </div>

        {/* Bottom */}
        <div className="relative z-10 flex justify-between items-end pt-6 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Vol. 01</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* Right auth panel */}
      <div className="relative flex flex-col bg-background">
        {/* Mobile header */}
        <div className="flex items-center justify-between p-6 lg:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-70"
          >
            <div className="organic-shadow relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background p-1">
              {loading ? (
                <Skeleton className="absolute inset-0 rounded-xl" />
              ) : (
                <img
                  src={logo}
                  alt={t('Logo')}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            {loading ? (
              <Skeleton className="h-5 w-24 rounded-lg" />
            ) : (
              <span className="font-editorial text-lg">{systemName}</span>
            )}
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
