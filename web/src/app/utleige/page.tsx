import CardContainer from '@/components/card/card-container'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import RentalCategoryCard from '@/features/utleige/components/utleige/rental-categories-card'

export default function Page() {
  return (
    <Section className="page-section min-h-[80vh]">
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
          <RentalCategoryCard />
        </CardContainer>
      </Section>
    </Section>
  )
}
