/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
*/
import type { ReactNode } from 'react'
import { Box, Copy } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface FeaturesProps {
  className?: string
}

function OpenAIMark() {
  return (
    <svg viewBox='0 0 300 300' className='h-full w-full' aria-hidden='true'>
      {Array.from({ length: 6 }).map((_, index) => (
        <path
          key={index}
          d='M150 45c30 0 54 24 54 54v42h-34V99c0-12-8-20-20-20s-20 8-20 20v102h-34V99c0-30 24-54 54-54Z'
          fill='none'
          stroke='currentColor'
          strokeWidth='8'
          strokeLinecap='round'
          strokeLinejoin='round'
          transform={`rotate(${index * 60} 150 150)`}
        />
      ))}
    </svg>
  )
}

function ConfigPanel(props: { title: string; children: ReactNode }) {
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

export function Features(_props: FeaturesProps) {
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
        <div>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#efcfc3] bg-[#fff7f3] px-4 py-2 text-sm font-medium text-[#cf6f4f]'>
            <Box className='size-4' />
            {t('命令行工具')}
          </div>
          <h2 className='font-editorial text-5xl font-bold tracking-tight text-foreground md:text-6xl'>
            Codex CLI
          </h2>
          <p className='mt-6 max-w-2xl text-lg leading-9 text-muted-foreground'>
            {t('Codex CLI 是一款可在本地终端运行的编程助手工具，它能够读取、修改并执行用户指定目录中的代码。')}
          </p>

          <div className='mt-8 space-y-4'>
            <div className='flex items-center gap-3 rounded-2xl border border-[#e8ddd5] bg-background/75 p-4'>
              <div className='flex min-w-44 items-center gap-3 rounded-xl border border-[#e8ddd5] px-4 py-3'>
                <Box className='size-4 text-[#cf6f4f]' />
                <div>
                  <div className='text-sm font-bold'>Node.js</div>
                  <div className='text-xs text-muted-foreground'>npm</div>
                </div>
              </div>
              <div className='overflow-hidden whitespace-nowrap font-mono text-sm text-foreground'>
                <span className='text-[#d45f43]'>npm install -g</span> @openai/codex
              </div>
              <Copy className='ml-auto size-4 text-muted-foreground' />
            </div>

            <ConfigPanel title='~/.codex/config.toml'>
              <div><span className='text-[#d45f43]'>model_provider</span> = &quot;aether&quot;</div>
              <div><span className='text-[#d45f43]'>model</span> = <span className='italic text-[#d45f43]'>&quot;latest-model-name&quot;</span></div>
              <div><span className='text-[#d45f43]'>model_reasoning_effort</span> = &quot;high&quot;</div>
              <div><span className='text-[#d45f43]'>network_access</span> = &quot;enabled&quot;</div>
              <br />
              <div><span className='text-[#d45f43]'>[model_providers.aether]</span></div>
              <div><span className='text-[#d45f43]'>name</span> = &quot;OpenAI&quot;</div>
              <div><span className='text-[#d45f43]'>base_url</span> = &quot;https://api.your-domain.com/v1&quot;</div>
              <div><span className='text-[#d45f43]'>wire_api</span> = &quot;responses&quot;</div>
            </ConfigPanel>

            <ConfigPanel title='~/.codex/auth.json'>
              <div>{'{'}</div>
              <div className='pl-5'><span className='text-[#d45f43]'>&quot;OPENAI_API_KEY&quot;</span>: <span className='italic text-[#d45f43]'>&quot;your-api-key&quot;</span></div>
              <div>{'}'}</div>
            </ConfigPanel>
          </div>
        </div>

        <div className='mx-auto h-[min(48vw,380px)] w-[min(48vw,380px)] text-foreground'>
          <OpenAIMark />
        </div>
      </div>
    </section>
  )
}
