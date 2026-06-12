import { Button } from '@/components/ui/button'
import Container from '@/components/wrapper/container'
import Link from 'next/link'

export default function Hero() {
  return (
    <Container className="flex flex-col gap-6 max-w-lg">
      <h1 className="hero-title">Handverk du kan stole på.</h1>
      <h2 className="hero-subtitle">
        Vaktmeistertenester, utstyrsutleige og droneinspeksjon.
      </h2>

      <Container className="flex flex-col sm:flex-row gap-4 md:max-w-md">
        <Button asChild>
          <Link href="/kontakt" className="flex items-center flex gap-4 px-4">
            <span> Få eit gratis tilbod</span>
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link className="flex gap-4 px-4" href="/utleige">
            Sjå utleigekatalog
          </Link>
        </Button>
      </Container>
    </Container>
  )
}
