import { Button } from '@/components/ui/button'
import Container from '@/components/wrapper/container'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

const PHONE = '47 17 74 66'
const PHONE_HREF = `tel:${PHONE.replace(/\s/g, '')}`
const EMAIL = 'post@vaktmesterutleie.no'

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-700">
        {icon}
      </span>
      <div className="text-sm">
        <p className="font-semibold text-gray-900">{label}</p>
        <div className="text-gray-500">{children}</div>
      </div>
    </li>
  )
}

export default function ContactInfo() {
  return (
    <Container className="flex flex-col gap-6">
      <div className="rounded-md border bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">Kontaktinfo</h2>

        <ul className="mt-6 flex flex-col gap-6">
          <ContactRow icon={<MapPin className="size-4" />} label="Adresse">
            <p>Vevleheiane 3</p>
            <p>5281 Valestrandsfossen</p>
          </ContactRow>

          <ContactRow icon={<Phone className="size-4" />} label="Telefon">
            <Link href={PHONE_HREF} className="hover:text-gray-900 underline">
              {PHONE}
            </Link>
          </ContactRow>

          <ContactRow icon={<Mail className="size-4" />} label="E-post">
            <Link
              href={`mailto:${EMAIL}`}
              className="hover:text-gray-900 underline"
            >
              {EMAIL}
            </Link>
          </ContactRow>
        </ul>
      </div>

      <div className="flex flex-col rounded-md bg-white items-center gap-2 rounded-md' border bg-gray-50 p-6 text-center sm:p-8">
        <p className="text-xl font-bold text-gray-900">Hastar det?</p>
        <p className="text-sm text-gray-500">Ring oss direkte for rask hjelp</p>
        <Button asChild size="lg" className="mt-2 w-full rounded-md">
          <Link href={PHONE_HREF}>
            {PHONE}
            <Phone />
          </Link>
        </Button>
      </div>
    </Container>
  )
}
