import CardContainer from '@/components/card/card-container'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import RentalCard from '@/features/utleige/components/utleige/rental-card'
import { Metadata } from 'next'
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

  return (
    <Section className="page-section min-h-screen pb-40">
      <Section constraint>
        <PageHeader
          label="utleigekatalog"
          title="Lei utstyr enkelt og rimeleg
  "
          subtitle="Tilhengarar, stillas, stiegar og verktøy til gode prisar. Hent sjølv  eller avtal levering."
        />
      </Section>
      <Section constraint>
        <CardContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <RentalCard slug={slug} />
        </CardContainer>
      </Section>
    </Section>
  )
}
