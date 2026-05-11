import Section from '@/components/wrapper/section'
import Rental from '@/features/utleige/components/utleige'
import RentalCategoryCard from '@/features/utleige/components/utleige/rental-categories-card'
import Hero from '@/features/utleige/hero'

export default function Page() {
  return (
    <Section className="page-section" constraint>
      <Hero />
      <Rental>
        <RentalCategoryCard />
      </Rental>
    </Section>
  )
}
