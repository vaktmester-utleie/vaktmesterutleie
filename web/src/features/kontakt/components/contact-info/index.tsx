import { Button } from '@/components/ui/button'
import Container from '@/components/wrapper/container'
import { Phone } from 'lucide-react'
import Link from 'next/link'

const PHONE = '+47 471 77 466'

export default function ContactInfo() {
  return (
    <Container className="border rounded-md p-6 bg-brand-500/10 flex flex-col items-center gap-3 text-center">
      <p className="font-semibold">Hastar det?</p>
      <p className="text-sm text-gray-500">Ring oss direkte for rask hjelp</p>
      <Button asChild>
        <Link
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          className="btn-primary flex items-center gap-2 px-6 py-2 rounded-md w-full justify-center"
        >
          <Phone className="w-4 h-4" />
          {PHONE}
        </Link>
      </Button>
    </Container>
  )
}
