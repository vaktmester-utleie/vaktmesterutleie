import { cn } from '@/lib/utils'
import React from 'react'
type Props = {
  children: React.ReactNode
  padding?: boolean
}
export default function Card({ children, padding = false }: Props) {
  return (
    <div
      className={cn('border rounded-md  flex flex-col gap-2', {
        'p-4': padding,
      })}
    >
      {children}
    </div>
  )
}
