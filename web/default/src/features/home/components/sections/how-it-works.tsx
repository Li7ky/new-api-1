/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
*/
import type { ReactNode } from 'react'
import { Copy, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function GeminiStars() {
  const stars = [
    ['left-[8%] top-[28%] size-3 opacity-30'],
    ['left-[18%] top-[34%] size-24 opacity-60'],
    ['left-[30%] top-[50%] size-44 opacity-100'],
    ['left-[43%] top-[24%] size-16 opacity-60'],
    ['left-[53%] top-[28%] size-8 opacity-40'],
    ['left-[70%] top-[76%] size-8 opacity-30'],
    ['left-[6%] top-[74%] size-14 opacity-30'],
    ['left-[42%] top-[76%] size-10 opacity-40'],
  ]

  return (
    <div className='absolute inset-0' aria-hidden='true'>
      {stars.map(([className], index) => (
        <div
          key={index}
          className={`absolute ${className}`}
          style={{
            background:
              'conic-gradient(from 45deg, #ec7a58, #ffcc33, #17b978, #3484ff, #b58cff, #ec7a58)',
            clipPath:
              'polygon(50% 0%, 60% 38%, 100% 50%, 60% 62%, 50% 100%, 40% 62%, 0% 50%, 40% 38%)',
          }}
        />
      ))}
    </div>
  )
}

function CodeBlock(props: { title: string; children: ReactNode }) {
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

export function HowItWorks() {
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
        <div className='relative min-h-[520px]'>
          <GeminiStars />
        </div>

        <div>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#efcfc3] bg-[#fff7f3] px-4 py-2 text-sm font-medium text-[#cf6f4f]'>
            <Sparkles className='size-4' />
            {t('多模态 AI')}
          </div>
          <h2 className='font-editorial text-5xl font-bold tracking-tight text-foreground md:text-6xl'>
            Gemini CLI
          </h2>
          <p className='mt-6 max-w-2xl text-lg leading-9 text-muted-foreground'>
            {t('Gemini CLI 是一款开源人工智能代理，可将 Gemini 的强大功能直接带入你的终端。它提供了对 Gemini 的轻量级访问，为你提供了从提示符到我们模型的最直接路径。')}
          </p>

          <div className='mt-8 space-y-4'>
            <div className='flex items-center gap-3 rounded-2xl border border-[#e8ddd5] bg-background/75 p-4'>
              <div className='flex min-w-44 items-center gap-3 rounded-xl border border-[#e8ddd5] px-4 py-3'>
                <Sparkles className='size-4 text-[#cf6f4f]' />
                <div>
                  <div className='text-sm font-bold'>Node.js</div>
                  <div className='text-xs text-muted-foreground'>npm</div>
                </div>
              </div>
              <div className='overflow-hidden whitespace-nowrap font-mono text-sm text-foreground'>
                <span className='text-[#d45f43]'>npm install -g</span> @google/gemini-cli
              </div>
              <Copy className='ml-auto size-4 text-muted-foreground' />
            </div>

            <CodeBlock title='~/.gemini/.env'>
              <div><span className='text-[#d45f43]'>GOOGLE_GEMINI_BASE_URL</span>=https://api.your-domain.com</div>
              <div><span className='text-[#d45f43]'>GEMINI_API_KEY</span>=<span className='italic text-[#d45f43]'>your-api-key</span></div>
              <div><span className='text-[#d45f43]'>GEMINI_MODEL</span>=<span className='italic text-[#d45f43]'>latest-model-name</span></div>
            </CodeBlock>

            <CodeBlock title='~/.gemini/settings.json'>
              <div>{'{'}</div>
              <div className='pl-5'><span className='text-[#d45f43]'>&quot;ide&quot;</span>: {'{'}</div>
              <div className='pl-10'><span className='text-[#d45f43]'>&quot;enabled&quot;</span>: true</div>
              <div className='pl-5'>{'},'}</div>
              <div className='pl-5'><span className='text-[#d45f43]'>&quot;security&quot;</span>: {'{'}</div>
              <div className='pl-10'><span className='text-[#d45f43]'>&quot;auth&quot;</span>: {'{'}</div>
              <div className='pl-14'><span className='text-[#d45f43]'>&quot;selectedType&quot;</span>: &quot;gemini-api-key&quot;</div>
              <div className='pl-10'>{'}'}</div>
              <div className='pl-5'>{'}'}</div>
              <div>{'}'}</div>
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}
