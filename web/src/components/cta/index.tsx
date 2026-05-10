import Link from 'next/link'
import { Button } from '../ui/button'
import Container from '../wrapper/container'
type Props = {
  subtitle: string
  title: string
  description: string
}
export default function CTA({ subtitle, title, description }: Props) {
  return (
    <Container className="bg-gray-100 py-20">
      <Container className="max-w-xl mx-auto  text-center flex flex-col gap-4">
        <p className="uppercase link-brand">{subtitle}</p>
        <p className="hero-title">{title}</p>
        <p>{description}</p>

        <Container className="flex gap-4  items-center justify-center">
          <Link className="btn-primary" href={''}>
            Send førespurnad
          </Link>
          <Button variant="outline">Ring oss direkte</Button>
        </Container>
      </Container>
    </Container>
  )
}
