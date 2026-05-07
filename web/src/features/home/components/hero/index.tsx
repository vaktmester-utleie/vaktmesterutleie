import Container from '@/components/wrapper/container'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <Container className="flex flex-col gap-6 max-w-lg">
      <h1 className="hero-title">Handverk du kan stole på.</h1>
      <h2 className="hero-subtitle">
        Vaktmeistertenester, utstyrsutleige og droneinspeksjon for heile
        Bergensområdet — påliteleg sidan 2019.
      </h2>

      <Container className="flex justify-between max-w-md gap-4">
        <Link
          className="flex items-center justify-center gap-2 grow bg-brand-500 text-white rounded-md py-2 px-2 font-semibold"
          href={''}
        >
          <span> Få eit gratis tilbod</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          className="text-center grow rounded-md py-2 px-2 font-semibold border"
          href={''}
        >
          Sjå utleigekatalog
        </Link>
      </Container>
    </Container>
  )
}
