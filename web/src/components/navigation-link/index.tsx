import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}
export default function NavigationLink({ children, className }: Props) {
  return (
    <span
      className={cn(
        className,
        'text-brand-500 text-xs font-bold tracking-widest flex items-center gap-2'
      )}
    >
      {children}

      <ArrowRight size={16} />
    </span>
  )
}
