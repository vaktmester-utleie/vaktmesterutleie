import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/image'
import { ImageWithAlt } from '@/sanity/types'
import { Image } from 'next-sanity/image'
import Container from '../wrapper/container'
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
    <Container
      className={cn(
        className,
        'border rounded-md   group  hover:shadow-sm  transition duration-150 overflow-hidden relative ',
        {
          'p-4': padding,
        }
      )}
    >
      {image ? (
        <Image
          className="group-hover:scale-105  transition duration-150 rounded-tl-md rounded-tr-md h-[260px] w-full object-cover"
          src={urlFor(image.image).width(800).url()}
          alt={image.alt as string}
          width={500}
          height={500}
        />
      ) : (
        <img
          className="rounded-tl-md rounded-tr-md h-[260px] w-full object-cover p-20"
          src="/broken-image.png"
          alt="placeholder"
          width={150}
          height={150}
        />
      )}
      <Container className="flex flex-col gap-4 px-4 pt-4 pb-10">
        {children}
      </Container>
    </Container>
  )
}
