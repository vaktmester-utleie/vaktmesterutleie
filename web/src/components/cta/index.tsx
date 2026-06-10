import Link from 'next/link'
import { Button } from '../ui/button'
import Container from '../wrapper/container'
import { Send, Phone, ArrowRight } from 'lucide-react'

type Props = {
  subtitle: string
  title: string
  description: string
}
export default function CTA({ subtitle, title, description }: Props) {
  return (
    <Container className="flex items-center bg-gray-100 py-40 border-y min-h-[50dvh]">
      <Container className="max-w-xl mx-auto  text-center flex flex-col gap-4">
        <p className="uppercase link-brand">{subtitle}</p>
        <p className="hero-title">{title}</p>
        <p>{description}</p>

        <Container className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
          <Button asChild className="w-full sm:w-auto">
            <Link className="flex gap-4 px-4" href="/kontakt">
              <span>Send førespurnad</span>
              <ArrowRight />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link className="flex gap-4 px-4" href="tel:+4747177466">
              <span>Ring oss direkte</span>
              <Phone />
            </Link>
          </Button>
        </Container>
      </Container>
    </Container>
  )
}
