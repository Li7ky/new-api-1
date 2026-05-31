/*
Copyright (C) 2023-2026 QuantumNous

LCR API Logo — Organic Blob with pink/purple/cyan gradient
*/
import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='lcr-logo'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      className={cn('size-6', className)}
      {...props}
    >
      <title>LCR API</title>
      <defs>
        <linearGradient id='lcr-organic-1' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#c084fc' />
          <stop offset='50%' stopColor='#f472b6' />
          <stop offset='100%' stopColor='#22d3ee' />
        </linearGradient>
        <linearGradient id='lcr-organic-2' x1='100%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' stopColor='#22d3ee' />
          <stop offset='50%' stopColor='#a78bfa' />
          <stop offset='100%' stopColor='#f9a8d4' />
        </linearGradient>
        <linearGradient id='lcr-organic-inner' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='rgba(255,255,255,0.9)' />
          <stop offset='100%' stopColor='rgba(255,255,255,0.6)' />
        </linearGradient>
      </defs>

      {/* Outer organic blob */}
      <path
        d='M24 2 C32 2 42 8 44 18 C46 28 40 40 30 44 C20 48 6 42 3 32 C0 22 8 6 18 3 C20 2.5 22 2 24 2Z'
        fill='url(#lcr-organic-1)'
        opacity='0.85'
      />

      {/* Inner flowing blob — offset and rotated */}
      <path
        d='M22 10 C28 8 36 14 35 22 C34 30 28 36 20 35 C12 34 8 26 10 18 C12 12 16 11 22 10Z'
        fill='url(#lcr-organic-2)'
        opacity='0.6'
      />

      {/* Core glow — soft white organic shape */}
      <path
        d='M24 17 C27 16 31 19 30 23 C29 27 26 30 22 29 C18 28 17 24 18 20 C19 18 21 17.5 24 17Z'
        fill='url(#lcr-organic-inner)'
        opacity='0.7'
      />

      {/* Accent dot — flowing energy */}
      <circle cx='28' cy='19' r='2' fill='white' opacity='0.85' />
      <circle cx='19' cy='28' r='1.5' fill='white' opacity='0.6' />
    </svg>
  )
}
