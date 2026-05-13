import Link from 'next/link'
import { Button } from '../ui/button'
import Container from '../wrapper/container'
import { Send, Phone } from 'lucide-react'

type Props = {
  subtitle: string
  title: string
  description: string
}
export default function CTA({ subtitle, title, description }: Props) {
  return (
    <Container className="bg-gray-100 py-40 ">
      <Container className="max-w-xl mx-auto  text-center flex flex-col gap-4">
        <p className="uppercase link-brand">{subtitle}</p>
        <p className="hero-title">{title}</p>
        <p>{description}</p>

        <Container className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/kontakt">
              <span>Send førespurnad</span>
              <Send />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="tel:+4747177466">
              <span>Ring oss direkte</span>
              <Phone />
            </Link>
          </Button>
        </Container>
      </Container>
    </Container>
  )
}
