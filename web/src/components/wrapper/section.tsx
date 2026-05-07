import { cn } from '@/lib/utils'

type Props = {
  children: Readonly<React.ReactNode>
  className?: string
}
export default function Section({ children, className }: Props) {
  return (
    <section className={(cn(className), 'max-w-6xl w-full mx-auto')}>
      {children}
    </section>
  )
}
