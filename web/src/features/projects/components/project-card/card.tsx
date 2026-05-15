'use client'

import { urlFor } from '@/sanity/image'
import { Project } from '@/sanity/types'
import { Image } from 'next-sanity/image'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function ProjectCarouselCard({ item }: { item: Project }) {
  const [current, setCurrent] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="rounded-md border border-neutral-200 overflow-hidden hover:shadow-sm transition">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {item.image.map((img, i) =>
            img.image ? (
              <div key={i} className="relative flex-none w-full h-[250px]">
                <Image
                  className="object-cover"
                  fill
                  src={urlFor(img.image).width(1000).url()}
                  alt={img.alt ?? ''}
                />
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 py-2">
        {item.image.map((_, i) => (
          <button
            aria-label="carousel-dot"
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 w-2   rounded-full transition-all cursor-pointer ${
              current === i ? 'w-4 bg-brand-500' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 px-4 py-4">
        <p className="card-title">{item.title}</p>
        <p className="card-subtitle">{item.description}</p>
      </div>
    </div>
  )
}
