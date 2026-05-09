import { cn } from '@/lib/utils'
import React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('border rounded-md p-4 flex flex-col gap-2')}>
      {children}
    </div>
  )
}
