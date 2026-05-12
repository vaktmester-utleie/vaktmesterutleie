import { cn } from '@/lib/utils'

type Props = {
  children: Readonly<React.ReactNode>
  className?: string
  constraint?: boolean
}
export default function Section({
  children,
  className,
  constraint = false,
}: Props) {
  return (
    <section
      className={cn(className, ' w-full ', {
        'max-w-6xl mx-auto px-4': constraint,
      })}
    >
      {children}
    </section>
  )
}
