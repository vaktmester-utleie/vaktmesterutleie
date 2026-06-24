import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { RENTAL_BY_CATEGORY_QUERY } from '@/sanity/queries'
import { Rental } from '@/sanity/types'
import RentalMetaData from './rental-availability'
import { ArrowRight } from 'lucide-react'
import { Image } from 'next-sanity/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default async function RentalCard({ slug }: { slug: string }) {
  const item: Rental[] = await client.fetch(RENTAL_BY_CATEGORY_QUERY, { slug })
  const sorted = [...item].sort((a, b) =>
    a.available === b.available ? 0 : a.available ? -1 : 1
  )

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {sorted.map((data) => {
        if (!data.image) return null
        return (
          <li
            key={data._id}
            className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-md"
          >
            <Image
              src={urlFor(data.image.image).width(800).url()}
              fill
              className={cn(
                'object-cover brightness-75 transition group-hover:scale-105 group-focus-within:scale-105',
                !data.available && 'brightness-50'
              )}
              alt={
                data.image.alt ? (data.image.alt as string) : 'Alternativ tekst'
              }
            />

            <div className="absolute inset-x-0 top-0 z-10 p-4">
              <RentalMetaData available={data.available} />
            </div>

            <div className="absolute inset-0 flex flex-col gap-1 justify-end p-6 text-white bg-gradient-to-t from-black/95 via-black/50 to-transparent">
              <div className="flex items-center justify-between">
                <p className="text-lg">{data.title}</p>
                {data.available && (
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-focus-within:translate-x-1"
                  />
                )}
              </div>

              {data.specs && (
                <p className="text-xs text-white/80">{data.specs}</p>
              )}

              <div className="mt-2 flex flex-col gap-0.5">
                {(data.pricePerDay ?? 0) > 0 && (
                  <p>
                    <span className="text-md">{data.pricePerDay}</span>{' '}
                    <span className="text-sm text-white/70">kr / dag</span>
                  </p>
                )}
                {(data.pricePerWeek ?? 0) > 0 && (
                  <p>
                    <span className="text-md">{data.pricePerWeek}</span>{' '}
                    <span className="text-sm text-white/70">kr / veke</span>
                  </p>
                )}
              </div>
            </div>

            {data.available && (
              <Link
                className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
                href={`/kontakt?utstyr=${data.title}`}
                aria-label={`Leig ${data.title}`}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}
