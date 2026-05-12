import CardContainer from '@/components/card/card-container'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import RentalCard from '@/features/utleige/components/utleige/rental-card'

type Params = {
  params: {
    slug: string
  }
}
export default async function Page({ params }: Params) {
  const { slug } = await params

  return (
    <Section constraint className="page-section">
      <PageHeader
        label="utleigekatalog"
        title="Lei utstyr enkelt og rimeleg
  "
        subtitle="Tilhengarar, stillas, stiegar og verktøy til gode prisar. Hent sjølv  eller avtal levering."
      />
      <CardContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <RentalCard slug={slug} />
      </CardContainer>
    </Section>
  )
}
