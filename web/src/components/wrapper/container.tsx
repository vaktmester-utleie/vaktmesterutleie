import { cn } from '@/lib/utils'

type Props = {
  children: Readonly<React.ReactNode>
  className?: string
}
export default function Container({ children, className }: Props) {
  return <div className={cn(className)}>{children}</div>
}
