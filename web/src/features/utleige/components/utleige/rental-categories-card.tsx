import { client } from '@/sanity/client'
import { CATEGORY_QUERY } from '@/sanity/queries'
import { Category } from '@/sanity/types'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

export default async function RentalCategoryCard() {
  const categories: Category[] = await client.fetch(CATEGORY_QUERY)

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((item) => (
        <li
          key={item._id}
          className="group relative overflow-hidden rounded-md bg-neutral-900 transition hover:bg-neutral-800"
        >
          <div className="flex flex-col justify-between p-6 h-28">
            <p className="text-2xl font-semibold text-white">{item.title}</p>
            <div className="flex justify-end">
              <ArrowRight
                size={18}
                className="text-white/60 transition group-hover:translate-x-1 group-focus-within:translate-x-1"
              />
            </div>
          </div>

          <Link
            className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
            aria-label={`Gå til ${item.title}`}
            href={`/utleige/${item.slug.current}`}
          />
        </li>
      ))}
    </ul>
  )
}
