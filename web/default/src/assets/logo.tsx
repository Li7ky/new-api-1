/*
Copyright (C) 2023-2026 QuantumNous

LCR API Logo — Cyan-to-Pink Yin-Yang style inspired by api.aisz.mom
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
        {/* Cyan-to-pink gradient matching the yin-yang arcs */}
        <linearGradient id='lcr-cyan' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#22d3ee' />
          <stop offset='100%' stopColor='#06b6d4' />
        </linearGradient>
        <linearGradient id='lcr-pink' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#f472b6' />
          <stop offset='100%' stopColor='#ec4899' />
        </linearGradient>
        <linearGradient id='lcr-star' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#67e8f9' />
          <stop offset='100%' stopColor='#f9a8d4' />
        </linearGradient>
      </defs>

      {/* Background disc */}
      <circle cx='24' cy='24' r='22' fill='#0f172a' opacity='0.08' />

      {/* Left cyan arc */}
      <path
        d='M24 2 A22 22 0 0 1 24 46 A11 11 0 0 1 24 24 A11 11 0 0 0 24 2Z'
        fill='url(#lcr-cyan)'
      />
      {/* Right pink arc */}
      <path
        d='M24 2 A22 22 0 0 0 24 46 A11 11 0 0 0 24 24 A11 11 0 0 1 24 2Z'
        fill='url(#lcr-pink)'
      />

      {/* Cyan dot */}
      <circle cx='24' cy='17' r='3.5' fill='url(#lcr-pink)' />
      {/* Pink dot */}
      <circle cx='24' cy='31' r='3.5' fill='url(#lcr-cyan)' />

      {/* Center sparkle / star */}
      <path
        d='M24 20 l1.2 3.8 l3.8 1.2 l-3.8 1.2 l-1.2 3.8 l-1.2-3.8 l-3.8-1.2 l3.8-1.2Z'
        fill='white'
        opacity='0.95'
      />
    </svg>
  )
}
