import { Button } from '@/components/ui/button'
import Container from '@/components/wrapper/container'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <Container className="flex flex-col gap-6 max-w-xl">
      <h1 className="hero-title">Me fiksar det.</h1>
      <h2 className="hero-subtitle">
        Vaktmeistertenester, utstyrsutleige og droneinspeksjon.
      </h2>

      <Container className="flex flex-col sm:flex-row gap-4 md:max-w-md">
        <Button asChild>
          <Link href="/kontakt" className="flex items-center gap-2">
            <span> Få eit gratis tilbod</span>
            <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/utleige">Sjå utleigekatalog</Link>
        </Button>
      </Container>
    </Container>
  )
}
