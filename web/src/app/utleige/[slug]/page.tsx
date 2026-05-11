import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import Rental from '@/features/utleige/components/utleige'
import RentalCard from '@/features/utleige/components/utleige/rental-card'
import Hero from '@/features/utleige/hero'

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
      <Rental>
        <RentalCard slug={slug} />
      </Rental>
    </Section>
  )
}
