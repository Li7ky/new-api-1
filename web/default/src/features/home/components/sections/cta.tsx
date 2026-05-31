/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
*/
import { Link } from '@tanstack/react-router'
import { Layers, Puzzle, Rocket, UsersRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

function FadedNexusMark() {
  return (
    <svg viewBox='0 0 220 220' className='h-full w-full' aria-hidden='true'>
      <path
        d='M110 18 202 188h-26L110 66 44 188H18L110 18Z'
        fill='none'
        stroke='currentColor'
        strokeWidth='10'
        strokeLinejoin='round'
        opacity='0.16'
      />
      <path
        d='M93 82c20 39 58 60 95 61M78 108c26 45 70 64 111 62M62 136c31 41 75 56 116 53M126 51c-4 44 10 78 46 104M104 73c0 43 19 72 57 92M86 101c5 38 25 62 62 75M64 188c18-48 45-72 89-74M84 188c15-34 41-51 82-54'
        fill='none'
        stroke='currentColor'
        strokeWidth='8'
        strokeLinecap='round'
        opacity='0.16'
      />
    </svg>
  )
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  const cards = [
    {
      icon: Layers,
      title: 'Claude / OpenAI / Gemini',
      desc: t('已完整接入三大主流 AI 编程助手的标准 API'),
      badge: t('已完成'),
      active: true,
    },
    {
      icon: Puzzle,
      title: t('格式转换'),
      desc: t('开启 / 关闭 API 格式相互转换、自定义请求头'),
      badge: t('已完成'),
      active: true,
    },
    {
      icon: UsersRound,
      title: t('协同开发'),
      desc: t('远程开发、Skill 分享、Playground 等功能即将到来'),
      badge: t('开发中'),
      active: false,
    },
  ]

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
      <div className='absolute inset-x-0 top-[38%] mx-auto h-[360px] w-[360px] text-muted-foreground/80'>
        <FadedNexusMark />
      </div>

      <div className='relative mx-auto w-full max-w-6xl text-center'>
        <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#efcfc3] bg-[#fff7f3] px-4 py-2 text-sm font-medium text-[#cf6f4f]'>
          <Rocket className='size-4' />
          {t('项目进度')}
        </div>
        <h2 className='font-editorial text-5xl leading-tight tracking-tight text-foreground md:text-6xl'>
          {t('功能开发进度')}
        </h2>
        <p className='mt-5 text-lg text-muted-foreground'>
          {t('核心 API 代理功能已完成，正在载入更多功能')}
        </p>

        <div className='mt-16 grid gap-6 md:grid-cols-3'>
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={
                  card.active
                    ? 'rounded-3xl border border-[#efcfc3] bg-background/72 p-10 shadow-sm backdrop-blur-sm'
                    : 'rounded-3xl border border-dashed border-[#ddd5cf] bg-background/45 p-10 opacity-70 backdrop-blur-sm'
                }
              >
                <Icon className='mx-auto mb-8 size-7 text-[#cf6f4f]' />
                <h3 className='text-xl font-semibold text-foreground'>{card.title}</h3>
                <p className='mx-auto mt-4 max-w-64 text-sm leading-7 text-muted-foreground'>{card.desc}</p>
                <div className='mt-7 inline-flex rounded-full border border-[#efcfc3] bg-background px-4 py-1.5 text-xs text-[#cf6f4f]'>
                  {card.badge}
                </div>
              </div>
            )
          })}
        </div>

        <Button
          size='lg'
          className='mt-14 h-14 rounded-2xl border-2 border-[#d97655] bg-transparent px-10 text-lg text-[#cf6f4f] shadow-none hover:bg-[#cf6f4f]/10'
          render={<Link to={props.isAuthenticated ? '/dashboard' : '/sign-up'} />}
        >
          <Rocket className='mr-2 size-5' />
          {props.isAuthenticated ? t('进入控制台') : t('立即开始')}
        </Button>
      </div>
    </section>
  )
}
