import PageHeader from '@/components/page-header'
import Container from '@/components/wrapper/container'
import ServiceCard from './service-card'
import CardContainer from '@/components/card/card-container'

export default function Services() {
  return (
    <Container>
      <PageHeader
        label="kva me tilbyr"
        title="Tenestene våre"
        subtitle="Eit breitt spekter av tenester for privatpersonar og bedrifter i Bergensregionen."
      />
      <CardContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ServiceCard />
      </CardContainer>
    </Container>
  )
}
