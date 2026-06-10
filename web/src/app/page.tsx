import CTA from '@/components/cta'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import Hero from '@/features/home/components/hero'
import Services from '@/features/home/components/services'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Heim',
  description:
    'Vaktmeistertenester, utstyrleige og droneinspeksjon i Osterøy- og Bergenregionen. Uforpliktande tilbod innan 24 timar.',
}
export default function Page() {
  return (
    <Section className="flex flex-col gap-20">
      <Container className="flex items-center bg-gray-100 py-40 border-y">
        <Section constraint>
          <Hero />
        </Section>
      </Container>

      <Section constraint>
        <Services />
      </Section>
      <CTA
        subtitle="klar til å starte?"
        title="Fortel oss kva du treng —
me ordnar resten"
        description="Enten du treng ein handverkar, leige utstyr eller ein droneinspeksjon"
      />
    </Section>
  )
}
