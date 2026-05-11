import { cn } from '@/lib/utils'
type Props = {
  children: React.ReactNode
  cols?: string
}

const colsMap: Record<string, string> = {
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
}
export default function CardContainer({ children, cols = '3' }: Props) {
  return (
    <div className={cn('grid gap-6', colsMap[cols] ?? 'grid-cols-3')}>
      {children}
    </div>
  )
}
