import { client } from '@/sanity/client'
import { CATEGORY_QUERY } from '@/sanity/queries'
import { Category } from '@/sanity/types'
import Link from 'next/link'
import { Image } from 'next-sanity/image'
import { urlFor } from '@/sanity/image'
import { ArrowRight } from 'lucide-react'

export default async function RentalCategoryCard() {
  const categories: Category[] = await client.fetch(CATEGORY_QUERY)

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((item) => (
        <li
          key={item._id}
          className="group relative overflow-hidden rounded-md border"
        >
          {item.image ? (
            <Image
              className="h-[175px] w-full object-cover transition group-hover:scale-105"
              src={urlFor(item.image.image).width(800).url()}
              alt={
                item.image.alt ? (item.image.alt as string) : 'Alternativ tekst'
              }
              width={800}
              height={400}
            />
          ) : (
            <div className="flex h-[175px] w-full items-center justify-center bg-gray-100">
              <span className="text-sm text-gray-400">Ingen bilete</span>
            </div>
          )}

          <div className="flex items-center justify-between px-4 py-6">
            <p className="text-lg font-medium">{item.title}</p>
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1 group-focus-within:translate-x-1"
            />
          </div>

          <Link
            className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
            aria-label={`Gå til ${item.title}`}
            href={`/utleige/${item.slug.current}`}
          />
        </li>
      ))}
    </ul>
  )
}
