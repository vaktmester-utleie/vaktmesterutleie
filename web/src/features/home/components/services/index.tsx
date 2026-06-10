import PageHeader from '@/components/page-header'
import Container from '@/components/wrapper/container'
import ServicesCard from './card'

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
      <ServicesCard />
    </Container>
  )
}
