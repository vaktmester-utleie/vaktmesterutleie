import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Container from '@/components/wrapper/container'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { PROJECT_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { Image } from 'next-sanity/image'
export default async function ProjectCard() {
  const data: Project[] = await client.fetch(PROJECT_QUERY)
  console.log(data)
  return (
    <>
      {data.map((item) => (
        <Container
          className="rounded-md border border-neutral-200 overflow-hidden hover:shadow-sm transition "
          key={item._id}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {item.image.map((img, i) =>
                img.image ? (
                  <CarouselItem key={i}>
                    <div className="relative aspect-video w-full h-[250px]">
                      <Image
                        className="object-cover"
                        fill
                        src={urlFor(img.image).width(1000).url()}
                        alt={img.alt ?? ''}
                      />
                    </div>
                  </CarouselItem>
                ) : null
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />
          </Carousel>
          <div className="flex flex-col gap-2 px-4 py-4 pb-10">
            <p className="card-title">{item.title}</p>
            <p className="card-subtitle">{item.description}</p>
          </div>
        </Container>
      ))}
    </>
  )
}
