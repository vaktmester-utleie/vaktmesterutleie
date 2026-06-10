import PageHeader from '@/components/page-header'
import Container from '@/components/wrapper/container'
import ServiceCard from './service-card'
import CardContainer from '@/components/card/card-container'

export default function Services() {
  return (
    <Container>
      <PageHeader
        label="våre tenester"
        title="Alt du treng —
éin leverandør
"
        subtitle="Eit breitt spekter av tenester for privatpersonar og bedrifter."
      />
      <CardContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ServiceCard />
      </CardContainer>
    </Container>
  )
}
