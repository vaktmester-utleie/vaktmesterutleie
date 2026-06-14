import PageHeader from '@/components/page-header'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import RentalCategoryCard from '@/features/utleige/components/utleige/rental-categories-card'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Utleige',
  description:
    'Lei tilhengar, stillas, stigar og verktøy til gode prisar. Fleksible leigeavtalar og rask utlevering.',
}
export default function Page() {
  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <Container className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            label="utleigekatalog"
            title="Lei utstyr enkelt og rimeleg
   "
            subtitle="Tilhengarar, stillas, stigar og verktøy til gode prisar. Hent sjølv  eller avtal levering."
          />
        </Section>
      </Container>
      <Section constraint>
        <RentalCategoryCard />
      </Section>
    </Section>
  )
}
