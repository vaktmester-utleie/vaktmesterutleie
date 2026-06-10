import { cn } from '@/lib/utils'
type Props = {
  children: React.ReactNode
  cols?: string
  className?: string
}

const colsMap: Record<string, string> = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
}
export default function CardContainer({
  children,
  cols = '3',
  className,
}: Props) {
  return <ul className={cn('grid gap-6', className)}>{children}</ul>
}
