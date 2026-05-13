import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/image'
import { ImageWithAlt } from '@/sanity/types'
import { Image } from 'next-sanity/image'

type Props = {
  children: React.ReactNode
  className?: string
  image: ImageWithAlt
  imgSize?: boolean
}

export default function Card({ children, className, image, imgSize }: Props) {
  return (
    <div
      className={cn(
        'rounded-md border border-neutral-200 overflow-hidden relative hover:shadow-sm transition',
        className
      )}
    >
      {image ? (
        <Image
          className={cn('h-[260px] w-full object-cover shrink-0', {
            'h-[200px]': imgSize,
          })}
          src={urlFor(image.image).width(800).url()}
          alt={image.alt ? (image.alt as string) : 'Alternativ tekst'}
          width={500}
          height={500}
        />
      ) : (
        <div
          className={cn(
            'h-[260px] w-full bg-gray-100 flex items-center justify-center shrink-0',
            {
              'h-[200px]': imgSize,
            }
          )}
        >
          <span className="text-gray-400 text-sm">Ingen bilete</span>
        </div>
      )}
      {children}
    </div>
  )
}
