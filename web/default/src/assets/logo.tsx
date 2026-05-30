/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
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
      <title>Lcr API</title>
      <defs>
        <linearGradient id='lcr-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#2dd4bf' />
          <stop offset='100%' stopColor='#0d9488' />
        </linearGradient>
      </defs>
      <rect width='48' height='48' rx='12' fill='url(#lcr-grad)' />
      <path
        d='M14 12h6v20h12v6H14V12z'
        fill='white'
        opacity='0.95'
      />
      <path
        d='M34 14l-8 10h5l-3 10 8-10h-5l3-10z'
        fill='white'
        opacity='0.8'
      />
    </svg>
  )
}
