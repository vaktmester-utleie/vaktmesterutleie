import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'Me er eit lokalt firma frå Osterøy med tømrarbakgrunn og brei erfaring innan vaktmeistertenester og utstyrleige.',
}
export default function Page() {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Section className="grid grid-cols-1 sm:grid-cols-2 gap-4" constraint>
        <Image
          className="rounded-lg shadow-sm"
          src={'/sivert.jpg'}
          width={1000}
          height={1000}
          alt="bilde av sivert sørås"
          loading="eager"
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
