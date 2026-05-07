import { Phone } from 'lucide-react'
import Link from 'next/link'
import Container from '../wrapper/container'

export default function HeaderCTA() {
  return (
    <Container className="flex gap-4">
      <Link className="flex items-center gap-1" href={''}>
        <Phone size={14} />
        <span>00 00 00 00</span>
      </Link>
      <Link className="cta button-base" href={''}>
        {' '}
        Få tilbod
      </Link>
    </Container>
  )
}
