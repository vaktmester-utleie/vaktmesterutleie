import Container from '@/components/wrapper/container'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <Container className="flex flex-col gap-6 max-w-xl">
      <h1 className="hero-title">Handverk du kan stole på.</h1>
      <h2 className="hero-subtitle">
        Vaktmeistertenester, utstyrsutleige og droneinspeksjon for heile
        Bergensområdet — påliteleg sidan 2019.
      </h2>

      <Container className="flex flex-col sm:flex-row gap-4 md:max-w-md">
        <Link
          className="flex items-center justify-center gap-2 md:grow bg-brand-500 text-white rounded-md py-3 px-4 font-semibold"
          href="/kontakt"
        >
          <span>Få eit gratis tilbod</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          className="text-center md:grow rounded-md py-3 px-4 font-semibold border"
          href="/utleige"
        >
          Sjå utleigekatalog
        </Link>
      </Container>
    </Container>
  )
}
