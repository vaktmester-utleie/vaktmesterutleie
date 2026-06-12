import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'
import { ArrowRight } from 'lucide-react'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

export default async function ServicesCard() {
  const service: Service[] = await client.fetch(SERVICE_QUERY)
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {service.map((item) => (
        <li
          key={item._id}
          className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-md bg-neutral-900"
        >
          {item.image.image && (
            <Image
              src={urlFor(item.image.image).width(800).url()}
              fill
              className="object-cover brightness-75 transition group-hover:scale-105 group-focus-within:scale-105"
              alt={
                item.image.alt ? (item.image.alt as string) : 'Alternativ tekst'
              }
            />
          )}

          <div className="absolute inset-0 flex flex-col gap-1 justify-end p-6 text-white bg-gradient-to-t from-black/90 to-transparent">
            <div className="flex items-center justify-between">
              <p className="text-lg">{item.title}</p>
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1 group-focus-within:translate-x-1"
              />
            </div>
            <p className="text-xs">{item.description}</p>
          </div>

          <Link
            className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
            href={item.href ?? '#'}
            aria-label={`Gå til ${item.title}`}
          />
        </li>
      ))}
    </ul>
  )
}
