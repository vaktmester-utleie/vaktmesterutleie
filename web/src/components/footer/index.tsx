import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-12">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <div>
                <p className="font-semibold text-sm">Sørås</p>
                <p className="text-xs text-gray-500">Vaktmesterutleie</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Vaktmeister-, utleige- og droneinspeksjonstenester i
              Bergensområdet sidan 2019.
            </p>
          </div>

          {/* Tenester */}
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Tenester</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/utleige"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Utleige
              </Link>
              <Link
                href="/vaktmeister"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Vaktmeister
              </Link>
              <Link
                href="/droneinspeksjon"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Droneinspeksjon
              </Link>
              <Link
                href="/prosjekt"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Prosjekt
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Kontakt</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                <span>
                  Vevleheiane 3<br />
                  5281 Valestrandfossen
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>+47 471 77 466</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-brand-500" />
                <span>post@vaktmesterutleie.no</span>
              </div>
            </div>
          </div>

          {/* Følg oss */}
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Følg oss</p>
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <span>Facebook her</span>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <span>Instagram her</span>
              </Link>
            </div>
            <p className="text-xs text-gray-400">Org.nr: 922 629 102</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="text-xs text-gray-400">
            © 2026 Sørås Vaktmesterutleie. Alle rettar reserverte.
          </p>
          <div className="flex gap-4">
            <Link
              href="/om-oss"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Kontakt
            </Link>
            <p className="text-xs text-gray-400">
              Utvikla av{' '}
              <Link
                href="https://linkedin.com/in/jonathanmjos"
                className="hover:text-gray-600"
              >
                Jonathan Mjøs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
