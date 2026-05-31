/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
*/
import type { ReactNode } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface StatsProps {
  className?: string
}

function ClaudeBloom() {
  return (
    <svg viewBox='0 0 420 420' className='h-full w-full' aria-hidden='true'>
      {Array.from({ length: 14 }).map((_, index) => (
        <rect
          key={index}
          x='194'
          y='34'
          width='32'
          height='176'
          rx='15'
          transform={`rotate(${index * 25.7} 210 210)`}
          fill='none'
          stroke='#d97655'
          strokeWidth='8'
          opacity='0.24'
        />
      ))}
      {Array.from({ length: 10 }).map((_, index) => (
        <rect
          key={index}
          x='196'
          y='92'
          width='28'
          height='138'
          rx='14'
          transform={`rotate(${index * 36} 210 210)`}
          fill='#d97655'
          opacity='0.9'
        />
      ))}
    </svg>
  )
}

function CodePanel(props: { title: string; children: ReactNode }) {
  return (
    <div className='overflow-hidden rounded-2xl border border-[#e8ddd5] bg-background/75'>
      <div className='flex items-center justify-between border-b border-[#e8ddd5] px-4 py-3 text-sm font-semibold text-muted-foreground'>
        <span>{props.title}</span>
        <Copy className='size-4 opacity-60' />
      </div>
      <div className='p-5 font-mono text-sm leading-7 text-foreground'>{props.children}</div>
    </div>
  )
}

export function Stats(_props: StatsProps) {
  const { t } = useTranslation()

  return (
    <section className='relative grid min-h-screen items-center overflow-hidden px-6 py-24'>
      <div
        className='absolute inset-0 opacity-70'
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,20,20,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className='relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2'>
        <div className='mx-auto h-[min(58vw,520px)] w-[min(58vw,520px)] text-[#d97655]'>
          <ClaudeBloom />
        </div>

        <div>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#efcfc3] bg-[#fff7f3] px-4 py-2 text-sm font-medium text-[#cf6f4f]'>
            <Terminal className='size-4' />
            {t('IDE 集成')}
          </div>
          <h2 className='font-editorial text-5xl font-bold tracking-tight text-foreground md:text-6xl'>
            Claude Code
          </h2>
          <p className='mt-6 max-w-2xl text-lg leading-9 text-muted-foreground'>
            {t('直接在您的终端中释放 Claude 的原始力量。瞬间搜索百万行代码库，将数小时的流程转化为单一命令。您的工具、您的流程、您的代码库，以思维速度进化。')}
          </p>

          <div className='mt-8 space-y-4'>
            <div className='flex items-center gap-3 rounded-2xl border border-[#e8ddd5] bg-background/75 p-4'>
              <div className='flex min-w-44 items-center gap-3 rounded-xl border border-[#e8ddd5] px-4 py-3'>
                <Terminal className='size-4 text-[#cf6f4f]' />
                <div>
                  <div className='text-sm font-bold'>Mac / Linux</div>
                  <div className='text-xs text-muted-foreground'>Terminal</div>
                </div>
              </div>
              <div className='overflow-hidden whitespace-nowrap font-mono text-sm text-foreground'>
                <span className='text-[#d45f43]'>curl -fsSL</span> https://claude.ai/install.sh
              </div>
              <Copy className='ml-auto size-4 text-muted-foreground' />
            </div>

            <CodePanel title='~/.claude/settings.json'>
              <div>{'{'}</div>
              <div className='pl-5'><span className='text-[#d45f43]'>&quot;env&quot;</span>: {'{'}</div>
              <div className='pl-10'><span className='text-[#d45f43]'>&quot;ANTHROPIC_AUTH_TOKEN&quot;</span>: <span className='italic text-[#d45f43]'>&quot;your-api-key&quot;</span>,</div>
              <div className='pl-10'><span className='text-[#d45f43]'>&quot;ANTHROPIC_BASE_URL&quot;</span>: &quot;https://api.your-domain.com&quot;</div>
              <div className='pl-5'>{'}'}</div>
              <div>{'}'}</div>
            </CodePanel>

            <div className='flex items-center gap-3 text-sm text-muted-foreground'>
              <Check className='size-4 text-[#cf6f4f]' />
              {t('兼容 Claude Code 终端工作流，统一走你的中转入口。')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
