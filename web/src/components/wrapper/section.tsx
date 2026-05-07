import { cn } from '@/lib/utils'

type Props = {
  children: Readonly<React.ReactNode>
  className?: string
}
export default function Section({ children, className }: Props) {
  return <section className={cn(className)}>{children}</section>
}
