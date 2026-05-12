import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import Image from 'next/image'

export default function Page() {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Section className="grid grid-cols-1 sm:grid-cols-2 gap-4" constraint>
        <Image
          className="rounded-lg shadow-sm"
          src={'/sivert.jpg'}
          width={500}
          height={500}
          alt="bilde av sivert sørås"
        />
        <Container>
          <h1 className="title uppercase">Om oss</h1>
          <p className="subtitle">
            Sørås Vaktmesterutleie vart etablert i 2019. Med fagbrev som tømrer
            og driftstid som vaktmester har ein opparbeida seg ein brei
            kompetanse i håndtverkarbransjen. Ved behov har me faste innleide
            sammarbeidspartnara.
          </p>
        </Container>
      </Section>
    </Section>
  )
}
