import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  href: string
  className?: string
}
export default function NavigationLink({ children, href, className }: Props) {
  return (
    <Link
      className={cn(
        className,
        'text-brand-500 text-xs font-bold tracking-widest flex items-center gap-2'
      )}
      href={href}
    >
      {children}

      <ArrowRight size={16} />
    </Link>
  )
}
