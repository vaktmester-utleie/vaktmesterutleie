import Container from '@/components/wrapper/container'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

const PHONE = '+47 471 77 466'

export default function ContactInfo() {
  return (
    <Container className="flex flex-col gap-4">
      <Container className="border rounded-xl p-6 flex flex-col gap-5">
        <p className="font-semibold text-base">Kontaktinfo</p>

        <Container className="flex flex-col gap-4">
          <Container className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-brand-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Adresse</p>
              <p className="text-sm text-gray-500">Vevleheiane 3</p>
              <p className="text-sm text-gray-500">5281 Valestrandfossen</p>
            </div>
          </Container>

          <Container className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-brand-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Telefon</p>
              <p className="text-sm text-gray-500">{PHONE}</p>
            </div>
          </Container>

          <Container className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-brand-500" />
            </div>
            <div>
              <p className="text-sm font-medium">E-post</p>
              <p className="text-sm text-gray-500">post@vaktmesterutleie.no</p>
            </div>
          </Container>

          <Container className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-brand-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Opningstider</p>
              <p className="text-sm text-gray-500">Man–Fre: 07:00–16:00</p>
              <p className="text-sm text-gray-500">Lør: Etter avtale</p>
            </div>
          </Container>
        </Container>
      </Container>

      <Container className="border rounded-lg p-6 bg-orange-50 flex flex-col items-center gap-3 text-center">
        <p className="font-semibold">Hastar det?</p>
        <p className="text-sm text-gray-500">Ring oss direkte for rask hjelp</p>
        <Link
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          className="btn-primary flex items-center gap-2 px-6 py-2 rounded-lg w-full justify-center"
        >
          <Phone className="w-4 h-4" />
          {PHONE}
        </Link>
      </Container>
    </Container>
  )
}
