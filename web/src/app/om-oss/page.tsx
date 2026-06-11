import PageHeader from '@/components/page-header'
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
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <Container className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader title="Vaktmesterutleie" label="Om oss" />
        </Section>
      </Container>
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
          <h1 className="subtitle">
            Sørås Vaktmesterutleie vart etablert i 2019. Med fagbrev som tømrer
            og driftstid som vaktmester har ein opparbeida seg ein brei
            kompetanse i håndtverkarbransjen. Ved behov har me faste innleide
            sammarbeidspartnara.
          </h1>
        </Container>
      </Section>
    </Section>
  )
}
