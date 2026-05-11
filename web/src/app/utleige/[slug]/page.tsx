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
      <Hero />
      <Rental>
        <RentalCard slug={slug} />
      </Rental>
    </Section>
  )
}
