import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  variant?: 'large' | 'small'
  onClose?: () => void
}
export default function Logo({ variant = 'large', onClose }: Props) {
  return (
    <Link onClick={onClose} href={'/'}>
      <Image
        className={cn(' aspect-auto object-cover', {
          'max-w-[100px]': variant === 'small',
          'max-w-[150px]': variant === 'large',
        })}
        src={'/vaktmester.jpg'}
        alt="logo"
        width={200}
        height={200}
      />
    </Link>
  )
}
