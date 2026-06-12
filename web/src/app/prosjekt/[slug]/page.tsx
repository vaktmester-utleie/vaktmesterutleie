import { client } from '@/sanity/client'
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import {
  Comparison,
  ComparisonItem,
  ComparisonHandle,
} from '@/components/ui/comparison'
import { urlFor } from '@/sanity/image'
import { Image } from 'next-sanity/image'
import { ArrowRight, MapPin, Tag, Calendar } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const CATEGORY_LABELS: Record<string, string> = {
  bad: 'Bad',
  renovering: 'Renovering',
  terrasse: 'Terrasse',
  'tak-inspeksjon': 'Tak & inspeksjon',
  'vindu-dorer': 'Vindu & dører',
  hage: 'Hage',
  annet: 'Anna',
}

import { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project: Project | null = await client.fetch(PROJECT_BY_SLUG_QUERY, {
    slug,
  })

  if (!project) return { title: 'Prosjekt' }

  const place = project.location ? ` i ${project.location}` : ''

  return {
    title: project.title,
    description:
      project.description ??
      `${project.title}${place} — sjå før og etter frå dette prosjektet.`,
    openGraph: {
      title: project.title,
      description: project.description ?? `${project.title}${place}`,
      images: project.afterImage?.image
        ? [urlFor(project.afterImage.image).width(1200).height(630).url()]
        : [],
    },
  }
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project: Project | null = await client.fetch(PROJECT_BY_SLUG_QUERY, {
    slug,
  })

  if (!project) notFound()

  const hasSlider = project.beforeImage?.image && project.afterImage?.image

  return (
    <article className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          href="/prosjekt"
          className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900"
        >
          ← Alle prosjekt
        </Link>
      </div>

      {/* FULL BREDDE slider */}
      {hasSlider && (
        <Comparison
          className="aspect-[21/9] h-[30dvh] md:h-auto w-full"
          mode="drag"
        >
          <ComparisonItem position="left">
            <Image
              src={urlFor(project.beforeImage!.image).width(2000).url()}
              fill
              className="object-cover"
              alt={project.beforeImage!.alt ?? 'Før'}
            />
            <span className="absolute left-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              Før
            </span>
          </ComparisonItem>
          <ComparisonItem position="right">
            <Image
              src={urlFor(project.afterImage!.image).width(2000).url()}
              fill
              className="object-cover"
              alt={project.afterImage!.alt ?? 'Etter'}
            />
            <span className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              Etter
            </span>
          </ComparisonItem>
          <ComparisonHandle />
        </Comparison>
      )}

      <div className="mx-auto max-w-4xl px-4">
        {/* metadata som chips */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {project.category && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
              <Tag size={14} />
              {CATEGORY_LABELS[project.category] ?? project.category}
            </span>
          )}
          {project.location && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
              <MapPin size={14} />
              {project.location}
            </span>
          )}
          {project.date && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
              <Calendar size={14} />
              {new Date(project.date).toLocaleDateString('nn-NO', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-neutral-900">
          {project.title}
        </h1>

        {project.description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.description}
          </p>
        )}

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-md bg-neutral-100 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold">Ønskjer du liknande arbeid?</p>
            <p className="text-sm text-neutral-600">
              Me gjev deg eit uforpliktande tilbod innan 24 timar.
            </p>
          </div>
          <Button asChild>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-800"
            >
              Ta kontakt <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
