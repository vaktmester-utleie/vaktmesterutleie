import { urlFor } from '@/sanity/image'
import { Project } from '@/sanity/types'
import { ArrowRight } from 'lucide-react'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

export default function ProjectCard({ item }: { item: Project }) {
  const cover =
    item.afterImage?.image ?? item.image?.[item.image.length - 1]?.image

  return (
    <li className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-md">
      {cover && (
        <Image
          src={urlFor(cover).width(800).url()}
          fill
          className="object-cover brightness-75 transition group-hover:scale-105 group-focus-within:scale-105"
          alt={item.afterImage?.alt ?? item.title ?? 'Alternativ tekst'}
        />
      )}

      <div className="absolute inset-0 flex flex-col gap-1 justify-end p-6 text-white bg-gradient-to-t from-black/90 to-transparent">
        <div className="flex items-center justify-between">
          <p className="text-lg [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
            {item.title}
          </p>
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1 group-focus-within:translate-x-1"
          />
        </div>
        {item.description && (
          <p className="text-xs text-white/80">{item.description}</p>
        )}
      </div>

      <Link
        className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
        href={`/prosjekt/${item.slug.current}`}
        aria-label={`Sjå prosjekt: ${item.title}`}
      />
    </li>
  )
}
