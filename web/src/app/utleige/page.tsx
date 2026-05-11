import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import Rental from '@/features/utleige/components/utleige'
import RentalCategoryCard from '@/features/utleige/components/utleige/rental-categories-card'

export default function Page() {
  return (
    <Section className="page-section" constraint>
      <PageHeader
        label="utleigekatalog"
        title="Lei utstyr enkelt og rimeleg
   "
        subtitle="Tilhengarar, stillas, stiegar og verktøy til gode prisar. Hent sjølv  eller avtal levering."
      />
      <Rental>
        <RentalCategoryCard />
      </Rental>
    </Section>
  )
}
