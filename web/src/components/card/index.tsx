import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/image'
import { ImageWithAlt } from '@/sanity/types'
import { Image } from 'next-sanity/image'

type Props = {
  children: React.ReactNode
  padding?: boolean
  className?: string
  image: ImageWithAlt
}

export default function Card({
  children,
  padding = false,
  className,
  image,
}: Props) {
  return (
    <div
      className={cn(
        'border rounded-md flex flex-col group hover:shadow-sm transition duration-150 overflow-hidden',
        className
      )}
    >
      {image ? (
        <Image
          className="group-hover:scale-105 transition duration-150 h-[260px] w-full object-cover shrink-0"
          src={urlFor(image.image).width(800).url()}
          alt={image.alt ? (image.alt as string) : 'Alternativ tekst'}
          width={500}
          height={500}
        />
      ) : (
        <div className="h-[260px] w-full bg-gray-100 flex items-center justify-center shrink-0">
          <span className="text-gray-400 text-sm">Ingen bilete</span>
        </div>
      )}
      <div
        className={cn('flex flex-col flex-1 gap-4 px-4 pt-4 pb-4', {
          'p-4': padding,
        })}
      >
        {children}
      </div>
    </div>
  )
}
