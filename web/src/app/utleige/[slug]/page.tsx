import PageBreadcrumb from '@/components/breadcrumb'
import CardContainer from '@/components/card/card-container'
import PageHeader from '@/components/page-header'
import CardSkeleton from '@/components/skeleton'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import RentalCard from '@/features/utleige/components/utleige/rental-card'
import { client } from '@/sanity/client'
import { RENTAL_BY_CATEGORY_QUERY } from '@/sanity/queries'
import { Rental } from '@/sanity/types'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
export const metadata: Metadata = {
  title: 'Utleige',
  description: 'Lei utstyr frå Vaktmesterutleie.',
}
type Params = {
  params: {
    slug: string
  }
}
export default async function Page({ params }: Params) {
  const { slug } = await params
  const items: Rental[] = await client.fetch(RENTAL_BY_CATEGORY_QUERY, { slug })

  if (items.length === 0) {
    return (
      <Section className="flex flex-col gap-14 min-h-screen pb-40">
        <Container className="bg-white border-b py-20">
          <Section constraint>
            <PageHeader
              label="utleigekatalog"
              title="Lei utstyr enkelt og rimeleg"
              subtitle="Tilhengarar, stillas, stiegar og verktøy til gode prisar. Hent sjølv eller avtal levering."
            />
            <PageBreadcrumb />
          </Section>
        </Container>
        <Section constraint>
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-2xl font-semibold text-neutral-800">
              Ingen utstyr tilgjengeleg
            </p>
            <Link
              href="/kontakt"
              className="mt-2 text-neutral-500 transition-colors hover:text-neutral-800"
            >
              Ta kontakt — me hjelper deg å finne det du treng.
            </Link>
          </div>
        </Section>
      </Section>
    )
  }

  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <Container className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            label="utleigekatalog"
            title="Lei utstyr enkelt og rimeleg"
            subtitle="Tilhengarar, stillas, stiegar og verktøy til gode prisar. Hent sjølv eller avtal levering."
          />
          <PageBreadcrumb />
        </Section>
      </Container>
      <Section constraint>
        <Suspense fallback={<CardSkeleton count={6} />}>
          <RentalCard slug={slug} />
        </Suspense>
      </Section>
    </Section>
  )
}
