/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Button } from '@/components/ui/button'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

function NexusMark() {
  return (
    <div className='animate-pulse h-full w-full' aria-hidden='true'>
      <svg viewBox='0 0 220 220' className='h-full w-full'>
        <path
          d='M110 18 202 188h-26L110 66 44 188H18L110 18Z'
          fill='none'
          stroke='currentColor'
          strokeWidth='10'
          strokeLinejoin='round'
          className='animate-pulse'
          style={{ animationDelay: '0s' }}
        />
        <path
          d='M93 82c20 39 58 60 95 61M78 108c26 45 70 64 111 62M62 136c31 41 75 56 116 53M126 51c-4 44 10 78 46 104M104 73c0 43 19 72 57 92M86 101c5 38 25 62 62 75'
          fill='none'
          stroke='currentColor'
          strokeWidth='8'
          strokeLinecap='round'
          className='animate-pulse'
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d='M64 188c18-48 45-72 89-74M84 188c15-34 41-51 82-54M105 188c12-22 32-33 61-35'
          fill='none'
          stroke='currentColor'
          strokeWidth='8'
          strokeLinecap='round'
          className='animate-pulse'
          style={{ animationDelay: '0.8s' }}
        />
      </svg>
    </div>
  )
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { systemName } = useSystemConfig()
  const displayName = systemName || 'Token Nexus'

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24'>
      <div
        className='absolute inset-0 opacity-70'
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,20,20,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className='relative mx-auto flex w-full max-w-6xl flex-col items-center text-center'>
        <div className='mb-8 h-[42vh] max-h-[430px] min-h-64 w-[min(54vw,520px)] text-muted-foreground/70'>
          <NexusMark />
        </div>

        <h1 className='font-editorial max-w-4xl text-[clamp(3.2rem,6.6vw,6rem)] leading-[0.95] tracking-tight text-foreground'>
          {t('欢迎使用')}{' '}
          <span className='text-[#cf6f4f]'>{displayName}</span>
        </h1>

        <p className='mt-8 text-xl leading-9 text-muted-foreground md:text-2xl'>
          {t('AI 开发工具统一接入平台')}
          <br />
          {t('整合 Claude Code、Codex CLI、Gemini CLI 等多个 AI 编程助手')}
        </p>

        <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
          <Button
            size='lg'
            className='h-12 rounded-2xl border border-[#d97655] bg-transparent px-8 text-[#cf6f4f] shadow-none hover:bg-[#cf6f4f]/10'
            render={<Link to={props.isAuthenticated ? '/dashboard' : '/sign-up'} />}
          >
            {props.isAuthenticated ? t('进入控制台') : t('立即开始')}
            <ArrowRight className='ml-2 size-4' />
          </Button>
        </div>
      </div>
    </section>
  )
}
